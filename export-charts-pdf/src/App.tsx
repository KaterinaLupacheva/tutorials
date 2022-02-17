import "./App.css";
import Chart from "./Chart";
import {
  barChartOptions,
  columnChartOptions,
  lineChartOptions,
} from "./options";
import { exportMultipleChartsToPdf } from "./utils";

function App() {
  return (
    <div className="App">
      <button className="button" onClick={exportMultipleChartsToPdf}>
        Export to PDF
      </button>
      <Chart chartOptions={lineChartOptions} />
      <Chart chartOptions={barChartOptions} />
      <Chart chartOptions={columnChartOptions} />
      <div className="row">
        <Chart chartOptions={lineChartOptions} />
        <Chart chartOptions={columnChartOptions} />
      </div>
    </div>
  );
}

export default App;
