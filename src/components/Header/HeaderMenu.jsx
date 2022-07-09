import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: {
    opacity: 1,
    x: 0,
    visibility: "visible",
    transition: {
      staggerChildren: 0.5,
    },
  },
  closed: { opacity: 0, x: "400%", visibility: "hidden" },
};

const item = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

function HeaderMenu({ menu, handleMenu }) {
  return (
    <motion.ul
      animate={menu ? "open" : "closed"}
      variants={variants}
      className={`menu-ul w-64 h-screen  pt-[7.375rem] pl-8  fixed right-0 md:hidden `}
    >
      <motion.li variants={item}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
          onClick={handleMenu}
        >
          <span className="mr-2">00</span>
          HOME
        </NavLink>
      </motion.li>

      <motion.li variants={item}>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
          onClick={handleMenu}
        >
          <span className="mr-2">01</span>
          DESTINATION
        </NavLink>
      </motion.li>
      <motion.li variants={item}>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
          onClick={handleMenu}
        >
          <span className="mr-2">02</span>
          CREW
        </NavLink>
      </motion.li>
      <motion.li variants={item}>
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
          onClick={handleMenu}
        >
          <span className="mr-2">03</span>
          TECHNOLOGY
        </NavLink>
      </motion.li>
    </motion.ul>
  );
}

export default HeaderMenu;
