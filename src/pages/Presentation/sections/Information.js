/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import NewspaperIcon from "@mui/icons-material/Newspaper";

// Images
import bgFront from "assets/images/pexels-pixabay-207601.jpg";
import bgBack from "assets/images/pexels-karolina-grabowska-4021775.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Encuentra la clínica
                    <br />
                    más cercana
                  </>
                }
                description="Localiza especialistas cerca de ti en cuestión de segundos."
              />
              <RotatingCardBack
                image={bgBack}
                title="Descubre especialistas"
                description="Encuentra expertos locales de confianza para cualquier servicio cerca de tu hogar."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/map",
                  label: "Buscar especialista",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<HealthAndSafetyIcon fontSize="2rem" />}
                  title="Investigaciones actuales"
                  description="Manténte al día con las últimas novedades en el sector salud."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<NewspaperIcon fontSize="2rem" />}
                  title="Noticias relevantes"
                  description="Consulta las noticias más relevantes y actuales."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
