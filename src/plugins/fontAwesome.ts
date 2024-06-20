import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faNewspaper,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faNewspaper,
  faCalendar,
  faChevronDown,
  faBars,
  faInstagram,
  faFacebook,
  faYoutube
);

export default FontAwesomeIcon;
