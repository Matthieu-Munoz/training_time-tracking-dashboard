import MainCard from "./MainCard";
import StartCard from "./StatCard";
import data from "../data/data.json";

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-verydarkblue text-white text-lg  p-4">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MainCard />
        {data.map((stats, n) => {
          return <StartCard key={n} stats={stats} />;
        })}
      </div>
    </div>
  );
}

export default App;
