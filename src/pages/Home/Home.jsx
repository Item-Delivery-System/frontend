import { Left } from "./Left";
import { Right } from "./Right";

export const Home = () => {
  return (
    <div className="dark:bg-gray-700 h-screen absolute w-full flex flex-wrap justify-between items-cente">
      <div>
        <Left />
      </div>
      <div className="w-full md:ml-96  p-10">
        <Right />
      </div>
    </div>
  );
};
