import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

type ChartProps = {
  chartOptions: Highcharts.Options;
};

export default function Chart({ chartOptions }: ChartProps) {
  return (
    <div className="custom-chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        containerProps={{ style: { height: "100%" } }}
      />
    </div>
  );
}
