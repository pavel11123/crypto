import React from "react";
import s from "./HomePage.module.scss";
import cn from "classnames";
import homeStore from "../../stores/homeStores";
import { Link } from "react-router-dom";

export default function HomePage() {
  const store = homeStore();

  // create useEffect for update our component
  React.useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div className={cn(s.homeSection, "home__container d-fl-col")}>
      <input
        type="text"
        value={store.query}
        onChange={store.setQuery}
        className={s.input}
      />
      {
        // deduce our crypto coin on window with map
        store.coins.map((coin) => {
          return (
            <div className={cn("d-fl")} key={coin.id}>
              <div className={s.img}>
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
