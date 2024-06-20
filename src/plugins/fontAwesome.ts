import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faNewspaper,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faNewspaper, faCalendar, faChevronDown, faBars);

export default FontAwesomeIcon;
