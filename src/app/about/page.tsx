import { Page } from "@/components"
import Link from "next/link"

const About = () => {
  return (
    <Page 
      section="Um pouco sobre mim" 
      title="Dev Frontend & Pai da Eva"
    >
      <p>
        E aí, tudo bem? Sou o Itallo, apaixonado pela minha filha Eva e pela minha esposa Letícia. 
        Minha família é a minha maior fonte de motivação e inspiração.
      </p>
      <p>
        Não sou do sul, mas tomo chimarrão e nas horas vagas, me arrisco na 
        música e curto ler, principalmente literatura imaginativa. Esses hobbies
        me ajudam a relaxar e me tornam mais criatiavo.
      </p>
      <p>
        Comecei atuar como <strong>frontend</strong> em 2017, seguidos de três anos
        empreendendo em outra área, o que me trouxe muitos aprendizados. Depois 
        disso, voltei a estudar engenharia de software e atualmente trabalho em 
        aplicações de grande porte que impactam milhões de usuários 
        na <Link href="https://minhaclaroresidencial.claro.com.br/" target="_blank">Claro Brasil.</Link>
      </p>
      <p>
        Gosto de estudar e tenho facilidade e disposição para aprender o que for
        necessário. Também compartilho o que aprendo no meu <Link target="_blank" href="/blog">blog.</Link>
      </p>
    </Page>
  )
}

export default About