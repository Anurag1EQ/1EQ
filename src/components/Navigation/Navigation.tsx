import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigation.css";

const NAV_ITEMS = ["Products", "Services", "Technology", "Careers", "About"];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 977px)"); // lg breakpoint

  const handleChange = () => {
    if (mediaQuery.matches) {
      setMobileMenuOpen(false);
    }
  };

  mediaQuery.addEventListener("change", handleChange);
  window.addEventListener("orientationchange", handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
    window.removeEventListener("orientationchange", handleChange);
  };
}, []);



  return (
    <nav
      className={`z-[100] global-width mx-auto     top-0  left-0 right-0  lg:bg-transparent lg:absolute     ${mobileMenuOpen ? "bg-[var(--theme-black-alt)] fixed inset-0 h-[100vh]" : "absolute"}  `}
    >
      <div
        className={` relative  top-0 py-[24px]  px-4 sm:px-6 md:px-8 left-0 flex items-center justify-between  marker:mx-auto w-full  `}
      >
        <div className="   w-[70px]  md:w-[80px] z-[101] cursor-pointer shrink-0">
          <Link to="/" aria-label="1EQ Home">
            <img
              src="/images/1EQ.svg"
              className="h-full w-full outline-none  object-contain"
              alt="1EQ"
              height={100}
              width={100}
            />
          </Link>
        </div>

        {/* nav items  */}
        <div
          className={` right-0  navHead  lg:ms-auto   items-center    justify-center   absolute top-0    ms-auto w-full  flex-col gap-[40px]  pt-[80px]   text-center ${mobileMenuOpen ? "flex" : "hidden"} `}
        >
          <div className="flex flex-col  items-center   navBar  gap-[40px]   ">
            {NAV_ITEMS.map((item) => (
              <NavLink
                to={`/${item.toLowerCase()}`}
                key={item}
                className="nav-items-active  block bg-transparent border-none text-[16px]  font-[300] text-[var(--text-medium)] hover:text-[var(--text-light)]"
              >
                {item}
              </NavLink>
            ))}
          </div>
          <Link
            to="/contact"
            className="px-[18px]   py-[12px] font-[500] text-[16px] text-[var(--text-light)] bg-[var(--button-dark)] border border-[var(--border-medium)] text-center block"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          className={`z-[109] flex ml-auto hamburger text-white `}
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <span className="aspect-square  w-[24px]">

            <FaTimes   className="w-full h-full position-fixed" />
            </span>
            
          ) : (
            <span className="aspect-square w-[24px]  ">

            <FaBars className="w-full h-full position-fixed" />
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};
