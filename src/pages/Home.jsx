import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import PostCard from "../components/PostCard";
import { BsArrowRight } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import CreatePost from "../components/CreatePost";
import axios from "axios";

const Home = () => {
  const [create, setCreate] = useState(false);
  const [posts, setPost] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("http://localhost:3000/posts");
    console.log(data);
    setPost(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <div className=" h-[1000vh] lg:ml-[100px] md:ml-[80px] lg:mr-[350px] md:mr-[300px]">
        <div className=" p-20 mt-[60px] lg:mt-0 md:mt-0 border-b-[1px] border-slate-300 shadow-md hover:shadow-slate-700">
          <p className=" text-2xl">Explore , be curious</p>
          <p className=" text-base font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-4 cursor-pointer hover:text-sky-700">
            Explore now <BsArrowRight className="inline-block" />
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center mt-10">Posts can only be seen with Json</div>
        ) : (
          <div className="p-8 justify-evenly items-center flex flex-wrap gap-5">
            {posts.map((post) => {
              return <PostCard key={post.id} post={post} />;
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
