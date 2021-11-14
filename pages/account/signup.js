import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import NewAccountForm from "components/account/NewAccountForm";
import Message from "components/ui/Message";

const NewAccount = (props) => {
  const router = useRouter();
  const [status, setStatus] = useState("");

  const newAccountHandler = async (enteredAccount) => {
    console.log(enteredAccount);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(enteredAccount),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    setStatus(data.message);

    console.log(data);

    // router.push("/");
  };

  return (
    <>
      <Head>
        <title>Crypto Portal | New Project</title>
      </Head>

      <h1>New Crypto Project</h1>
      <NewAccountForm onCreateAccount={newAccountHandler} />

      {status && <Message>{status}</Message>}
    </>
  );
};

export default NewAccount;
