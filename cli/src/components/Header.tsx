import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { FasBts } from "ваш-компонент-fasbts"; 
const Header: FC = () => {
  const isAuth = true; //  обозначающая аутентифицирован ли пользователь

  return (
    <header className="flex items-center justify-between bg-clate-800 panding 4 shadow-sm backdrop-blur-sm">
      <Link to="/">
        <FasBts size={28} /> 
      </Link>
      {isAuth && (
        <nav>
          <ul className="ml-auto mt-10 flex items-center gap-5">
            <li>
              <NavLink
                to={'/'}
                activeClassName="text-white"
                className="text-white/50"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/categories'}
                activeClassName="text-white"
                className="text-white/50"
              >
                Categories
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
