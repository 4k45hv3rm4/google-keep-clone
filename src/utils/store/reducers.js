import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noteCount: 2,
  notes: [
    {
      id: 0,
      title: "Test title 1 ",
      content: "This is test content 1",
      pinned: false,
    },
    {
      id: 1,
      title: "Test Pinned title 2 ",
      content: "This is test content 2",
      pinned: true,
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNote: (state, data) => {
      state.noteCount++;
      state.notes.push(data.payload);
    },
    deleteNote: (state, data) => {
      state.notes = state.notes.filter((item) => item.id !== data.payload);
    },
    pinNote: (state, data) => {
      let index = state.notes.findIndex((x) => x.id === data.payload);
      state.notes[index].pinned = !state.notes[index].pinned;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, deleteNote, pinNote } = counterSlice.actions;

export default counterSlice.reducer;
