import { useAuth } from "@/contexts/Auth";
import { Navigate, Outlet } from "react-router-dom";

export default function Profile() {
  const {isAuth} = useAuth();

  if(!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <Outlet />
  )
}