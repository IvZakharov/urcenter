import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import dataSlice from "./slices/dataSlice";

const makeStore = () => {
  return configureStore({
    reducer: { dataSlice },
  });
};

export const store = makeStore();
// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
