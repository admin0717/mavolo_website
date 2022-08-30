import type { FC } from "react";
import { CountUp } from "use-count-up";

const Counter: FC = () => {
  return (
    <>
      <div className="flex items-start justify-between space-x-10">
        <div>
          <div className="capitalize  text-md">Number of Clients served:</div>
          <div className="font-bold text-4xl">
            <h2>
              <CountUp isCounting end={150} duration={3} />+
            </h2>
          </div>
        </div>

        <div>
          <div className="capitalize">Number of products sold</div>
          <div className="font-bold text-4xl">
            <h2>
              <CountUp isCounting end={2000000} duration={3} />+
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
