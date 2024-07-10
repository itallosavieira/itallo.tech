import { Page, PostsList } from "@/components"
import { getCategorisedPosts } from "@/lib/posts"

const Home = () => {
  const posts = getCategorisedPosts()

  return (
    <Page 
      section="Blog"
      title="Artigos, anotações e reflexões."
    >
      <div>
        {posts !== null &&
          Object.keys(posts).map((post) => (
            <PostsList
            posts={posts[post]}
            key={post}
            />
          ))}
      </div>
  </Page>
  )
}

export default Home