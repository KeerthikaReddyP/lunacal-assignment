import img1 from "../images/house.jpg";
import img2 from "../images/logo.png";
import img3 from "../images/sunset.jpg";

import { useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([
    img1,img2,img3
  ]);

  const handleImageChange = (e) => {
    const fileList = Array.from(e.target.files);
    const imageUrls = fileList.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleButtonClick = () => {
    document.getElementById("imageInput").click();
  };
  return (
    <div className="relative bg-gray-600 rounded-xl h-1/2 pt-6">
      <div className="flex justify-between items-center mb-4 pl-8">
        <h2 className="bg-black text-white m-2 p-2 rounded-xl">Gallery</h2>
        <button
          className="m-2 p-2 bg-gray-500 rounded-xl"
          onClick={handleButtonClick}
        >
          {" "}
          + Add image
        </button>
        <input
          type="file"
          id="imageInput"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      <div className="flex space-x-4 pl-8 overflow-auto no-scrollbar">
        {images.map((image, index) => (
          <div key={index} className="w-28 h-28 bg-gray-600 flex-shrink-0">
            <img src={image} alt="imageeeee" className="w-full h-full object-cover rounded-xl"/>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
