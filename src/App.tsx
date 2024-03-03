import "./App.css";
import Layout from "./Layout/Layout";
import { AppRouter } from "./components/AppRouter";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Layout>
      <AppRouter />
      <ToastContainer draggable={true} />
    </Layout>
  );
}

export default App;
