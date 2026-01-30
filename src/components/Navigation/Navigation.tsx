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

  return (
    <nav
      className={`z-[100] global-width mx-auto     top-0  left-0 right-0  lg:bg-transparent lg:absolute   h-[100dvh] lg:h-auto py-5 ${mobileMenuOpen ? "bg-[var(--theme-black-alt)] fixed" : "absolute"}  `}
    >
      <div
        className={` relative  top-0   px-3 sm:px-6 md:px-8 left-0   flex items-center lg:justify-between  marker:mx-auto w-full  `}
      >
        <div className="w-[80px] z-[101] cursor-pointer shrink-0">
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
          className={` right-0 lg:flex  lg:ms-auto   items-center  lg:right-0  justify-center lg:justify-between lg:static absolute top-0 lg:py-0 lg:flex-row ms-auto w-full flex  flex-col gap-[30px]   pt-[80px]  text-center ${mobileMenuOpen ? "flex" : "hidden"} `}
        >
          <div className="flex flex-col lg:ps-10 lg:ms-10 lg:border-l-2 items-center   lg:flex-row  gap-[30px]">
            {NAV_ITEMS.map((item) => (
              <NavLink
                to={`/${item.toLowerCase()}`}
                key={item}
                className="nav-items-active  block bg-transparent border-none text-[16px] font-[400] text-[var(--text-medium)] hover:text-[var(--text-light)]"
              >
                {item}
              </NavLink>
            ))}
          </div>
          <Link
            to="/contact"
            className="px-[18px]  py-[12px] font-[500] text-[16px] text-[var(--text-light)] bg-[var(--button-dark)] border border-[var(--border-medium)] text-center block"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          className={`z-[109] flex ml-auto lg:hidden text-white `}
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <FaTimes size={24} className="position-fixed" />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      </div>
    </nav>
  );
};
