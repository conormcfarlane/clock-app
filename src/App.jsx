import "./App.css";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import { TimeLocationProvider } from "./context/timeLocationContext";
function App() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <TimeLocationProvider>
          <Quote />
          <Hero />
        </TimeLocationProvider>
      </div>
    </div>
  );
}

export default App;
