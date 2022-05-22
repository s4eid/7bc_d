import React, { useEffect, useState } from "react";
import nav from "./nav.module.css";
import Link from "next/link";
import { navItemsS } from "../../data/navItem";
import LoginRegister from "../../Modals/LoginRegister/LoginRegister";
import SideBar from "./SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
export default function NavBar({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();
  const [openM, setOpenM] = useState(false);
  useEffect(() => {
    setNavOpen(false);
  }, [router]);
  return (
    <>
      <div className={nav.container}>
        <div className={nav.linksContainer}>
          <ul className={nav.linksCU}>
            <Link href="/carpets">
              <li
                className={
                  router.pathname === "/carpets"
                    ? nav.activeLink
                    : nav.notActiveLink
                }
              >
                Carpet
              </li>
            </Link>
            {/* <Link href="/kilims">
              <li
                className={
                  router.pathname === "/kilims"
                    ? nav.activeLink
                    : nav.notActiveLink
                }
              >
                Kilim
              </li>
            </Link> */}
            {/* <Link href="/tablecloth">
              <li
                className={
                  router.pathname === "/tablecloth"
                    ? nav.activeLink
                    : nav.notActiveLink
                }
              >
                Tablecloth
              </li>
            </Link> */}
            <Link href="/orders">
              <li
                className={
                  router.pathname === "/orders"
                    ? nav.activeLink
                    : nav.notActiveLink
                }
              >
                Orders
              </li>
            </Link>
            <Link href={"/addProduct"}>
              <li className={nav.notActiveLinkD}>Add</li>
            </Link>
            <li className={nav.notActiveLinkD}>
              <p>Users</p>
              <ul className={nav.subMenu}>
                <Link href={"/users/admins"}>
                  <li>Admins</li>
                </Link>
                <Link href={"/users/clients"}>
                  <li>Clients</li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
        <div className={nav.loginContainer}>
          <button onClick={() => setOpenM(!openM)} className={nav.loginBtn}>
            Login
          </button>
        </div>
        <div className={nav.menuContainer} onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon
            icon={faBars}
            className={!navOpen ? nav.burger : nav.burgerOpen}
          />
        </div>
        <SideBar navItems={navItemsS} isOpen={navOpen} />
      </div>
      <LoginRegister openM={openM} setOpenM={setOpenM} />
      {children}
    </>
  );
}
