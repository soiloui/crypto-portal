import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Crypto Portal</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/crypto-projects">Projects</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
