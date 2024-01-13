import Breadcrumb from "../../components/Breadcrumb.tsx";
import ChartFour from "../../components/ChartFour.tsx";
import TableOne from "../../components/TableOne.tsx";
// import ChartOne from "../../components/ChartOne.tsx";
// import ChartThree from "../../components/ChartThree.tsx";
// import ChartTwo from "../../components/ChartTwo.tsx";

const Clicks = () => {
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
  return (
    <>
      <Breadcrumb pageName="Clicks" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour
            title={"Last 7 days"}
            data={[{ data: [1, 2, 1, 4, 2, 4, 5] }]}
            dateRange={getLast7Days()}
          />
        </div>
        <div className="col-span-12">
          <TableOne
            data={[
              {
                name: "Lighthouse",
                sourceCodeClicks: 5,
                demoClicks: 1,
                logo: "lighthouse-analytics.png",
              },
              {
                name: "Cammy",
                sourceCodeClicks: 5,
                demoClicks: 1,
                logo: "cammy.png",
              },
              {
                name: "SUM",
                sourceCodeClicks: 5,
                demoClicks: 1,
                logo: "sum-bank.png",
              },
              {
                name: "Moon Notes",
                sourceCodeClicks: 5,
                demoClicks: 1,
                logo: "moon-notes.png",
              },
              {
                name: "Git Branch Batch Delete",
                sourceCodeClicks: 5,
                demoClicks: 1,
                logo: "batchdelete.png",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Clicks;
