import FolderIcon from "@mui/icons-material/Folder";
import Reportes from "./layouts/pages/reportes/index";
import SignIn from "layouts/pages/authentication/sign-in";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Map from "layouts/pages/landing-pages/map";
import PDFViewer from "./pages/Presentation/sections/PDFRender";
import SimpleForm from "pages/LandingPages/SignIn/Register/SimpleForm";
const routes = [
  {
    name: "Informes clínicos",
    icon: <FolderIcon />,
    route: "/reportes",
    component: <Reportes />,
  },
  {
    name: "Sign In",
    route: "/pages/authentication/sign-in",
    component: <SignIn />,
    hidden: true,
  },
  {
    name: "Clínicas cercanas",
    icon: <LocalHospitalIcon />,
    route: "/pages/landing-pages/map",
    component: <Map />,
  },
  {
    name: "pdf-viewer",
    route: "/pdf-viewer",
    component: <PDFViewer />,
  },
  {
    name: "registro",
    route: "/pages/SignIn/Register/SimpleForm",
    component: <SimpleForm />,
  },
];

export default routes;
