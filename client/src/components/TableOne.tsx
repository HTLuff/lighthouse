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
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5 flex items-center justify-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Project
            </h5>
          </div>
          <div className="p-2.5 xl:p-5 flex items-center justify-center">
            {/* <img src={BrandThree} alt="Brand" /> */}
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source Code
            </h5>
          </div>
          <div className="p-2.5 xl:p-5 flex items-center justify-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Demo
            </h5>
          </div>
        </div>
        {data.map((x: any) => (
          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-3">
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img
                  className="rounded-3xl w-10"
                  src={`/${x.logo}`}
                  alt={`${x.name} logo`}
                />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {x.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{x.sourceCodeClicks}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{x.demoClicks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
