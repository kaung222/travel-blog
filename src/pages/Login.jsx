import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [Loading, setLoading] = useState();
  const navigate = useNavigate();

  const userData = { username, password };
  const getLogin = async (userData) => {
    const { data } = await axios.post(
      "https://dummyjson.com/auth/login",
      userData
    );
    console.log(data);

    if (data) {
      setLoading(false);
      const user = {
        email: data?.email,
        username: data?.username,
        token: data?.token,
      };
      localStorage.setItem("users", JSON.stringify(user));
      navigate("/");
    }
  };
  const loginHandler = async () => {
    await getLogin(userData);
    setLoading(true);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-5">
          <div className="text-center  lg:text-left w-[600px]">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  defaultValue="example@email.com"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  value={password}
                  placeholder="password"
                  className="input input-bordered"
                  defaultValue="somepasswords"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={loginHandler}>
                  {Loading ? "Logging in" : "Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
