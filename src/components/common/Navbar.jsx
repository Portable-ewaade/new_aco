import { linkData } from "@/data/mockData";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-white nav-container bg-white z-1">
      <nav className="navbar navbar-expand-lg pt-2 text-black ">
        <div className="container-fluid mt-2">
          <Link href="/" className="navbar-brand" passHref>
            <img
              src="/assets/color-logo-img.png"
              alt="a & co"
              className="img-fluid mt-2"
              style={{ width: "2.875rem", height: "2.625rem" }}
            />
          </Link>
          <button
            className="navbar-toggler fs-medium p-0 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BiMenu className="border-0" />
          </button>
        </div>

        <div
          className="collapse navbar-collapse mt-4 px-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav nav-fs">
            {linkData.map((link, index) => (
              <li className="nav-item me-4" key={index}>
                <Link href={link.url} className=" nav-link active" passHref>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
