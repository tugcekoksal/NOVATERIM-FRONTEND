import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: {
    username: null,
    email: null,
    token: null,
    identity: {},
    isConnected: false,
  },
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.value.username = action.payload.username
      state.value.email = action.payload.email
      state.value.token = action.payload.token
      state.value.identity.name = action.payload.identity.name
      state.value.identity.firstName = action.payload.identity.firstName
      state.value.identity.phoneNumber = action.payload.identity.phoneNumber
    },
    updateIdentity: (state, action) => {
      state.value.identity.birthDate = action.payload.identity.birthDate
      state.value.identity.birthZipCode = action.payload.identity.birthZipCode
      state.value.identity.familySituation =
        action.payload.identity.familySituation
      state.value.identity.zipCode = action.payload.identity.zipCode
      state.value.identity.city = action.payload.identity.city
      state.value.identity.country = action.payload.identity.country
    },
    updateAddress: (state, action) => {
      state.value.addresses.country = action.payload.adresses.birthDate
      state.value.addresses.city = action.payload.addresses.city
      state.value.addresses.zipCode = action.payload.addresses.zipCode
      state.value.addresses.street = action.payload.addresses.street
    },
    logIn: (state, action) => {
      state.value.isConnected = action.payload
    },
    logOut: (state, action) => {
      state.value.isConnected = !state.value.isConnected
    },
  },
})

export const {
  updateUser,
  updateAddress,
  updateIdentity,
  logIn,
  logOut,
  uploadDocument,
  deleteDocument,
} = userSlice.actions
export default userSlice.reducer
