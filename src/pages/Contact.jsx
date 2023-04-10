import React from "react";
import Layout from "../components/Layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className=" h-[1000vh] lg:ml-[100px] md:ml-[80px] lg:mr-[350px] md:mr-[300px]">
        <div className=" p-20 mt-[60px] lg:mt-0 md:mt-0 border-b-[1px] border-slate-300 shadow-md hover:shadow-slate-700">
          <p className=" text-2xl">Contact Me</p>
          <p className=" text-base font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
