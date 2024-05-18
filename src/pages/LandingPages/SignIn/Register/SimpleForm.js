// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

//react
import { useState } from "react";
import AxiosCliente from "config/http-gateway/axios-config";
import { useNavigate } from "react-router-dom";
import { customAlert } from "alert/alert";

function FormSimple() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //Consumir REGISTRO
  const register = async () => {
    const data = {
      fullName: nombre + " " + apellido + " " + segundoApellido,
      email: email,
      password: password,
    };
    try {
      const response = await AxiosCliente({
        url: "/api-alma/auth/createUser",
        method: "POST",
        data: data,
      });
      customAlert(response.message, response.message, "success");
      navigate("/pages/authentication/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            Llene el formulario
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Primer nombre"
                    fullWidth
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Primer apellido"
                    fullWidth
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    type="text"
                    label="Segundo apellido"
                    fullWidth
                    onChange={(e) => setSegundoApellido(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    type="text"
                    label="Correo"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    type="text"
                    label="contraseña"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton variant="gradient" color="dark" fullWidth onClick={register}>
                  Registrarse
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FormSimple;
