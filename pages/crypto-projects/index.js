import MyDB from "utils/dbHandle";
import Head from "next/head";
import Link from "next/link";
import ProjectList from "components/crypto-projects/ProjectList";

const CryptoProjects = (props) => {
  return (
    <>
      <Head>
        <title>Crypto Portal | Projects</title>
      </Head>
      <h1>Cryptocurrencies Portal</h1>
      <Link href="/crypto-projects/new-project">Add Project</Link>
      <ProjectList projects={props.projects} />
    </>
  );
};

export async function getStaticProps() {
  // fetch data from an API / database
  const client = await MyDB.connect();

  const projectsCollection = MyDB.getProjectsCollection(client);

  const projects = await projectsCollection.find().toArray(); // find all documents in collection

  client.close();

  // need to return object
  return {
    props: {
      projects: projects.map((project) => ({
        name: project.name,
        image: project.image,
        price: project.price,
        type: project.type,
        id: project._id.toString(),
      })),
    },
    revalidate: 10, // number of seconds nextjs waits until it re-generate this page for an incoming request
    // That means server will re-generate site every 10 seconds (if there are requests)
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       projects: DUMMY_PROJECTS,
//     },
//   };
// }

export default CryptoProjects;
