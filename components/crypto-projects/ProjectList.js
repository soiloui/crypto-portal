import Link from "next/link";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

function ProjectList(props) {
  return (
    <section className={classes.section}>
      <header>
        <h2>Projects</h2>
        <Link href="/crypto-projects/new-project">Add Project</Link>
      </header>

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
    </section>
  );
}

export default ProjectList;
