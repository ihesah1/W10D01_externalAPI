export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const posts = await res.json();
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
      const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      const data = await req.json();
      return {
          props: { post: data },
      }
  }
  
  const Post = ({post}) => {
    return (
      <>
        <p>Post: </p>
        {post.title}
        {post.body}
      </>
    );
  };
  
  export default Post;