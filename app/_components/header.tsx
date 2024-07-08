import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full">
      <div className="flex gap-x-4">
        <a
          className="text-sm text-secondary hover:underline underline-offset-2"
          href="/careers"
        >
          Careers
        </a>
        <a
          className="text-sm text-secondary hover:underline underline-offset-2"
          href="/semant-labs"
        >
          Semant Labs
        </a>
        <a
          className="text-sm text-secondary hover:underline underline-offset-2"
          href="/blog"
        >
          Blog
        </a>
      </div>
      <div>
        <a
          className="text-sm text-secondary hover:underline underline-offset-2"
          href="/sign-in"
        >
          Sign In
        </a>
      </div>
    </header>
  );
};

export default Header;
