import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import {
  ImageModal,
  allowScroll,
  disableScroll,
} from "../components/Common/ImageModal";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const { isLoading, error, data } = useQuery("portfolio", () =>
    axios
      .get("api/portfolio")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  const [modalImageUrl, setModalImageUrl] = useState(null);

  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
    // disableScroll();
  };

  const closeModal = () => {
    setModalImageUrl(null);
    allowScroll();
  };
  useEffect(() => {
    return () => {
      allowScroll();
    };
  }, []);

  return (
    <BannerLayout>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6 ">
        {isLoading
          ? [1, 2, 3, 4].map(() => (
              <ImageAndParagraphSkeleton className={"w-full object-cover"} />
            ))
          : data?.map((data, key) => (
              <PortfolioCard key={key} data={data} openModal={openModal} />
            ))}
      </div>
      {modalImageUrl && (
        <ImageModal imageUrl={modalImageUrl} onClose={closeModal} />
      )}
      <Footer />
    </BannerLayout>
  );
};

export default Portfolio;
