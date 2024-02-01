import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth";
import { mailReducer } from "./Mail";

const store=configureStore({
    reducer:{Auth:authReducer,Mail:mailReducer}
})

export default store