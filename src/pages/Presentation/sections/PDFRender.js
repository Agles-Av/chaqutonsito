import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import routes from "routes";
import { Card } from "@mui/material";
import MKBox from "components/MKBox";

function Test() {
  const filteredRoutes = routes.filter(
    (route) => route.route !== "/pages/authentication/sign-in" && route.route !== "/pdf-viewer"
  );

  const url = "https://archivos.juridicas.unam.mx/www/bjv/libros/10/4842/3.pdf";

  return (
    <>
      <DefaultNavbar
        routes={filteredRoutes}
        action={{
          type: "external",
          route: "/pages/authentication/sign-in",
          label: "Iniciar sesión",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="30vh"
        width="100%"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          backgroundColor: "#4361ee",
          placeItems: "center",
        }}
      ></MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div>
          <iframe src={url} width="100%" height="800px" />
        </div>
      </Card>
    </>
  );
}
export default Test;
