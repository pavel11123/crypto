import axios from "axios";
import { create } from "zustand";
import debounce from "../helpers/debounce";

const homeStore = create((set) => ({
  coins: [], // TODO
  trending: [], // TODO -> our start crypto coins
  query: "", // TODO

  setQuery: (e) => {
    set({ query: e.target.value });
    homeStore.getState().searchCoins();
  },

  // search our crypto coin
  searchCoins: debounce(async (e) => {
    const { query, trending } = homeStore.getState(); // TODO getState

    if (query.length > 2) {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );

      console.log(response);

      // coins contain elements which we get from request search API
      const coins = response.data.coins.map((coin) => {
        return {
          name: coin.name,
          imageLarge: coin.large,
          id: coin.id,
        };
      });

      set({ coins }); // maybe save our elements which maps (coins)
    } else {
      // show start crypto coins
      set({ coins: trending });
    }
  }, 500), // debounce need for our request send 500ms (optimization for our server)

  fetchCoins: async () => {
    // use axios request api + async await because response = Promise
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    // coins contain elements which we get from request
    const coins = response.data.coins.map((coin) => {
      return {
        name: coin.item.name,
        imageLarge: coin.item.large,
        id: coin.item.id,
      };
    });

    set({ coins, trending: coins }); // maybe save our elements which maps (coins)
  },
}));

export default homeStore;
