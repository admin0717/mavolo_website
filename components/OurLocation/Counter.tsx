import type { FC } from "react";
import { CountUp } from "use-count-up";

const Counter: FC = () => {
  return (
    <>
      <div className="flex items-start justify-between lg:space-x-10 space-y-10 mx-auto text-center lg:mx-0 lg:text-start lg:space-y-0 flex-col lg:flex-row">
        <div>
          <div className="capitalize  text-md">Number of Clients served:</div>
          <div className="font-bold text-4xl">
            <h2>
              <CountUp isCounting end={150} duration={5} easing="linear" />+
            </h2>
          </div>
        </div>

        <div>
          <div className="capitalize">Number of products sold</div>
          <div className="font-bold text-4xl">
            <h2>
              <CountUp
                isCounting
                start={150000}
                end={200000}
                duration={5}
                easing="linear"
              />
              +
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
