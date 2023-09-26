import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      setData(allProducts);
    } else {
      setData(
        allProducts && allProducts.filter((i) => i.category === categoryData)
      );
    }
  }, [allProducts, categoryData]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeHeading={3} />
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
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-12">
                {data &&
                  data.length > 0 &&
                  data.map((i, index) => <ProductCard data={i} key={index} />)}
              </div>
            )}
          </div>
          <Footer />
        </main>
      )}
    </div>
  );
};

export default ProductsPage;
