import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoIosMail,
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoLogoGithub,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { createElement } from "react";

const iconMap = {
  envelope: IoIosMail,
  instagram: IoLogoInstagram,
  linkedin: IoLogoLinkedin,
  github: IoLogoGithub,
  caret_up: IoMdArrowDropup,
  caret_down: IoMdArrowDropdown,
  "arrow-left": IoIosArrowBack,
  "arrow-right": IoIosArrowForward,
};

export default function Icon(props) {
  if (!(props.name in iconMap)) {
    console.error("Could not find name " + props.name);
    return null;
  }
  return createElement(iconMap[props.name], props);
}
