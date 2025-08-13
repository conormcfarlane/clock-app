import "./App.css";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Quote from "./components/Quote";
import { TimeLocationProvider } from "./context/timeLocationContext";
function App() {
  return (
    <TimeLocationProvider>
      <Layout>
        <Quote />
        <Hero />
      </Layout>
    </TimeLocationProvider>
  );
}

export default App;
