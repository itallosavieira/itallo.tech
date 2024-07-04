---
title: 'Two Forms of Pre-rendering'
date: '06/01/2024'
category: 'js'
description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa."
---
# h1
## h2
### h3

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.
```tsx
import { Logo, ThemeSwitch } from "@/components";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-auto px-8 fixed shadow-sm">
      <div className="flex items-center justify-between gap-10">
        <Link href="/" className=" hover:border-none">
          <Logo />
        </Link>
        <nav className="flex items-center">
          <ul className="ml-0 list-none flex gap-4 [&>li]:mt-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </nav>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Header;
```

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.