import { elements } from "../ui/elements";

const overlay = elements.overlay;

export function showOverlay() {
  if (!overlay) return;
  overlay.style.display = "block";
  overlay.onclick = null;
}

export function hideOverlay() {
  if (!overlay) return;
  overlay.style.display = "none";
  overlay.onclick = null;
}