import React from "react";
import homeStore from "../../stores/homeStores";
import { Link } from "react-router-dom";

export default function HomePage() {
  const store = homeStore();

  // create useEffect for update our component
  React.useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <input type="text" value={store.query} onChange={store.setQuery} />
      {
        // deduce our crypto coin on window with map
        store.coins.map((coin) => {
          return (
            <div key={coin.id}>
              <div>
                <img src={coin.imageLarge} alt={coin.name} />
              </div>
              <Link to={`/${coin.id}`}>{coin.name}</Link>
            </div>
          );
        })
      }
    </div>
  );
}
