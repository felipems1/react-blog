import { BrowserRouter } from "react-router-dom";

import RoutesApp from "./RoutesApp";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
    </BrowserRouter>
  );
};

export default App;
