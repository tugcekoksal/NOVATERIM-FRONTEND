import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: {
      username: null,
      email: null,
      token: null,
      identity: {},
      isConnected: false,
      documents: [],
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
         state.value.identity.name = action.payload.identity.name;
         state.value.identity.firstName = action.payload.identity.firstName;
         state.value.identity.phoneNumber = action.payload.identity.phoneNumber;
         
      },
      updateIdentity: (state, action) => {
			state.value.identity.birthDate = action.payload.identity.birthDate;
         state.value.identity.birthZipCode = action.payload.identity.birthZipCode;
         state.value.identity.familySituation = action.payload.identity.familySituation;
			state.value.identity.zipCode = action.payload.identity.zipCode;
			state.value.identity.city = action.payload.identity.city;
			state.value.identity.country = action.payload.identity.country;
		},
      logIn: (state, action) => {
         state.value.isConnected = action.payload
      },
      logOut: (state, action) => {
         state.value.isConnected = !state.value.isConnected;
      },
      uploadDocument: (state, action) => {
         state.value.documents.push(action.payload);
      },
      deleteDocument: (state, action) => {
         state.value.documents = state.value.documents.filter(data => data.url !== action.payload.url);
      }
   },
});

export const { updateUser, updateIdentity, logIn, logOut, uploadDocument, deleteDocument } = userSlice.actions;
export default userSlice.reducer;
