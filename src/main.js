import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import about from "./pages/admin/about/about";
import AdminAboutEditPage from "./pages/admin/about/about-edit";
import AdminProjectsList from "./pages/admin/projects/projectsList";
import AdminProjectsAdd from "./pages/admin/projects/projectssAdd";

import HomePage from "./pages/HomePage";
import { render, router } from "./utilities";
import AdminProjectsEdit from "./pages/admin/projects/projectsEdit";

import headerAdminPage from "./pages/admin/header";
import loginPage from "./pages/login";

const app = document.querySelector("#app");
router.on ("/", () => render(HomePage, app));

router.on ("/admin/about", () => render(about, app));
router.on("/admin/about/:id/edit", ({ data }) => render(() => AdminAboutEditPage(data), app));

router.on ("/login", () => render(loginPage, app));


router.on ("/admin/projects", () => render(AdminProjectsList, app));
router.on ("/admin/projects/add", () => render(AdminProjectsAdd, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectsEdit(data), app));

router.on ("/admin", () => render(headerAdminPage, app));

router.resolve();


