import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Crypto Portal</title>
        <meta
          name="description"
          content="Small crypto portal. Browse through interesting projects, crypto news and add new ones."
        />
      </Head>
      <h1>Cryptocurrencies Portal</h1>
      <ul>
        <li>
          <Link href="/crypto-projects">Crypto Projects</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
