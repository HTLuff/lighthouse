import Breadcrumb from "../../components/Breadcrumb.tsx";
import TableOne from "../../components/TableOne.tsx";
// import ChartOne from "../../components/ChartOne.tsx";
// import ChartThree from "../../components/ChartThree.tsx";
// import ChartTwo from "../../components/ChartTwo.tsx";

const Clicks = () => {
  return (
    <>
      <Breadcrumb pageName="Clicks" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
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
