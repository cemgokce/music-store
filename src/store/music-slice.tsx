import { createSlice } from "@reduxjs/toolkit";
import musicsData from "../data";

export interface MusicType {
    name:string,
    singer:string,
    link: string,
    id:number
}

export interface MusicStateType {
    musics: MusicType[]
    totalMusic: number
}
const musicSlice = createSlice({
    name: "music",
    initialState: {
      musics: musicsData,
      totalMusic: 4
    },
    reducers: {
      addMusic(state:MusicStateType, action) {
        console.log("girdiiiiiiii")
        const newItem = action.payload;
        state.totalMusic++;
          state.musics.push({
            id: newItem.id,
            name: newItem.name,
            singer: newItem.singer,
            link: newItem.link,
          });
        }
      }
    },
  );

  export const musicActions = musicSlice.actions;
  export default musicSlice;
  