import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { StateContext } from "../Context/StateContext";

const Rsidebar = () => {
  const [mode, setMode] = useContext(StateContext);
  const [topics, setTopics] = useState([
    {
      id: 1,
      name: "Web Design",
    },
    {
      id: 2,
      name: "Media",
    },
    {
      id: 3,
      name: "Podcasts",
    },
    {
      id: 4,
      name: "Advertise",
    },
    {
      id: 5,
      name: "Events",
    },
    {
      id: 6,
      name: "Crypto",
    },
  ]);
  return (
    <div className="">
      <div className="lg:w-[350px] md:w-[300px] hidden top-0 right-0 md:flex lg:flex flex-col justify-between items-start p-[40px] fixed border-l-[1px] shadow-lg hover:shadow-slate-700 h-screen">
        <div className=" w-full btn-group mb-5 px-4 py-2 flex justify-center items-center bg-slate-200  rounded-sm">
          <BiSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search places , hotels , and more ..."
            className="w-full  border-none outline-none bg-slate-200"
          />
        </div>
        <div className="">
          <p className=" text-xl mb-2 font-semibold">Recommanded Topics</p>
          <div className=" w-full flex flex-wrap">
            {topics.map((topic) => {
              return (
                <button
                  className="px-4 py-1 font-light hover:text-blue-700 bg-slate-100 hover:bg-slate-200 m-2 rounded-full"
                  key={topic.id}
                >
                  {topic.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="" onClick={() => setMode(!mode)}>
          <input
            type="checkbox"
            className="toggle"
            checked={mode}
            onChange={() => console.log("light and dark")}
          />
        </div>
        <div className="">
          <p className=" text-xl my-2 font-semibold">Subscribe To HexaGo</p>
          <p className=" font-light my-2">
            First sign up HexaGo account and login to get notified and get in
            touch with new updates.
          </p>
          <input
            type="text"
            placeholder="example@email.com "
            className="border-[1px] rounded w-full p-1 px-3 border-slate-300 outline-0"
          />
          <button className=" bg-blue-700 hover:bg-blue-600  p-2 px-3 my-3 text-white w-full rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rsidebar;
