import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const goingSlice = createSlice({
  name: "userGoing",
  initialState: {
    going: [],
  },
  reducers: {
    going: (state, action) => {
      state.going = action.payload
    },
  },
})

export const { going } = goingSlice.actions

export const showGoing = () => (dispatch) => {
  axios.get("/api/going").then((r) => dispatch(going(r.data)))
}

export const selectGoing = (state) => state.going

export default goingSlice.reducer