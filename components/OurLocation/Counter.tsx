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
              <CountUp isCounting end={1320} duration={3} />
            </h2>
          </div>
        </div>

        <div>
          <div className="capitalize">Total Products</div>
          <div className="font-bold text-4xl">
            <h2>
              <CountUp isCounting end={1320} duration={3} />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
