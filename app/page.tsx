import Link from "next/link"

const HomePage = () => {
  return (
    <section>
      <header>
        <h1>itallo.tech</h1>
      </header>
      <Link href="/posts">
        Posts
      </Link>
    </section>
  )
}

export default HomePage