import { createContext, useContext, useReducer } from "react";

const initialState = {
	blurredBg: false,
};

const AppContext = createContext(initialState);

const appActions = (dispatch) => {
	return {
		setBlurred: (value) => dispatch({ type: "SET_BLURRED", payload: value }),
	};
};

const appReducer = (state, action) => {
	switch (action.type) {
		case "SET_BLURRED":
			typeof window !== "undefined"
				? localStorage.setItem("IS_BLURRED", action.payload)
				: null;
			return { ...state, blurredBg: action.payload };

		default:
			return state;
	}
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);
	const actions = appActions(dispatch);
	return <AppContext.Provider value={{ ...state, ...actions }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, useAppContext };
