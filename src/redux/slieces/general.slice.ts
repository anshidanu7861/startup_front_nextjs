import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateData = {
  userDetails: {
    name: string;
    email: string;
    token: string;
  };
};

interface initialPayload {
  name: string;
  email: string;
  token: string;
}

const initialState: initialStateData = {
  userDetails: {
    name: "",
    email: "",
    token: "",
  },
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setUserEnitialData: (state, action: PayloadAction<initialPayload>) => {
      state.userDetails.email = action.payload.email;
      state.userDetails.name = action.payload.name;
      state.userDetails.token = action.payload.token;
    },
  },
});

export const { setUserEnitialData } = generalSlice.actions;
export default generalSlice.reducer;
