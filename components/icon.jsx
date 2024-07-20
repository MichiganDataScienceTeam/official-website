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
  IoCopyOutline,
  IoCalendarOutline,
  IoDocumentTextOutline,
  IoDocumentOutline
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
  copy: IoCopyOutline,
  calendar: IoCalendarOutline,
  "file-text": IoDocumentTextOutline,
  "file-pdf": IoDocumentOutline
};

export default function Icon({ name, ...props }) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.error(`Could not find icon with name "${name}"`);
    return null;
  }

  return createElement(IconComponent, props);
}
