import React from "react";
import Layout from "../components/Layouts/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <div className=" h-[1000vh] lg:ml-[100px] md:ml-[80px] lg:mr-[350px] md:mr-[300px]">
        <div className="flex flex-col justify-center items-center pt-[200px] gap-3">
          <h1 className="text-xl">404</h1>
          <p className="font-light">
            This page is currently not avaiable. Try again later.
          </p>
          <img
            src="https://www.lionsroar.com/wp-content/uploads/2021/09/tomi-um-featured-meditation-1200x675-cropped.jpg"
            alt="err-cover"
            className=" w-[300px]"
          />
          <button
            className="btn px-3 py-1 border-none outline-none"
            onClick={() => location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
