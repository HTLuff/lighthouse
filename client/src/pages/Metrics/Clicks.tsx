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
          <TableOne />
        </div>
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree /> */}
      </div>
    </>
  );
};

export default Clicks;
