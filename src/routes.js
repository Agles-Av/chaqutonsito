import SignIn from "layouts/pages/authentication/sign-in";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FolderIcon from "@mui/icons-material/Folder";

const routes = [
  {
    name: "Clínicas cercanas",
    icon: <LocalHospitalIcon />,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
  {
    name: "Informes clínicos",
    icon: <FolderIcon />,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
  {
    route: "/pages/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
