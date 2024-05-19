import Navbar from "./components/navbar";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="text-5xl text-red-500 underline md:text-green-100">
      <Navbar />
      <Button>App</Button>
    </div>
  );
};

export default App;
