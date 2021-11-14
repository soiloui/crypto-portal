import MyDB from "utils/dbHandle";
import Head from "next/head";
import ProjectList from "components/crypto-projects/ProjectList";

const CryptoProjects = (props) => {
  return (
    <>
      <Head>
        <title>Crypto Portal | Projects</title>
      </Head>
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

  const projectPromises = projects.map((project) =>
    fetch(`https://www.cryptingup.com/api/assets/${project.name}`)
      .then((resp) => resp.json())
      .then((data) => data.asset.price)
      .then((price) => ({
        name: project.name,
        image: project.image,
        price: Number.parseFloat(price).toFixed(2),
        type: project.type,
        id: project._id.toString(),
      }))
  );

  const updatedProjects = await Promise.all(projectPromises);

  // need to return object
  return {
    props: {
      projects: updatedProjects,
    },
    revalidate: 1, // number of seconds nextjs waits until it re-generate this page for an incoming request
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
