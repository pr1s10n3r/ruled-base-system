import "./scss/styles.scss";
import App from "./App.svelte";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const app = new App({
  target: document.getElementById("app"),
});

export default app;
