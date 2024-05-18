// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Presentation page sections
import Counters from "pages/Reportes/sections/Counters";
import Information from "pages/Reportes/sections/Information";
import DesignBlocks from "pages/Reportes/sections/DesignBlocks";
import Testimonials from "pages/Reportes/sections/Testimonials";

// Presentation page components

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/Reportes-clinicos.jpeg";

function Presentation() {
  const filteredRoutes = routes.filter(
    (route) => route.route !== "/pages/authentication/sign-in" && route.route !== "/pdf-viewer"
  );

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
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="black"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Informes clinicos{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Tu ventana a la informacion clinica.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
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
        <Counters />
        <DesignBlocks />
        <Information />
        <Testimonials />
      </Card>
    </>
  );
}

export default Presentation;
