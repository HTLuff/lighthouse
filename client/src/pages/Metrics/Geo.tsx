import Breadcrumb from "../../components/Breadcrumb.tsx";
import MapOne from "../../components/MapOne.tsx";

const Geo = () => {
  return (
    <>
      <Breadcrumb pageName="Geo" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <MapOne
            data={[
              ["Country", "Popularity"],
              ["Germany", 200],
              ["United States", 300],
              ["Brazil", 400],
              ["Canada", 500],
              ["France", 600],
              ["RU", 700],
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Geo;
