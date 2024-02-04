// import BrandOne from "../images/brand/brand-01.svg";
// import BrandTwo from "../images/brand/brand-02.svg";
// import BrandThree from "../images/brand/brand-03.svg";
// import BrandFour from "../images/brand/brand-04.svg";
// import BrandFive from "../images/brand/brand-05.svg";
const TableOne = ({ data }: any) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Clicks by Project
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-2">
          <div className="p-2.5 xl:p-5 flex items-center justify-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Project
            </h5>
          </div>
          <div className="p-2.5 xl:p-5 flex items-center justify-center">
            {/* <img src={BrandThree} alt="Brand" /> */}
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Clicks
            </h5>
          </div>
        </div>
        {data.map((x: any, i: number) => (
          <div
            key={i}
            className="grid grid-cols-2 border-b border-stroke dark:border-strokedark sm:grid-cols-2"
          >
            <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white sm:block">{x.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{x.clicks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
