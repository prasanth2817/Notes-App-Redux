import { createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

function params() {
  const params = useParams();
}
export const userSlice = createSlice({
  name: "Notes",
  initialState: [
    {
      id: 0,
      title: "Feedback",
      timestamp: new Date().toISOString(),
      notes:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit cum natus sed nesciunt eveniet distinctio animi ex earum perferendis et qui quisquam alias debitis vero consectetur quasi, ratione necessitatibus eius.",
    },
    {
      id: 1,
      title: "Weekly Tasks",
      notes:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae laudantium dolore temporibus. Numquam voluptatem blanditiis eum exercitationem unde dolore excepturi non, molestiae sequi autem, ad id.",
    },
    {
      id: 2,
      title: "Lyrics",
      notes:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. En sequi eius quis cupiditate deserunt deleniti! Perspiciatis asperiores voluptates atque quos, molestias iusto eveniet reiciendis nesciunt nisi!",
    },
  ],
  reducers: {
    add: (state, action) => {
      let id = 0;
      if (state.length > 0) {
        id = state[state.length - 1].id + 1;
      }
      let newNote = {
        ...action.payload,
        id: id,
        timestamp: new Date().toISOString(),
      };
      state.unshift(newNote);
    },
    delete: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
    edit: (state, action) => {
      const { id, title, notes } = action.payload;
      const noteIndex = state.findIndex((note) => note.id === id);

      if (noteIndex !== -1) {
        state[noteIndex] = { id, title, notes };
      }
    },
  },
});

export const { add, delete: deleteNote, edit } = userSlice.actions;
export default userSlice.reducer;
