import { Page } from "@/components"
import { getCategorisedPosts } from "@/lib/posts"

const Home = () => {
  const posts = getCategorisedPosts()

  return (
    <Page 
      section="Sobre" 
      title="Um pouco sobre mim"
    >
      <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa. 
      </p>
  </Page>
  )
}

export default Home