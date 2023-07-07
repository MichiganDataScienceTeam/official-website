const { library, config } = require("@fortawesome/fontawesome-svg-core"); // next likes ES5 import
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
library.add(faEnvelope, faInstagram, faLinkedin, faCaretUp, faCaretDown);
