import Link from "next/link";
import Logo from "../Logo";
import ThemeSwitch from "../ThemeSwitch";

const Header = () => {
  return (
    <header>
      <Link href='/' className="absolute top-4 left-4">
        <Logo />
      </Link>
      <div className="absolute top-4 right-4">
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header;