import React from "react";
import showStore from "../../stores/showStores";

export default function ShowPage() {
  // variable which contain request api
  const store = showStore();

  // useEffect for update our component
  React.useEffect(() => {
    store.fetchData();
  }, []);

  return <div>show</div>;
}
