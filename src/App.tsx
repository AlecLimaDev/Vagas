import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Vagas from "./pages/Vagas";
import GlobalStyle from "./style/globalStyle";
import Table from "./components/Table";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Table />
        <Routes>
          <Route path="/" element={<Vagas />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
