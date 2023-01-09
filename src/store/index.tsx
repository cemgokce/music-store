import { configureStore } from "@reduxjs/toolkit";

import musicSlice from "./music-slice";

const store =configureStore({
    reducer: {music: musicSlice.reducer}
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

