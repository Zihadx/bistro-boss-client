import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useCart = () => {
  const { user, loading } = useAuth();

  // const token = localStorage.getItem("access-token");

  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,

    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return response.json();
    // },

    queryFn: async () => {
      const response = await axiosSecure(`/carts?email=${user?.email}`);
      // console.log("res from axios", response);
      return response.data;
    },
  });
  return [carts, refetch];
};

export default useCart;
