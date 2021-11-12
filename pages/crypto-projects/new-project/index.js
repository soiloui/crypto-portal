import { useRouter } from "next/router";
import Head from "next/head";
import NewProjectForm from "components/crypto-projects/NewProjectForm";

const NewProject = () => {
  const router = useRouter();

  const addProjectHandler = async (enteredProjectData) => {
    const response = await fetch("/api/new-project", {
      method: "POST",
      body: JSON.stringify(enteredProjectData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/crypto-projects");
  };

  return (
    <>
      <Head>
        <title>Crypto Portal | New Project</title>
      </Head>
      <h1>New Crypto Project</h1>
      <NewProjectForm onAddProject={addProjectHandler} />
    </>
  );
};

export default NewProject;
