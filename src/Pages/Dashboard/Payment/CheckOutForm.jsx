import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import "./CheckOutForm.css";

const CheckOutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  console.log(price);
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // console.log('card :', card)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error:", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method:", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      //save payment info to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        itemNames: cart.map((item) => item.name),
        status: "service pending",
        menuItems: cart.map((item) => item.menuItemId),
        cartItems: cart.map((item) => item._id),
      };
      axiosSecure.post("/payment", payment).then((res) => {
        console.log(res.data);
        if (res.data.result.insertedId) {
          // display confirm
        }
      });
    }
  };
  return (
    <div className="md:w-1/2 mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-ghost bg-[#D1A054] text-white
         hover:text-black btn-sm mt-8"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 mt-4">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600 mt-4">
          Transaction complete with <br />
          transactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
