import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  if (!localStorage.getItem("user token")) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
