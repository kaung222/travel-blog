import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [body, setBody] = useState("");
  const [place, setPlace] = useState("");
  const navigate = useNavigate();
  const postData = {
    title,
    imageUrl,
    body,
    place,
  };

  const createPost = () => {
    const { data } = axios.post("http://localhost:3000/posts", postData);
    navigate("/");
  };

  return (
    <div className="">
      <Link to="/">
        <button className="m-5 px-3 py-2 btn-primary"> back</button>
      </Link>
      <div className="px-10">
        <h3 className=" text-center">Create Post</h3>

        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Post Title</span>
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Post Title"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Url </span>
            </label>
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              type="text"
              placeholder="Image Url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Where </span>
            </label>
            <input
              onChange={(e) => setPlace(e.target.value)}
              type="text"
              placeholder="Place"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Body </span>
            </label>
            <textarea
              onChange={(e) => setBody(e.target.value)}
              cols="10"
              rows="10"
              placeholder="body here..."
              className="bg-base-100 textarea textarea-bordered"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={createPost}>
              Post Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
