import classes from "./ProjectDetails.module.css";

const ProjectDetails = (props) => {
  return (
    <section className={classes.section}>
      <img src={props.image} alt={`${props.name} cryptocurrency logo`} />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.type}</p>
      <p>{props.description}</p>
    </section>
  );
};

export default ProjectDetails;
