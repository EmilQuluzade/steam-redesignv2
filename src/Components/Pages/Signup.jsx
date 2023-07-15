import React, { useState, useRef } from "react";
import FormInput from "../Parts/Forminput";

const App = () => {
  const modalRef = useRef(null);
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password ? `^${values.password}$` : undefined,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the information to local storage
    localStorage.setItem("username", values.username);
    localStorage.setItem("email", values.email);
    localStorage.setItem("birthday", values.birthday);
    localStorage.setItem("password", values.password);

    // Clear the values from the form
    setValues({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
    });

    // Show the modal box
    modalRef.current.style.display = "block";
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
      <div ref={modalRef} id="modal">
        <h2>Success!</h2>
        <p>Your data has been stored.</p>
        <button
          onClick={() => {
            modalRef.current.style.display = "none";
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default App;
