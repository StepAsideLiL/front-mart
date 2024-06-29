import { order } from "@/lib/data";
import Chart from "./chart";

const SalesChart = async () => {
  const data = await order.getOrderChart();

  return <>{data.length !== 0 && <Chart data={data} />}</>;
};

export default SalesChart;
