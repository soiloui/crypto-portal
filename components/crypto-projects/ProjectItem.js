import { useRouter } from "next/router";
import classes from "./ProjectItem.module.css";

function ProjectItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/crypto-projects/${props.id}`); // equiv of Link compo
  };

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.content}>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <p>{props.type}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={showDetailsHandler}>Show Details</button>
      </div>
    </li>
  );
}

export default ProjectItem;
