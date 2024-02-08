import { useState } from "react";import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-start fs-2">
          <Link className="navbar-brand nav_ac " to="/">
            {logotext}
          </Link>
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          <div className="d-flex align-items-center">
            <Themetoggle />
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      الرئيسية
                    </Link>
                  </li>

                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      من أنا
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      {" "}
                      تواصل معي
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-row justify-content-center align-items-center position-absolute w-100 p-3 fs-3">
            <div className="d-flex justify-content-center">
              <a href={socialprofils.linkedin}>LinkedIn</a>
              <a href={socialprofils.github}>FaceBook</a>
            </div>
            <p className="copyright m-0 text-center">
              {" "}
              حقوق الملكية محفوظة للمهندس ايهاب جمعة - 2024
            </p>
          </div>
        </div>
      </header>
      {/* <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div> */}
    </>
  );
};

export default Headermain;
