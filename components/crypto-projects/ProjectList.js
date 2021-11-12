import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

function ProjectList(props) {
  return (
    <ul className={classes.list}>
      {props.projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          image={project.image}
          name={project.name}
          price={project.price}
          type={project.type}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
