import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-framework">NextJs Framework</Link>
        </li>
        <li>
          <Link href="/news/nextjs-framework">Soiloui site</Link>
        </li>
        <li>
          <Link href="/news/nextjs-framework">Something Awesome</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
