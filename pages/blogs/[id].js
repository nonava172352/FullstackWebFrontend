import Navbar from "../../components/Navbar";
import Link from "next/link";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://fswd-wp.devnss.com/wp-json/wp/v2/categories"
  );
  const data = await res.json();

  const paths = data.map((cate) => {
    return {
      params: { id: cate.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  let content = [];
  console.log(content.id)
  const id = context.params.id;
  const res = await fetch(
    "https://fswd-wp.devnss.com/wp-json/wp/v2/categories/" + id
  );
  const res2 = await fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/posts/");

  const res3 = await fetch(
    "https://fswd-wp.devnss.com/wp-json/wp/v2/categories/"
  );

  const data = await res.json();
  const data2 = await res2.json();
  const data3 = await res3.json();

  data2.forEach((cat) => {
    for (let i = 0; i < cat.categories.length; i++) {
      if (cat.categories[i] == data.id) {
        content.push(cat);
      }
    }
  });
  return {
    props: { cate: data, cate2: content ,cate3: data3},
  };
};



export default function Details({ cate, cate2, cate3 }) {
  
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
      <h1 className="d-flex justify-content-center mt-5">{cate.name}</h1>

      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      <div className="d-flex justify-content-center" id="cate">
      {cate3.map(cate => (
        <Link href={'/blogs/' + cate.id} key={cate.id}>
          <a id="styleCateButton">
          <h1>{cate.name}</h1>
          </a>
        </Link>
      ))}</div>

      <div className="d-flex justify-content-center" id="cate">
      {cate2.map((con) => (
        <div className="card" id="stylecard" key={cate2.id}>
          <div className="card-body">
            <h5 className="card-title">{con.title.rendered}</h5>
            <div className="card-text" dangerouslySetInnerHTML={{__html: con.excerpt.rendered}}></div>
            <div className="mt-3 justify-content-center" id="styleCateButton2">
            <button type="button" className="btn btn-success w-100 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Readmore</button>
            <button type="button" className="btn btn-warning w-100">Comment</button>
            </div>
          </div>
             
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{con.title.rendered}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" dangerouslySetInnerHTML={{__html: con.content.rendered}}>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

        </div>
        
      ))}
      </div>
      

    </div>
  );
}




