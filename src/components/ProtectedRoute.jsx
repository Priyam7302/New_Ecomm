// import { Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthProvider";

// function ProtectedRoute({ children }) {
//     const { isLoggedIn } = useAuth();

//     console.log("isLoggedIn", isLoggedIn); // Logging as false, even after logging in

//     if (isLoggedIn === null) {
//         return <div>Loading...</div>;
//     }

//     if (!isLoggedIn) {
//         return <Navigate to="/login" />;
//     }

//     return children;
// }


// export default ProtectedRoute;
// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function ProtectedRoute({ children }) {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn === null) return <div>Loading...</div>;

    return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
