import { Chrono } from "react-chrono";

const TimelineComponent = () => {
  return (
    <>
      <div className="lg:mx-24 my-10">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          hideControls
          disableAutoScrollOnClick
          allowDynamicUpdate
          cardHeight={50}
          cardWidth={200}
          theme={{
            primary: "#54BD95",
            secondary: "#fff",
          }}>
          <div>
            <div className="font-Inter text-center text-xl font-semibold">
              2018
            </div>
            <div className="font-Inter text-center text-md font-normal">
              Launched the first product
            </div>
          </div>

          <div>
            <div className="font-Inter text-center text-xl font-semibold">
              2019
            </div>
            <div className="font-Inter text-center text-md font-normal">
              Increased our footproint beyond Delhi-NCR
            </div>
          </div>

          <div>
            <div className="font-Inter text-center text-xl font-semibold">
              2021
            </div>
            <div className="font-Inter text-center text-md font-normal">
              Served Delhi Government by installing USB in bus depots
            </div>
          </div>

          <div>
            <div className="font-Inter text-center text-xl font-semibold">
              2022
            </div>
            <div className="font-Inter text-center text-md font-normal">
              Current scale
            </div>
            <div className="font-Inter text-center text-sm font-normal">
              10k+ units/month
            </div>
          </div>
        </Chrono>
      </div>
    </>
  );
};

export default TimelineComponent;
