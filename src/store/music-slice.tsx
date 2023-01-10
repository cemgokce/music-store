import { createSlice } from "@reduxjs/toolkit";
import { convertToObject } from "typescript";
import musicsData from "../mockData/musicData";

export interface MusicType {
  name: string;
  singer: string;
  link: string;
  id: number;
  addedFav: boolean;
}

export interface MusicStateType {
  musics: MusicType[];
  totalMusic: number;
}
const musicSlice = createSlice({
  name: "music",
  initialState: {
    musics: musicsData,
    totalMusic: 4,
  },
  reducers: {
    addMusic(state: MusicStateType, action) {
      const newItem = action.payload;
      state.totalMusic++;
      state.musics.push({
        id: newItem.id,
        name: newItem.name,
        singer: newItem.singer,
        link: newItem.link,
        addedFav: false,
      });
    },
    addFavMusic(state: MusicStateType, action) {
      const favId = action.payload;
      console.log("fovoriler")
      console.log(favId)
      const existingItem = state.musics.find((music) => music.id === favId);
      if(existingItem){
        existingItem.addedFav=!existingItem.addedFav;
      }
    },
  },
});

export const musicActions = musicSlice.actions;
export default musicSlice;
