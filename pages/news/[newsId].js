import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a req to the backend API
  // to fetch news item with newsID

  return (
    <>
      <h1>News Details</h1>
      <p>{newsId}</p>
    </>
  );
};

export default DetailsPage;
