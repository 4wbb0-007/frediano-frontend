import "./App.css";

import { ReactComponent as WaterDrop } from "./assets/droplet.svg";
import { ReactComponent as Battery } from "./assets/battery-charging.svg";
import fredianoLogo from "./assets/frediano.png";

interface CardProps {
  title: string;
  value: string | number;
  icon: JSX.Element;
}

const Card = ({ title, value, icon }: CardProps) => {
  return (
    <div className="bg-white rounded-lg drop-shadow-sm w-full flex flex-col py-3 px-4">
      <span className="text-left text-lg font-semibold mb-1">{title}</span>
      <div className="flex items-center">
        {icon}
        <span className="ml-4 text-4xl font-semibold">{value}</span>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-3xl">Frediano</h1>
        <div className="flex justify-center items-center">
          <img className="w-20" src={fredianoLogo} alt="Frediano logo" />
        </div>
      </header>

      <div className="flex gap-2 justify-between">
        <Card
          title="Water"
          value="59%"
          icon={
            <WaterDrop className="fill-blue-100 stroke-blue-500 h-12 w-12" />
          }
        />
        <Card
          title="Battery"
          value="39%"
          icon={<Battery className="stroke-green-300 h-12 w-12" />}
        />
      </div>
    </>
  );
}

export default App;
