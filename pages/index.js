import Head from "next/head";
import SubpagesList from "components/home/SubpagesList";

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

      <h2>Browse trough</h2>
      <SubpagesList />
    </>
  );
};

export default Home;
