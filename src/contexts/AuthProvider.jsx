// import { createContext, useContext, useState, useEffect } from "react";
// import instance from "../config/axiosConfig";

// const authContext = createContext();

// function AuthProvider({ children }) {
//     const [isLoggedIn, setIsLoggedIn] = useState(null);

//     useEffect(() => {
//         checkAuthStatus();
//     }, []);

//     async function checkAuthStatus() {
//         console.log("inside authProvider");
//         try {
//             const response = await instance.get("/auth/authCheck", {
//                 withCredentials: true,
//             });
//             setIsLoggedIn(true);
//         } catch (error) {
//             console.log(error);
//             setIsLoggedIn(false);
//         }
//     }

//     async function logout() {
//         try {
//             await instance.post(
//                 "/auth/logout",
//                 {},
//                 {
//                     withCredentials: true,
//                 }
//             );
//             setIsLoggedIn(false);
//             <Navigate to="/login" />;
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <authContext.Provider value={{ isLoggedIn, checkAuthStatus, logout }}>
//             {children}
//         </authContext.Provider>
//     );
// }

// export function useAuth() {
//     return useContext(authContext);
// }

// export default AuthProvider;

// src/contexts/AuthProvider.jsx




import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";

const authContext = createContext();

function authReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isLoggedIn: true };
        case "LOGOUT":
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

function AuthProvider({ children }) {
    const initialState = {
        isLoggedIn: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        // 🔥 listen to firebase auth state
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: "LOGIN" });
            } else {
                dispatch({ type: "LOGOUT" });
            }
        });

        return () => unsubscribe();
    }, []);

    async function logout() {
        try {
            await signOut(auth); // 🔥 Firebase logout
            dispatch({ type: "LOGOUT" });
        } catch (error) {
            console.log("Logout Error:", error);
        }
    }

    return (
        <authContext.Provider value={{ state, logout }}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth() {
    return useContext(authContext);
}

export default AuthProvider;