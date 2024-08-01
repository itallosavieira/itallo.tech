import { Page } from "@/components"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const About = () => {
  return (
    <Page 
      section="Um pouco sobre mim" 
      title="Dev Frontend & Pai da Eva"
    >
      <p>
        E aí, tudo bem? Sou o Itallo, pai da Eva e marido da Letícia.
      </p>
      <p>
        Não sou do sul, mas gosto de chimarrão, me arrisco na 
        música e curto ler (time do Kindle), principalmente ficção.
      </p>
      <p>
        Tenho <strong>4 anos de experiência</strong> como <strong>desenvolvedor frontend</strong>.
        Atualmente, sou frontend focal no time financeiro na 
        <Link href="https://minhaclaroresidencial.claro.com.br/" target="_blank"> Claro Brasil</Link>,
        responsável por desenvolver e manter aplicações monorepo e micro-frontends em 
        <strong> React</strong>, <strong>Next.js</strong> e <strong>Vue</strong>, utilizadas por milhões de clientes.
    </p>
    <p>
        Comecei como frontend em 2017, seguidos de três anos empreendendo em outra área, o que me trouxe muitos aprendizados. 
        Depois desse período, voltei a estudar engenharia de software na <Link href="https://www.42sp.org.br/" target="_blank">42 São Paulo</Link>,
        e finalmente voltei a trabalhar na área que sempre gostei de verdade, programação.
    </p>
      <p>
        Gosto de estudar e tenho facilidade e disposição para aprender o que for
        necessário. Também compartilho o que aprendo no meu <Link href="/blog">blog.</Link>
      </p>
    </Page>
  )
}

export default About
