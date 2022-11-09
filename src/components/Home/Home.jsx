import React, { Suspense } from "react";

const About = React.lazy(() => import("../About/About"));
function Home() {
  return (
    <div>
      <h2>hello</h2>
      <div className="name ">
        <Suspense fallback={<h2>Loading....</h2>}>
          <About />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
