import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

type UserState = {
  user: any;
};

const initialState: UserState = {
  user: null,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = slice.actions;

// selectors
export const selectUser = (state: UserState) => state.user.user;

export default slice.reducer;

// -------------------

// export const getCurrentUserData = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };
