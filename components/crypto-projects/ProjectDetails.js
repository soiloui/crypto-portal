import classes from "./ProjectDetails.module.css";

const ProjectDetails = (props) => {
  return (
    <>
      <section className={classes.summarySection}>
        <div className={classes.image}>
          <img src={props.image} alt={`${props.name} cryptocurrency logo`} />
        </div>

        <div className={classes.generalInfo}>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.price}>{props.price}</p>
          <p>{props.type}</p>
        </div>
      </section>

      <section className={classes.descriptionSection}>
        <h3>Description</h3>
        <p>{props.description}</p>
      </section>
    </>
  );
};

export default ProjectDetails;
