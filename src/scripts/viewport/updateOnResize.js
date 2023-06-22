import viewportCSS from "./viewportCSS";
import { updateViewportOrientation } 
from "../../data/viewportOrientationStore";
import { updateLayoutBreakpoint } 
from "../../data/layoutBreakpointStore";

export default function updateOnResize() {
  window.addEventListener("resize", ()=> {
    viewportCSS();
    updateViewportOrientation();
    updateLayoutBreakpoint();
  });
};