import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth";

const store=configureStore({
    reducer:{Auth:authReducer}
})

export default store