interface IPage {
  section: string;
  title: string;
  quote?: string;
  children: React.ReactNode;
}

const Page = ({ children, section, title, quote }: IPage) => {
  return (
    <main className="max-w-[37.5rem] m-auto px-4">
      <h4> {section} </h4>
      <h1> {title} </h1>
      <blockquote> {quote} </blockquote>
      <div>
        {children}
      </div>
    </main>
  )
}

export default Page;