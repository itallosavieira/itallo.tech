import Link from "next/link"

const HomePage = () => {
  return (
    <section>
      <header>
        <h1>itallo.tech</h1>
      </header>
      <Link href="/blog">
        Blog
      </Link>
    </section>
  )
}

export default HomePage