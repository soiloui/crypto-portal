import Link from "next/link";

const News = () => {
  return (
    <>
      <h2>News</h2>
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
