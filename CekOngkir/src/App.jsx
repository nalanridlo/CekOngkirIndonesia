import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ShippingProvider } from "./context/ShippingProvider.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthProvider";
import { PropTypes } from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ShippingProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </ShippingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
