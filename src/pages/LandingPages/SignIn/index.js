import { useEffect, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// @mui icons
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/SignInBackJov.jpeg";
import AxiosCliente from "config/http-gateway/axios-config";

function SignInBasic() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clientID = "652702201891-rc4scp0eeuht4jg0n8p7ttkfs29sajp5.apps.googleusercontent.com";
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        client_id: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, [clientID]);

  const onSuccess = (res) => {
    setUser(res.profileObj);
    console.log(user);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  //Ocultar la ruta de registro, sign in y pdf-viewer
  const filteredAparteroutes = routes.filter(
    (route) =>
      route.route !== "/pages/SignIn/Register/SimpleForm" &&
      route.route !== "/pdf-viewer" &&
      route.route !== "/pages/authentication/sign-in"
  );

  //Consumir LOGING

  const logIn = async () => {
    try {
      const response = await AxiosCliente({
        url: "/api-alma/auth/signIn",
        method: "PUT",
        data: {
          email: email,
          password: password,
        },
      });
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <DefaultNavbar routes={filteredAparteroutes} transparent light />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <LocalHospitalIcon fontSize="large" color="white" mt={1} />
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput
                      type="email"
                      label="Usuario"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      label="Contraseña"
                      fullWidth
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={3} textAlign="center">
                    <MKButton variant="gradient" color="info" fullWidth mb={2} onClick={logIn}>
                      Iniciar sesión
                    </MKButton>
                  </MKBox>
                  <MKBox textAlign="center">
                    <GoogleLogin
                      clientId={clientID}
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={"single_host_policy"}
                    />
                  </MKBox>

                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      No tienes una ceunta? {"   "}
                      <MKTypography
                        component={Link}
                        to="/pages/SignIn/Register/SimpleForm"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Registrate
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem"></MKBox>
    </>
  );
}

export default SignInBasic;
