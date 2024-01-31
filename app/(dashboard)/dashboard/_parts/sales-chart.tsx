import { getOrderChart } from "@/lib/data/order";
import Chart from "./chart";

const SalesChart = async () => {
  const data = await getOrderChart();

  return <>{data.length !== 0 && <Chart data={data} />}</>;
};

export default SalesChart;
