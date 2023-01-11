import { createSlice } from "@reduxjs/toolkit";
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
      const embedLink = newItem.link.split("=");
      state.musics.unshift({
        id: newItem.id,
        name: newItem.name,
        singer: newItem.singer,
        link: embedLink[1],
        addedFav: false,
      });
    },
    addFavMusic(state: MusicStateType, action) {
      const favId = action.payload;
      console.log("fovoriler");
      console.log(favId);
      const existingItem = state.musics.find((music) => music.id === favId);
      if (existingItem) {
        existingItem.addedFav = !existingItem.addedFav;
      }
    },
    deleteMusic(state: MusicStateType, action) {
      const musicId = action.payload;
      console.log("delete");
      console.log(musicId);
      state.musics = state.musics.filter((music) => music.id !== musicId);
      
    },
  },
});

export const musicActions = musicSlice.actions;
export default musicSlice;
