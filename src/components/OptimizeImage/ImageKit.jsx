import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import img from "../../assets/code.png";
import img2 from "../../assets/test1.jpg";
import Image from "react-image-webp";
function ImageKit() {
  const urlEndpoint = "https://images4.alphacoders.com/936/936378.jpg";
  return (
    <div>
      <IKContext urlEndpoint={urlEndpoint}>
        <h1>ImageKit React quick start</h1>
        <IKImage path={img2} width="400" />
        <IKImage src={img2} width="1400" />
        <IKImage
          src="https://images4.alphacoders.com/936/936378.jpg"
          transformation={[
            {
              height: 200,
              width: 200,
            },
          ]}
        />
      </IKContext>
      <picture id="picture">
		<source srcset="https://img.vn/uploads/thuvien/singa-png-20220719150401Tdj1WAJFQr.png" type="image/webp"/>
		<source srcset="https://img.vn/uploads/thuvien/singa-png-20220719150401Tdj1WAJFQr.png" type="image/jpeg"/> 
		<img loading="lazy" src="https://img.vn/uploads/thuvien/singa-png-20220719150401Tdj1WAJFQr.png" alt="Alt Text!"/>
	</picture>
    </div>
  );
}

export default ImageKit;
