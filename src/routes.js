import SignIn from "layouts/pages/authentication/sign-in";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FolderIcon from "@mui/icons-material/Folder";
import Map from "layouts/pages/landing-pages/map";

const routes = [
  {
    name: "Informes clínicos",
    icon: <FolderIcon />,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
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
];

export default routes;
