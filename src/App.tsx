import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Vagas from "./pages/Vagas";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
        <Header />
          <Routes>
              <Route path="/" element={<Vagas />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
