import "./App.css";
import { AppRouter } from "./components/AppRouter";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer draggable={true} />
    </>
  );
}

export default App;
