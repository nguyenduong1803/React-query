import React from "react";
import img from "../../assets/code.png";
import img2 from "../../assets/test1.jpg";
function ImageSetSrc() {
  return (
    <div>
      <img
        width={"100%"}
        src=""
        alt=""
        srcSet="https://freepik.cdnpk.net/img/coupon/adobe/EN_3.jpg 360w, https://img.freepik.com/free-photo/close-up-seafoo…s-shrimp-mussels_140725-4993.jpg?size=338&ext=jpg 740w, https://img.freepik.com/free-photo/top-view-french-fries-with-ketchup_23-2149160033.jpg?w=826&t=st=1668589808~exp=1668590408~hmac=bce9393755b60bc5b7ad1129f4744f2ff1399a513e75354705459120bd8f1606 826w, https://img.freepik.com/free-photo/top-view-french-fries-with-ketchup_23-2149160033.jpg?w=900&t=st=1668589808~exp=1668590408~hmac=bce9393755b60bc5b7ad1129f4744f2ff1399a513e75354705459120bd8f1606 900w, https://img.freepik.com/free-photo/top-view-french-fries-with-ketchup_23-2149160033.jpg?w=996&t=st=1668589808~exp=1668590408~hmac=bce9393755b60bc5b7ad1129f4744f2ff1399a513e75354705459120bd8f1606 996w, https://img.freepik.com/free-photo/top-view-french-fries-with-ketchup_23-2149160033.jpg?w=1060&t=st=1668589808~exp=1668590408~hmac=bce9393755b60bc5b7ad1129f4744f2ff1399a513e75354705459120bd8f1606 1060w, https://img.freepik.com/free-photo/top-view-french-fries-with-ketchup_23-2149160033.jpg?w=1380&t=st=1668589808~exp=1668590408~hmac=bce9393755b60bc5b7ad1129f4744f2ff1399a513e75354705459120bd8f1606 1380w, https://img.freepik.com/free-photo/top-view-french-fries-with-ketchup_23-2149160033.jpg?w=1480&t=st=1668589808~exp=1668590408~hmac=bce9393755b60bc5b7ad1129f4744f2ff1399a513e75354705459120bd8f1606 1480w, https://img.freepik.com/free-photo/top-view-french-fries-with-ketchup_23-2149160033.jpg?w=1800&t=st=1668589808~exp=1668590408~hmac=bce9393755b60bc5b7ad1129f4744f2ff1399a513e75354705459120bd8f1606 1800w, https://img.freepik.com/free-photo/top-view-french-fries-with-ketchup_23-2149160033.jpg?w=2000&t=st=1668589808~exp=1668590408~hmac=bce9393755b60bc5b7ad1129f4744f2ff1399a513e75354705459120bd8f1606 2000w"
        sizes="(max-width: 479px) 100vw, (min-aspect-ratio: 626/417) calc((100vh - 184px) * 1.501199040767386), (max-width: 1095px) calc(100vw - 40px), calc(100vw - 540px)"
      />
    </div>
  );
}

export default ImageSetSrc;
