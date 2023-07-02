import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "state/index.js";

export const PrivateRoutes = () => {
  const token = useSelector((state) => state.token);
  const expirationDate = useSelector((state) => state.expirationDate);
  const dispatch = useDispatch();

  const today = new Date(); // Get today's date

  if (expirationDate && expirationDate < today) {
    // Token has expired, clear it from memory
    dispatch(setLogout());
  }

  return token !== null ? <Outlet /> : <Navigate to="/login" />;
};
