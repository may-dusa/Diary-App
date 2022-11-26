import { createSlice } from "@reduxjs/toolkit";

const EntrySlice = createSlice({
  name: "Entries",
  initialState: {
    entries: [],
  },
  reducers: {
    addEntry(state, actions) {
      let newEntries = state.entries.push({
        dt: actions.payload.dt,
        entry: actions.payload.entry,
      });
    },
  },
});

export const { addEntry } = EntrySlice.actions;
export default EntrySlice.reducer;
export const getEntries = (state) => state.entries.entries;
