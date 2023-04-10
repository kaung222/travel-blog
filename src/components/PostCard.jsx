import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const [fav, setFav] = useState(false);

  return (
    <div>
      <Link to={`/detail/1234`}>
        <div className=" hover:shadow-lg shadow-slate-700 p-3">
          <div className=" py-2">{post.place} . (Burma) . 12.12.2022</div>
          <img
            src={post.imageUrl} alt="cover..."
            className="w-[300px] hover:opacity-60 "
          />
          <div className=" flex justify-between items-center">
            <p className=" pt-3 text-xl">{post.title}</p>
            {fav ? (
              <button
                className="p-2 "
                onClick={(e) => {
                  setFav(false);
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <AiFillHeart />
              </button>
            ) : (
              <button
                className="p-2"
                onClick={(e) => {
                  setFav(true);
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <AiOutlineHeart />
              </button>
            )}
          </div>
          <p className="py-1 font-light">{post.body}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
