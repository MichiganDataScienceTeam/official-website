import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail,
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoLogoGithub,
  IoArrowBack,
  IoArrowForward,
  IoArrowRoundForward,
  IoClipboardOutline,
  IoBrowsersOutline,
  IoLogoSlack,
  IoCopyOutline
} from "react-icons/io5";
import { createElement } from "react";

const iconMap = {
  envelope: IoMail,
  instagram: IoLogoInstagram,
  linkedin: IoLogoLinkedin,
  github: IoLogoGithub,
  caret_up: IoMdArrowDropup,
  caret_down: IoMdArrowDropdown,
  "arrow-left": IoArrowBack,
  "arrow-right": IoArrowForward,
  "arrow-stem-left": IoArrowRoundForward,
  clipboard: IoClipboardOutline,
  website: IoBrowsersOutline,
  slack: IoLogoSlack,
  copy: IoCopyOutline

};

export default function Icon(props) {
  if (!(props.name in iconMap)) {
    console.error("Could not find name " + props.name);
    return null;
  }
  return createElement(iconMap[props.name], props);
}
