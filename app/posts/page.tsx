import Posts from "@/components/Posts"
import { getCategorisedPosts } from "@/lib/posts"

const Home = () => {
  const posts = getCategorisedPosts()

  return (
    <section>
      <header>
        <h1>itallo.tech</h1>
      </header>
      <section>
        {posts !== null &&
          Object.keys(posts).map((post) => (
            <Posts
              posts={posts[post]}
              key={post}
            />
          ))}
      </section>
    </section>
  )
}

export default Home