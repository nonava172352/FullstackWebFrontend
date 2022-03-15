import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";


export const getStaticProps = async () => {
  const res = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/categories')
  const data = await res.json();

  return {
    props: {cate: data}
  }
}

export default function Home({cate}) {
  return (
    <div>
      {/* <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style> */}
      <Head>
        <title>BlogsBlog</title>
        
      </Head>
      <Navbar />

      <h1 className="display-1 d-flex p-5 h-25 justify-content-center align-items-center text-danger">
        Welcome to BlogsBlog
      </h1>

      <h1 className="display-6 d-flex justify-content-center">
        Choose your category
      </h1>
      
      <div className="d-flex justify-content-center" id="cate">
      {cate.map(cate => (
        <Link href={'/blogs/' + cate.id} key={cate.id}>
          <a id="styleCateButton">
          <h1>{cate.name}</h1>
          </a>
        </Link>
      ))}</div>

      </div>
      
  );
}
