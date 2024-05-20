// pages/index.js

import { useState } from "react";
import img from "../../public/projects/backend.jpeg";

export const ImageModal = ({ imageUrl, onClose }) => {
  return (
    // <div className="container mx-auto py-8 w-full h-screen absolute" style={{borderWidth: 3, borderColor: 'red'}}>
      <div className="sticky inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 " >
        <div className="bg-white p-4 rounded-lg">
          <button
            className="absolute top-0 right-0 text-Green bg-black rounded-lg m-2 text-2xl p-2"
            onClick={onClose}
          >
            &times;
          </button>
          <img src={imageUrl} alt="Modal" className="w-full" />
        </div>
      </div>
    // </div>
  );
};

export function preventDefault(e) {
  e.preventDefault();
}

export function disableScroll() {
  if (window.addEventListener) {
    window.addEventListener("mousewheel", preventDefault, { passive: false });
  } else {
    window.attachEvent("onmousewheel", preventDefault);
  }
}

export function allowScroll() {
  if (window.removeEventListener) {
    window.removeEventListener("mousewheel", preventDefault);
  } else {
    window.detachEvent("onmousewheel", preventDefault);
  }
}

const IndexPage = () => {
  const [modalImageUrl, setModalImageUrl] = useState(null);

  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
    disableScroll();
  };

  const closeModal = () => {
    setModalImageUrl(null);
    allowScroll();
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap justify-center">
        {/* Render images */}
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
          <img
            src="image1.jpg"
            alt="Image 1"
            onClick={() => openModal(img)}
            className="cursor-pointer w-full rounded-lg"
          />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
          <img
            src="image2.jpg"
            alt="Image 2"
            onClick={() => openModal(img)}
            className="cursor-pointer w-full rounded-lg"
          />
        </div>
        {/* Add more images with onClick handlers */}
      </div>

      {/* Render modal */}
      {modalImageUrl && (
        <ImageModal imageUrl={modalImageUrl} onClose={closeModal} />
      )}
    </div>
  );
};

// export default IndexPage;
