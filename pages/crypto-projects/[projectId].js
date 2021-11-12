import { ObjectId } from "mongodb";
import MyDB from "utils/dbHandle";
import Head from "next/head";
import ProjectDetails from "components/crypto-projects/ProjectDetails";

const SingleProject = (props) => {
  return (
    <>
      <Head>
        <title>Crypto Portal | {props.projectData.name}</title>
      </Head>
      <h1>Details</h1>
      <ProjectDetails
        image={props.projectData.image}
        name={props.projectData.name}
        price={props.projectData.price}
        type={props.projectData.type}
        description={props.projectData.description}
      />
    </>
  );
};

// we need getStaticPaths if we went pre-generate dynamic pages [something].js
export async function getStaticPaths() {
  const client = await MyDB.connect();

  const projectsCollection = MyDB.getProjectsCollection(client);

  const projects = await projectsCollection.find({}, { _id: 1 }).toArray();
  // fetch {} all objects, {_id: 1} but only id field

  client.close();

  return {
    fallback: true, //if not all paths is defined, then it need be set to 'true'
    paths: projects.map((project) => ({
      params: {
        projectId: project._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const projectId = context.params.projectId; // get slug

  const client = await MyDB.connect();
  const db = client.db();

  const projectsCollection = db.collection("projects");

  const selectedProject = await projectsCollection.findOne({
    _id: ObjectId(projectId),
  });

  client.close();

  // fetch data for a single project
  return {
    props: {
      projectData: {
        id: selectedProject._id.toString(),
        name: selectedProject.name,
        image: selectedProject.image,
        price: selectedProject.price,
        type: selectedProject.type,
        description: selectedProject.description,
      },
    },
  };
}

export default SingleProject;
