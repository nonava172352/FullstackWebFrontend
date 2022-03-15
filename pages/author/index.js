import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";


export const getStaticProps = async () => {
  const res = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/users')
  const data = await res.json();

  return {
    props: {cate: data}
  }
}
export default function Home({cate}) {
  return (
    <div>
      <Head>
        <title>BlogsBlog</title>
      </Head>
      <Navbar />

      <h1 className="display-6 d-flex justify-content-center" id='aut'>
        Authors
      </h1>
      
      <div className="d-flex justify-content-center" id="cate">
      {cate.map(cate => (
        <Link href={'/blogs/' + cate.id} key={cate.id}>
          <a id="styleCateButton">
            <h1>{cate.slug}</h1>
          </a>
        </Link>
      ))}</div>

      </div>
      
  );
}
