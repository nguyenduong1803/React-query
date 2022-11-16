import "./App.css";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import LazyImage from "./components/LazyImage/LazyImage";
import UseQueryReact from "./components/useQueryReact/UseQueryReact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import KeepPreviousData from "./components/KeepPreviousData/KeepPreviousData";
import ReactViturlized from "./components/ReactViturlized/ReactViturlized";
import ReactWindow from "./components/ReactWindow/ReactWindow";
import ImageKit from "./components/OptimizeImage/ImageKit";
import ImageSetSrc from "./components/OptimizeImage/ImageSetSrc";
function App() {
  return (
    <div className="App">
      <h2>Hell0o</h2>
      {/* <Home /> */}

      {/* <LazyImage/> */}

        <Router>
          <Routes>
            <Route path="/" element={<Layout><UseQueryReact /></Layout>} />
          </Routes>
          <Routes>
            <Route path="/form" element={<Layout><Form /></Layout>} />
          </Routes>
          <Routes>
            <Route path="/image" element={<Layout><LazyImage /></Layout>} />
          </Routes>
          <Routes>
            <Route path="/load" element={<Layout><LoadMoreData /></Layout>} />
          </Routes>
          <Routes>
            <Route path="/prevData" element={<Layout><KeepPreviousData /></Layout>} />
          </Routes>
          <Routes>
            <Route path="/reactViturlized" element={<Layout><ReactViturlized /></Layout>} />
          </Routes> 
          <Routes>
            <Route path="/reactWindow" element={<Layout><ReactWindow /></Layout>} />
          </Routes>
          <Routes>
            <Route path="/image2" element={<Layout><ImageSetSrc /></Layout>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
