interface IPage {
  section: string;
  title: string;
  children: React.ReactNode;
}

const Page = ({ children, section, title }: IPage) => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h4> {section}. </h4>
      <h1 className="mb-[4rem]"> {title} </h1>
      <div>
        {children}
      </div>
    </main>
  )
}

export default Page;