import axios from "axios";
import { create } from "zustand";

const showStore = create((set) => ({
  graphData: [],

  fetchData: async (id) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
    );
    // console.log(response.data);

    const graphData = response.data.prices.map((price) => {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString("en-us");

      return {
        Date: date,
        Price: p,
      };
    });

    set({ graphData }); // maybe save our elements which maps (graphData)
  },
}));

export default showStore;
