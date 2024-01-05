import { Chart } from "react-google-charts";

const MapOne: any = ({ data }: any) => {
  return <Chart chartType="GeoChart" width="100%" height="400px" data={data} />;
};

export default MapOne;
