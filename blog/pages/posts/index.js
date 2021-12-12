import Link from "next/link";



export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);
  return {
    props: { posts },
  };
}
const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <ul>
        {posts?.length > 0
          ? posts.map((post) => (
                <Link href={`/posts/${post.id}`}>
                  <div key={post.id}>
                    <li>Title: {post.title}</li>
                    <li>Body: {post.body}</li>
                    <hr />
                  </div>
                </Link>
            ))
          : "No posts"}
      </ul>
    </div>
  );
};

export default Posts;