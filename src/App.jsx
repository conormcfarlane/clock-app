import "./App.css";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
function App() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <Quote />
        <Hero />
      </div>
    </div>
  );
}

export default App;
