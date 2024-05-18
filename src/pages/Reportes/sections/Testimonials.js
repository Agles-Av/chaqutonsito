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
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Respaldado por más</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            974+ Medicos profesionales
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Medicos de multiples instituciones publicas y privadas han consultado informacion y dej
            ado comentarios positivos hacia la pagina y dejando su experiencia con esta.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="Hace 1 dia"
              review="Esta plataforma es una excelente herramienta para mantenerse actualizado con la información médica más reciente y acceder a recursos confiables de manera fácil y centralizada. Como profesional de la salud, valoro tener a mi alcance datos precisos, informes detallados y la ubicación de clínicas cercanas, todo en un mismo lugar Sin duda, esta página me ahorra un valioso tiempo en mi práctica clínica diaria."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="Hace 1 semana"
              review="Felicito a los creadores de esta página por brindar un servicio tan completo e intuitivo. La capacidad de consultar informes clínicos de mis pacientes de forma segura y obtener explicaciones claras sobre los diferentes tipos de resultados es sumamente útil. Además, poder ubicar rápidamente clínicas y centros médicos en mi área facilitan enorme la derivación de pacientes cuando es necesario. Esta plataforma es una verdadera aliada para brindar una atención médica de calidad"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="Hace 3 semanas"
              review="Como médico, uno de mis mayores desafíos es mantener a mis pacientes informados y empoderados sobre su propia salud. Esta página web es una herramienta invaluable para lograr ese objetivo. La información médica presentada de manera accesible y comprensible, junto con la disponibilidad de informes clínicos detallados, fomenta una comunicación efectiva con mis pacientes Además, la sección de ubicaciones de clínicas les permite tomar decisiones informadas sobre dónde buscar atención adicional."
              rating={4.5}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
