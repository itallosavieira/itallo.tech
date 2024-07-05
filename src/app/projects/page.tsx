import { Page } from "@/components"
import { getCategorisedPosts } from "@/lib/posts"

const Home = () => {
  const posts = getCategorisedPosts()

  return (
    <Page 
      section="Projetos" 
      title="Meus projetos"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo esse sed accusantium repudiandae, eveniet aliquid, cupiditate officia dicta nesciunt omnis consequuntur earum temporibus quod consequatur. Exercitationem, error! Quisquam, maiores nostrum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo esse sed accusantium repudiandae, eveniet aliquid, cupiditate officia dicta nesciunt omnis consequuntur earum temporibus quod consequatur. Exercitationem, error! Quisquam, maiores nostrum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo esse sed accusantium repudiandae, eveniet aliquid, cupiditate officia dicta nesciunt omnis consequuntur earum temporibus quod consequatur. Exercitationem, error! Quisquam, maiores nostrum?
      </p>
      
  </Page>
  )
}

export default Home