interface IPage {
  section: string;
  title: string;
  children: React.ReactNode;
}

const Page = ({ children, section, title }: IPage) => {
  return (
    <main className="max-w-[37.5rem] m-auto px-4">
      <h4> {section} </h4>
      <h1> {title} </h1>
      <div>
        {children}
      </div>
    </main>
  )
}

export default Page;