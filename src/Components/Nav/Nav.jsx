import Container from "../Container/Container";
import logo from "../../assets/favicon/favicon.png";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const navList = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#13b0f5]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#aboutMe"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#13b0f5]" : ""
          }
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#13b0f5]" : ""
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#13b0f5]" : ""
          }
        >
          Contact Me
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar ">
            <Container>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">
                <div className="flex items-center ">
                  <img className="w-10 h-10" src={logo} alt="" />
                  <h3 className="font-lora italic font-bold text-3xl uppercase -ml-1 text-transparent bg-clip-text bg-gradient-to-r from-[#AED1EF] via-[#F2DFC1] to-[#F0B9EF]">
                    rif
                  </h3>
                </div>
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal font-lora font-extrabold text-xl">
                  {navList}
                </ul>
              </div>
            </Container>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 md:w-80 min-h-full bg-base-200 font-lora font-extrabold text-base">{navList}</ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
