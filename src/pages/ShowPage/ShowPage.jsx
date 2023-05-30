import React from "react";
import showStore from "../../stores/showStores";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ShowPage() {
  // variable which contain request api
  const store = showStore();
  // this hook need for get variabli from url
  const params = useParams();

  // useEffect for update our component
  React.useEffect(() => {
    store.fetchData(params.id);
  }, []);

  return (
    <div>
      <AreaChart
        width={500}
        height={400}
        data={store.graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
}
