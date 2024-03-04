import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: {
      username: null,
      email: null,
      token: null,
      identity: [],
   },
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      updateUser: (state, action) => {
         state.value.username = action.payload.username;
         state.value.email = action.payload.email;
         state.value.token = action.payload.token;
         state.value.identity[0].name = action.payload.identity[0].name;
         state.value.identity[0].firstname = action.payload.identity[0].firstname;
         state.value.identity[0].phoneNumber = action.payload.identity[0].phoneNumber;
      },
      updateIdentity: () => {
			state.value.identity[0].birthDate = action.payload.identity[0].birthDate;
         state.value.identity[0].birthZipCode = action.payload.identity[0].birthZipCode;
         state.value.identity[0].familySituation = action.payload.identity[0].familySituation;
			state.value.identity[0].zipCode = action.payload.identity[0].zipCode;
			state.value.identity[0].city = action.payload.identity[0].city;
			state.value.identity[0].country = action.payload.identity[0].country;
		},
   },
});

export const { updateUser, updateIdentity } = userSlice.actions;
export default userSlice.reducer;
