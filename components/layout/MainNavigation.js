import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

function MainNavigation() {
  const [session, loading] = useSession();

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link href="/">Crypto Portal</Link>
      </h1>
      <nav className={classes.nav}>
        <ul>
          <li className={classes.mainNavItem}>
            <Link href="/crypto-projects">Projects</Link>
          </li>
          <li className={classes.mainNavItem}>
            <Link href="/news">News</Link>
          </li>

          {session ? (
            <>
              <li className={classes.signOut}>
                <button onClick={() => signOut()}>Sign out</button>
              </li>

              <p>{session.user.name}</p>
            </>
          ) : (
            <li className={classes.signInUp}>
              <ul>
                <li className={classes.signIn}>
                  <a onClick={() => signIn()}>Sign in</a>
                </li>
                <li className={classes.signUp}>
                  <Link href="/account/signup">Sign up</Link>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
