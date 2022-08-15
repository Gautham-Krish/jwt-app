import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupSucess from "./SignupSucess";
import Login from "./Login";

const Form = () => {
  const [Submitted, setSubmitted] = useState(false);
  const submit = () => {
    setSubmitted(true);
  };
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <>
      <div class="row">
        <div class="column">
          {!formIsSubmitted ? (
            <SignupForm submitForm={submitForm} />
          ) : (
            <SignupSucess />
          )}
        </div>
        <div class="column">
          {!Submitted ? <Login submit={submit} /> : <SignupSucess />}
        </div>
      </div>
    </>
  );
};
export default Form;
