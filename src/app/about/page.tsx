import { Page } from "@/components"
import Link from "next/link"

const Home = () => {
  return (
    <Page 
      section="O Código & Eu" 
      title="Codando sites modernos com telinhas bonitas"
      quote="Sou desenvolvedor frontend &amp; amo o que faço."
    >
      <p>
        E aí, tudo bem? Sou o Itallo, pai da Eva e marido da Letícia.
      </p>
      <p>
        Não sou do sul, mas tomo chimarrão e nas horas vagas, me arrisco na 
        música e curto ler, principalmente literatura imaginativa. Esses hobbies
        me ajudam a relaxar e encontrar inspiração na vida.
      </p>

      <p>
        Comecei com desenvolvimento web em 2017, seguidos de três anos 
        empreendendo em outra área, o que me trouxe muitos aprendizados. Depois 
        disso, voltei a estudar engenharia de software e atualmente trabalho em 
        aplicações de grande porte que impactam milhões de usuários na 
        <a href="https://minhaclaroresidencial.claro.com.br/" target="blank"> Claro Brasil.</a>
      </p>
      <p>
        Gosto de estudar e tenho facilidade e disposição para aprender o que for
        necessário. Também compartilho o que aprendo no meu <Link href="/blog">blog.</Link>
      </p>
    </Page>
  )
}

export default Home