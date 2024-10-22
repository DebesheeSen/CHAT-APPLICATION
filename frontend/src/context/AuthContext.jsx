import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({children}) =>{

	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null); //authUser gets value from local storage which is present only if user is signed in.

	return <AuthContext.Provider value={{authUser, setAuthUser}}>
		{children}
	</AuthContext.Provider>
}