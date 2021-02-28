import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const notGoingSlice = createSlice({
  name: "userNotGoing",
  initialState: {
    notGoing: [],
  },
  reducers: {
    notGoing: (state, action) => {
      state.notGoing = action.payload
    },
  },
})

export const { notGoing } = notGoingSlice.actions

export const showNotGoing = () => (dispatch) => {
  axios.get("/api/NotGoing").then((r) => dispatch(notGoing(r.data)))
}

export const selectNotGoing = (state) => state.notGoing

export default notGoingSlice.reducer