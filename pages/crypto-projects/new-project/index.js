import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import Head from "next/head";
import NewProjectForm from "components/crypto-projects/NewProjectForm";
import Message from "components/ui/Message";

const NewProject = (props) => {
  if (props.user) {
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

      const router = useRouter();
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
  }

  return (
    <>
      <Head>
        <title>Crypto Portal | New Project</title>
      </Head>
      <Message>{props.message}</Message>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session)
    return {
      // redirect: {
      //   destination: "/crypto-projects",
      //   premament: false,
      // },
      props: {
        message: "You need sign in first.",
      },
    };

  return {
    props: session,
  };
}

export default NewProject;
