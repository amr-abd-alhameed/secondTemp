import "./style.css";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon ">
      <ul className="fs-3 d-flex justify-content-center align-items-center gap-3">
        {/* {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )} */}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {/* {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )} */}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {/* 
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )} */}
      </ul>
      <p className="mb-0"> تابعني علي</p>
    </div>
  );
};
