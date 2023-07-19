import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "state/index.js";

export const PrivateRoutes = () => {
  const token = useSelector((state) => state.token);
  const expirationDate = useSelector((state) => state.expirationDate);

  const dispatch = useDispatch();
  let isValid = true;

  if (!token) {
    isValid = false;
  }

  if (!expirationDate) {
    isValid = false;
  }

  const today = new Date(); // Get today's date
  const expirationDateConverted = new Date(expirationDate);

  if (expirationDateConverted < today) {
    dispatch(setLogout());
    isValid = false;
  }

  return isValid ? <Outlet /> : <Navigate to="/login" />;
};
