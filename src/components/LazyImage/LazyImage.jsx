import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getPhoto } from "../../api/api";
function LazyImage() {
  const [img, setImg] = React.useState([]);
  const [count,setCount]= React.useState(0);
  console.log(img)
  React.useEffect(() => {
    getPhoto(setImg);
  },[]);
  return (
    <div>
      <button onClick={()=>setCount(prev=>prev+1)}>click me</button>
      <h2>{count}</h2>
      {img.map((image) => {
        return (
          <div key={image.id}>
            <h2>product</h2>
            <LazyLoadImage
              alt={"name"}
              height={200}
              effect="blur"
              src={image.url} // use normal <img> attributes as props
              width={300}
            />
          </div>
        );
      })}
    </div>
  );
}

export default LazyImage
