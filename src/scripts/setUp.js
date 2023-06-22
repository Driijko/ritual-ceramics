import viewportCSS from "./viewport/viewportCSS";
import updateOnResize from "./viewport/updateOnResize";

export default function setUp() {
  viewportCSS();
  updateOnResize();
};