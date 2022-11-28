import { createSlice } from "@reduxjs/toolkit";
import DateBadge from "../components/DateBadge";

const EntrySlice = createSlice({
  name: "Entries",
  initialState: {
    entries: [],
  },
  reducers: {
    addEntry(state, actions) {
      state.entries.push({
        date: actions.payload.date,
        entry: actions.payload.entry,
      });
    },
  },
});

export const { addEntry } = EntrySlice.actions;
export default EntrySlice.reducer;
export const getEntries = (state) => state.entries.entries;
