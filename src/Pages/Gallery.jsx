import React from "react";

function Gallery() {
  const data = async () => {
    const response = await fetch();
    const data1 = await response.json();
    console.log(data1)
  };
  data();
  return <div></div>;
}

export default Gallery;
