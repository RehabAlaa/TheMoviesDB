import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import Joi from "joi";
import { Helmet } from "react-helmet";

// import axios from "axios";
export default function Login({ saveUserData }) {
  // let {} = useContext(AuthContext);
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorList, setErrorList] = useState([]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }

  async function sendDataToApi() {
    let { data } = await axios.post(
      "https://sticky-note-fe.vercel.app/signin",
      user
    );
    console.log(data);
    if (data.message === "success") {
      setLoading(false);
      localStorage.setItem("user token", data.token);
      saveUserData();
      navigate("/");
    } else {
      setLoading(false);

      setError(data.message);
    }
  }

  function submitRegisterForm(e) {
    e.preventDefault();

    setLoading(true);
    let validation = validateRegisterForm();
    if (validation.error) {
      setLoading(false);

      setErrorList(validation.error.details);
    } else {
      sendDataToApi();
      setLoading(false);
    }
  }
  function validateRegisterForm() {
    let scheme = Joi.object({
      email: Joi.string()
        .email({
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      password: Joi.string()
        .pattern(/^[a-zA-z0-9]/)
        .required(),
    });
    return scheme.validate(user, { abortEarly: false });
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="row my-5 py-5">
        {error ? (
          <div className="alert text-white bg-danger my-2">ERROR! {error}</div>
        ) : (
          " "
        )}
        <form onSubmit={submitRegisterForm}>
          <label htmlFor="email">Email</label>
          <input
            onChange={getUserData}
            type="email"
            className="form-control my-inp my-2"
            name="email"
            id="email"
          />
          <small className="text-danger">
            {
              errorList.filter((error) => error.context.label === "email")[0]
                ?.message
            }
          </small>
          <br />

          <label htmlFor="password">Password</label>
          <input
            onChange={getUserData}
            type="password"
            className="form-control my-inp my-2"
            name="password"
            id="password"
          />
          <small className="text-danger">
            {errorList.filter((error) => error.context.label === "password")[0]
              ? '"password" should start with uppercase the form 3 and 8 characters lowercase'
              : ""}
          </small>
          <br />

          <button type="submit" className="btn btn-info">
            {loading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
