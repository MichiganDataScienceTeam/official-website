import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail,
  IoCaretDown,
  IoCaretUp,
  IoLogoGithub,
  IoArrowBackCircle,
  IoArrowForward,
  IoArrowForwardCircle,
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
  caret_up: IoCaretUp,
  caret_down: IoCaretDown,
  "arrow-left": IoArrowBackCircle,
  "arrow-right": IoArrowForwardCircle,
  "arrow-stem-left": IoArrowForward,
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
