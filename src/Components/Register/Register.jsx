import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import Joi from "joi";

// import axios from "axios";
export default function Register() {
  // let {} = useContext(AuthContext);
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorList, setErrorList] = useState([]);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: 0,
  });
  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }

  async function sendDataToApi() {
    let { data } = await axios.post(
      "https://sticky-note-fe.vercel.app/signup",
      user
    );
    console.log(data);
    if (data.message === "success") {
      setLoading(false);
      navigate("/login");
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
      first_name: Joi.string()
        .pattern(/^[a-zA-z]/)
        .required(),
      last_name: Joi.string()
        .pattern(/^[a-zA-z]/)
        .required(),
      email: Joi.string()
        .email({
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      password: Joi.string()
        .pattern(/^[a-zA-z0-9]/)
        .required(),
      age: Joi.number().min(16).max(80).required(),
    });
    return scheme.validate(user, { abortEarly: false });
  }

  return (
    <>
      <div className="row pt-5 mt-5">
        {error ? (
          <div className="alert text-white bg-danger">ERROR! {error}</div>
        ) : (
          " "
        )}
        <form onSubmit={submitRegisterForm} className="py-5">
          <label htmlFor="first_name">First Name</label>

          <input
            onChange={getUserData}
            type="text"
            className="form-control my-inp my-1"
            name="first_name"
            id="first_name"
          />

          <small className="text-danger">
            {
              errorList.filter(
                (error) => error.context.label === "first_name"
              )[0]?.message
            }{" "}
            <br />
          </small>

          <label htmlFor="last_name">Last Name</label>

          <input
            onChange={getUserData}
            type="text"
            className="form-control my-inp my-1"
            name="last_name"
            id="last_name"
          />

          <small className="text-danger">
            {
              errorList.filter(
                (error) => error.context.label === "last_name"
              )[0]?.message
            }
          </small>
          <br />

          <label htmlFor="number">Age</label>

          <input
            onChange={getUserData}
            type="text"
            className="form-control my-inp my-1"
            name="age"
            id="age"
          />

          <small className="text-danger">
            {
              errorList.filter((error) => error.context.label === "age")[0]
                ?.message
            }
          </small>
          <br />

          <label htmlFor="email">Email</label>

          <input
            onChange={getUserData}
            type="email"
            className="form-control my-inp my-1"
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
            className="form-control my-inp my-1"
            name="password"
            id="password"
          />

          <small className="text-danger">
            {errorList.filter((error) => error.context.label === "password")[0]
              ? '"password" should be uppercase characters or lowercase characters or numbers'
              : ""}
          </small>
          <br />

          <button type="submit" className="btn btn-info">
            {loading ? <i className="fas fa-spinner fa-spin"></i> : "Register"}
          </button>
        </form>
      </div>
    </>
  );
}
