import "./App.css";
import Layout from "./components/Layout";
import { TimeLocationProvider } from "./context/timeLocationContext";
import { MenuProvider } from "./context/MenuContext";
function App() {
  return (
    <>
      <TimeLocationProvider>
        <MenuProvider>
          <Layout />
        </MenuProvider>
      </TimeLocationProvider>
    </>
  );
}

export default App;
