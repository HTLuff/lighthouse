// COMPONENTS
import ChartOne from "../components/ChartOne.tsx";
import ChartThree from "../components/ChartThree.tsx";
import Heading from "../components/Heading.tsx";
import TableOne from "../components/TableOne.tsx";
// HOOKS
import { useDataContext } from "../hooks/DataProvider.tsx";
// ASSETS
import * as eventData from "../data.json";

const Dashboard = () => {
  const { data } = useDataContext();

  function getLast7Days() {
    const dates = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() - i);

      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");

      const formattedDate = `${day}/${month}`;
      dates.push(formattedDate);
    }

    return dates;
  }

  // Example usage
  const last7Days = getLast7Days();
  return (
    <>
      <Heading pageName={data?.siteName || ""} />
      <div className="col-span-12 xl:col-span-8">
        <ChartOne
          dateRange={last7Days}
          data={[
            {
              name: "Views",
              data: [1, 1, 3, 1, 0, 8, 3],
            },
            { name: "Clicks", data: [6, 5, 15, 2, 0, 40, 12] },
          ]}
        />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="md:col-span-6 col-span-12">
          <ChartThree
            title={"Device Type"}
            data={[
              { label: "Desktop", value: 65 },
              { label: "Mobile", value: 34 },
            ]}
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <ChartThree
            title={"Traffic Source"}
            data={[
              { label: "LinkedIn", value: 15 },
              { label: "Direct", value: 29 },
              { label: "Otta", value: 35 },
              { label: "GitHub", value: 21 },
            ]}
          />
        </div>
        {/* <MapOne /> */}
      </div>
      <div className="mt-4 col-span-12 xl:col-span-8">
        <TableOne
          data={[
            {
              name: "lighthouse_demo",
              clicks: 7,
            },
            {
              name: "lighthouse_source",
              clicks: 7,
            },
            {
              name: "sum_source",
              clicks: 5,
            },
            {
              name: "moon_demo",
              clicks: 3,
            },
            {
              name: "gbbd_source",
              clicks: 2,
            },
          ]}
        />
      </div>
    </>
  );
};

export default Dashboard;
