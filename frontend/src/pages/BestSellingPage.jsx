import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";

const BestSellingPage = () => {
  const [data, setData] = useState([]);
  const { allProducts, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    setData(sortedData);
  }, [allProducts]);

  return (
    <>
      <Header activeHeading={2} />
      {isLoading ? (
        <Loader />
      ) : (
        <main className="flex-grow flex flex-col">
          <div className={`${styles.section} flex-grow`}>
            {!data || data?.length === 0 ? (
              <div className="flex-grow flex justify-center items-center mt-10 mb-10">
                <h1 className="text-center text-2xl">No products Found!</h1>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                {data &&
                  data.map((i, index) => <ProductCard data={i} key={index} />)}
              </div>
            )}
          </div>
          <Footer />
        </main>
      )}
    </>
  );
};

export default BestSellingPage;