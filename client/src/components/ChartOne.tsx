// EXTERNAL
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
// TYPES
interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const generateOptions: any = (dateRange: any) => ({
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE", "#10B981", "#375E83", "#259AE6"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: dateRange.map((x: any) => x),
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "10px",
      },
    },
    min: 0,
    max: 100,
  },
});

const ChartOne: any = ({ data, dateRange }: any) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <h5 className="text-xl font-semibold text-black dark:text-white">
        Last 7 Days
      </h5>
      <div className="flex flex-wrap items-start justify-between gap-1 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-1 sm:gap-1">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">{data[0].name}</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">{data[1].name}</p>
            </div>
          </div>
        </div>
        {/* <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button
              onClick={() => setFilter("week")}
              className={`${
                filter === "week" && "bg-white shadow-card"
              } rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark`}
            >
              Week
            </button>
            <button
              onClick={() => setFilter("month")}
              className={`${
                filter === "month" && "bg-white shadow-card"
              } rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark`}
            >
              Month
            </button>
            <button
              onClick={() => setFilter("year")}
              className={`${
                filter === "year" && "bg-white shadow-card"
              } rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark`}
            >
              Year
            </button>
          </div>
        </div> */}
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={generateOptions(dateRange)}
            series={data}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
