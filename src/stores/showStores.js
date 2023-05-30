import axios from "axios";
import { create } from "zustand";

const showStore = create((set) => ({
  fetchData: async () => {
    console.log("pop");
  },
}));

export default showStore;
