import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
}

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
})

const { reducer, actions } = carSlice

export default reducer
