import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adBgColor:"#D51B21",
    adImage: "",
    adText: "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
    adCTA: "Shop Now",
};

export const adSlice = createSlice({
    name: "ad",
    initialState,
    reducers: {
        adBgColor: (state,action) => {
            state.adBgColor = action.payload;
        },
        adImage: (state,action) => {
            state.adImage = action.payload;
        },
        adText: (state,action) => {
            state.adText = action.payload
        },
        adCTA: (state,action) => {
            state.adCTA = action.payload;
        },
    },
});


export const { adBgColor, adImage, adText, adCTA } = adSlice.actions;

export default adSlice.reducer;



