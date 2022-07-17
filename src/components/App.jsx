import MainCard from "./MainCard";
import StartCard from "./StatCard";
import data from "../data/data.json";

function App() {
  return (
    <div className="grid overflow-hidden grid-lines grid-cols-4 grid-rows-2 gap-2">
      <MainCard />
      {data.map((stats, n) => {
        return <StartCard key={n} stats={stats} />;
      })}
    </div>
  );
}

export default App;
