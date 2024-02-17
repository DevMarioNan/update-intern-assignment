import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    token:null,
    xp:0,
    cards:[]
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setLogin:(state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.xp = action.payload.user.xp;
            
        },
        doLogout:(state) => {
            state.user = null;
            state.token = null;
            state.xp = 0;
            state.cards = [];
        },
        updateXp:(state, action) => {
            state.xp = state.xp + action.payload;
        },
        setCards:(state, action) => {
            state.cards = action.payload;
        },
        setLogout:(state) => {
            state.user = null;
            state.token = null;
            state.xp = 0;
            state.cards = [];
        }
    }
});

export const { setLogin, doLogout, updateXp, setCards,setLogout } = userSlice.actions;
export default userSlice.reducer;