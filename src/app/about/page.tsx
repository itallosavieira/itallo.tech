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
        música e curto ler, principalmente literatura imaginativa. 
        Tenho vários livros físicos, mas sempre leio no meu Kindle.
      </p>
      <p>
        Comecei a atuar como <strong>Desenvolvedor Frontend</strong> em 2017, seguidos de três anos
        empreendendo em outra área, o que me trouxe muitos aprendizados. Depois 
        disso, voltei a estudar engenharia de software na <Link href="https://www.42sp.org.br/" target="_blank">42 São Paulo</Link> e, atualmente, trabalho em 
        aplicações grandes utilizadas por milhões de clientes 
        na <Link href="https://minhaclaroresidencial.claro.com.br/" target="_blank">Claro Brasil.</Link>
      </p>
      <p>
        Gosto de estudar e tenho facilidade e disposição para aprender o que for
        necessário. Também compartilho o que aprendo no meu <Link href="/blog">blog.</Link>
      </p>

      <div className="flex gap-4 mt-16 justify-center">
        <Link className="border-none" href="https://www.linkedin.com/in/itallosavieira/" target="_blank"><FaGithub size={28}/></Link>
        <Link className="border-none" href="https://github.com/itallosavieira" target="_blank"><FaLinkedin size={28}/></Link>
      </div>
    </Page>
  )
}

export default About