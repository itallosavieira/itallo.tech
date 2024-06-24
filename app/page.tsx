import ArticleItemList from "@/components/ArticleItemList"
import { getCategorisedArticles } from "@/lib/articles"

const HomePage = () => {
  const articles = getCategorisedArticles()

  return (
    <section>
      <header>
        <h1>itallo.tech</h1>
      </header>
      <section>
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>
    </section>
  )
}

export default HomePage