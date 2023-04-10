import React from "react";
import Layout from "../components/Layouts/Layout";

const About = () => {
  return (
    <Layout>
      <div className="h-[1000vh] lg:ml-[100px] md:ml-[80px] lg:mr-[350px] md:mr-[300px]">
        <div className=" p-20 mt-[60px] lg:mt-0 md:mt-0 border-b-[1px] border-slate-300 shadow-md hover:shadow-slate-700">
          <p className=" text-2xl">About</p>
          <p className=" text-base font-light">
            Nice tagline here about Me, Myself & I
          </p>
        </div>
        <div className="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            alt="cover..."
            className="w-full px-16 pt-14"
          />
          <div className="w-full px-16 py-14">
            <h2 className=" text-xl">Lorem ipsum dolor sit amet</h2>
            <p className=" text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur repellendus est commodi expedita illo eius aspernatur
              consequatur, repellat dignissimos ea alias eos neque tenetur
              adipisci porro fugit ad labore vitae? Cumque vitae molestiae dicta
              consectetur similique architecto, magni quisquam soluta deleniti
              veritatis quia tempora magnam libero! Dolores, quo error? Dolorem
              possimus nesciunt iure minus architecto quod qui, id deleniti? Sed
              nesciunt inventore cum, facere magni debitis tenetur veritatis
              deserunt optio natus consectetur omnis error quisquam repellat
              dolorum architecto delectus similique culpa facilis autem id
              sequi. Sed cupiditate beatae culpa deleniti reprehenderit ex odio
              aut temporibus quam? Veniam quod dolorem culpa.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
