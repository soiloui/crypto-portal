import Link from "next/link";
import SubpagesItem from "./SubpagesItem";
import classes from "./SubpagesList.module.css";

function SubpagesList(props) {
  return (
    <ul className={classes.ul}>
      <li>
        <Link href="/crypto-projects">Latest Projects</Link>
      </li>
      <li>
        <Link href="/news">Crypto News</Link>
      </li>
    </ul>
  );
}

export default SubpagesList;
