import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  console.log(user);
  const [axiosSecure] = useAxiosSecure();

  // const token = localStorage.getItem("access-token");

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/users/admin/${user?.email}`);
      // console.log(response);
      return response.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
