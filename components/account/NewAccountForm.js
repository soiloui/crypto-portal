import { useRef } from "react";
import classes from "./NewAccountForm.module.css";

function NewProjectForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    //Getting value from useRef()
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //Validation
    if (!enteredEmail || !enteredEmail.includes("@") || !enteredPassword) {
      alert("Invalid details");
      return;
    }

    const accountData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onCreateAccount(accountData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" ref={passwordInputRef} />
      </div>

      <div className={classes.actions}>
        <button>Register</button>
      </div>
    </form>
  );
}

export default NewProjectForm;
