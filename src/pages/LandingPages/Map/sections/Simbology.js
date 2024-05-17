// @mui/material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealingIcon from "@mui/icons-material/Healing";

// Material Kit 2 React components
import MKBox from "components/MKBox";

function Simbology() {
  return (
    <MKBox component="section" pt={3} pb={3}>
      <Container>
        <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={4} textAlign="center">
            <HealingIcon fontSize="large" />
            <Typography variant="h4" gutterBottom>
              Primer Nivel
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <MedicalServicesIcon fontSize="large" />
            <Typography variant="h4" gutterBottom>
              Segundo Nivel
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <LocalHospitalIcon fontSize="large" />
            <Typography variant="h4" gutterBottom>
              Tercer Nivel
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Simbology;
