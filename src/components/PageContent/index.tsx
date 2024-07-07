interface IPage {
  section: string;
  title: string;
  quote?: string;
  children: React.ReactNode;
}

const PageContent = ({ children, section, title, quote }: IPage) => {
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

export default PageContent;