import { configureStore } from "@reduxjs/toolkit"
import carReducer from "../redux/car/carSlice"
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
})
