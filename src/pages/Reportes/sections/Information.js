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
// Images
import bgFront1 from "assets/images/medline.png";
import "./BotonCargarInforme.css";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <hr style={{ margin: 50 }}></hr>
      <h1 style={{ textAlign: "center", marginBottom: 100 }}> Recursos educativos </h1>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront1}
                icon="touch_app"
                title={"MedlinePlus"}
                description="Servicio informativo en línea de salud para pacientes, familiares y amigos. Es producida por la Biblioteca Nacional de Medicina de Estados Unidos."
              />
              <RotatingCardBack
                image={bgFront1}
                title="Descubrir mas"
                description="Puede consultar el siguiente link para obtener informacion mas detallada y concisa acerca del tema."
                action={{
                  type: "external",
                  route: "https://www.nlm.nih.gov/",
                  label: "Haga click aqui",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Tipos de informes clínicos"
                  description="Existen muchos tipos de informes clinico, pero entre los principales tenemos: Historia clínica, Laboratorio, Radiología, Patología."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Terminología médica común"
                  description="Podras encontrar informacion acerca de: Términos como anemia, hipertensión, colesterol LDL, biopsia, quimioterapia, Abreviaturas que te apoyaran a conocer un poco mas sobre temas complejos."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Interpretación de resultados de laboratorio"
                  description="Podras conocer el como interpretar rangos normales de glóbulos rojos, glucosa, proteínas, sangre en orina.
                  Crecimiento de bacterias o hongos en cultivos."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Guías para pacientes sobre procedimientos médicos"
                  description="Podras conocer mas acerca de instrucciones de preparación para cirugías y endoscopias.
                  Descripción de procedimientos como tomografías computarizadas (TC).."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <hr style={{ margin: 100 }}></hr>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront1}
                icon="touch_app"
                title={"MedlinePlus"}
                description="servicio informativo en línea de salud para pacientes, familiares y amigos. Es producida por la Biblioteca Nacional de Medicina de Estados Unidos."
              />
              <RotatingCardBack
                image={bgFront1}
                title="Descubrir mas"
                description="Puede consultar el siguiente link para obtener informacion mas detallada y concisa acerca del tema."
                action={{
                  type: "internal",
                  route: "https://www.nlm.nih.gov/",
                  label: "Haga click aqui",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Tipos de informes clínicos"
                  description="Existen muchos tipos de informes clinico, pero entre los principales tenemos: Historia clínica, Laboratorio, Radiología, Patología."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Terminología médica común"
                  description="Podras encontrar informacion acerca de: Términos como anemia, hipertensión, colesterol LDL, biopsia, quimioterapia, Abreviaturas que te apoyaran a conocer un poco mas sobre temas complejos."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Interpretación de resultados de laboratorio"
                  description="Podras conocer el como interpretar rangos normales de glóbulos rojos, glucosa, proteínas, sangre en orina.
                  Crecimiento de bacterias o hongos en cultivos."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Guías para pacientes sobre procedimientos médicos"
                  description="Podras conocer mas acerca de instrucciones de preparación para cirugías y endoscopias.
                  Descripción de procedimientos como tomografías computarizadas (TC).."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <hr style={{ margin: 100 }}></hr>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront1}
                icon="touch_app"
                title={"MedlinePlus"}
                description="servicio informativo en línea de salud para pacientes, familiares y amigos. Es producida por la Biblioteca Nacional de Medicina de Estados Unidos."
              />
              <RotatingCardBack
                image={bgFront1}
                title="Descubrir mas"
                description="Puede consultar el siguiente link para obtener informacion mas detallada y concisa acerca del tema."
                action={{
                  type: "internal",
                  route: "https://www.nlm.nih.gov/",
                  label: "Haga click aqui",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Tipos de informes clínicos"
                  description="Existen muchos tipos de informes clinico, pero entre los principales tenemos: Historia clínica, Laboratorio, Radiología, Patología."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Terminología médica común"
                  description="Podras encontrar informacion acerca de: Términos como anemia, hipertensión, colesterol LDL, biopsia, quimioterapia, Abreviaturas que te apoyaran a conocer un poco mas sobre temas complejos."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Interpretación de resultados de laboratorio"
                  description="Podras conocer el como interpretar rangos normales de glóbulos rojos, glucosa, proteínas, sangre en orina.
                  Crecimiento de bacterias o hongos en cultivos."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Guías para pacientes sobre procedimientos médicos"
                  description="Podras conocer mas acerca de instrucciones de preparación para cirugías y endoscopias.
                  Descripción de procedimientos como tomografías computarizadas (TC).."
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
