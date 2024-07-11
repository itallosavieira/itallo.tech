interface IPage {
  section: string;
  title: string;
  children: React.ReactNode;
}

const Page = ({ children, section, title }: IPage) => {
  return (
    <>
      <h4> {section} </h4>
      <h1> {title} </h1>
      <div>
        {children}
      </div>
    </>
  )
}

export default Page;