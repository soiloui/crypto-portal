import { useRef } from "react";
import classes from "./NewProjectForm.module.css";

function NewProjectForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const typeInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredType = typeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const projectData = {
      name: enteredName,
      image: enteredImage,
      price: enteredPrice,
      type: enteredType,
      description: enteredDescription,
    };

    props.onAddProject(projectData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Project Name</label>
        <input type="text" required id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Project Image</label>
        <input type="url" required id="image" ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="price">Price</label>
        <input type="text" required id="price" ref={priceInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="type">Type</label>
        <input type="text" required id="type" ref={typeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          rows="5"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Project</button>
      </div>
    </form>
  );
}

export default NewProjectForm;
