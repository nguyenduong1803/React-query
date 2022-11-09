import "./App.css";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import LazyImage from "./components/LazyImage/LazyImage";
import UseQueryReact from "./components/useQueryReact/UseQueryReact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import KeepPreviousData from "./components/KeepPreviousData/KeepPreviousData";
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
        </Router>
    </div>
  );
}

export default App;
