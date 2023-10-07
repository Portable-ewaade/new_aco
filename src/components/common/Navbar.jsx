import { linkData } from "@/data/mockData";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useRouter } from "next/router"; // Import the useRouter hook from Next.js
import { Col, Row } from "react-bootstrap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Use the useRouter hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* laptop view */}
      <Row className="laptop-view bg-white  bg-white z-1 position-sticky top-0">
        <Col md={12} lg={10} className="mx-auto">
          <nav className="navbar navbar-expand-lg pt-2 text-black ">
            <div className="container-fluid mt-2">
              <Link href="/" className="navbar-brand" passHref>
                <img
                  src="/assets/color-logo-img.png"
                  alt="a & co"
                  className=" mt-2"
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
              className="collapse navbar-collapse mt-4 px-3 me-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav-fs">
                {linkData.map((link, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      href={link.url}
                      className={`nav-laptop-link nav-link mx-3 ${
                        router.pathname === link.url ? "active" : ""
                      }`}
                      passHref
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Col>
      </Row>


      {/* mobile view */}
      <div
        className={`mobile-view nav-container bg-white z-1 nav-mobile ${
          isMenuOpen ? "menu-open" : ""
        }`}
      >
        <nav className="navbar navbar-expand-lg pt-2">
          <div className="container-fluid mt-2">
            <Link href="/" className="navbar-brand" passHref>
              <img
                src="/assets/color-logo-img.png"
                alt="a & co"
                className=" mt-2"
                style={{ width: "2.875rem", height: "2.625rem" }}
              />
            </Link>
            <button
              className="navbar-toggler fs-medium p-0 border-0"
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <BiMenu className="border-0" />
            </button>
          </div>

          <div
            className={`collapse navbar-collapse mt-4 px-3 ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav nav-fs text-white pt-4">
              <div className="d-flex justify-content-between text-white px-4 mb-5">
                <Link href="/" className="navbar-brand" passHref>
                  <img
                    src="/assets/color-logo-img.png"
                    alt="a & co"
                    className=""
                    style={{ width: "2.875rem", height: "2.625rem" }}
                  />
                </Link>

                <Link
                  href="#"
                  className="closeIcon fs-1 mt-2 text-white"
                  onClick={toggleMenu}
                >
                  &times;
                </Link>
              </div>

              <div className="mx-auto">
                {linkData.map((link, index) => (
                  <li className="nav-item " key={index}>
                    <Link
                      href={link.url}
                      className="nav-link active text-white fs-4 mb-4"
                      passHref
                    >
                      {link.title}
                      <RiArrowRightUpLine />
                    </Link>
                  </li>
                ))}
              </div>

              <img src="/assets/aco-img.png " alt="a & co" className="p-4" />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
