import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaAngleDown,
  FaAngleUp,
  FaGithub,
} from "react-icons/fa6";
import { createElement } from "react";

const iconMap = {
  envelope: FaEnvelope,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
  caret_up: FaAngleUp,
  caret_down: FaAngleDown,
};

export default function Icon(props) {
  if (!(props.name in iconMap)) {
    console.error("Could not find name " + props.name);
    return null;
  }
  return createElement(iconMap[props.name], props);
}
