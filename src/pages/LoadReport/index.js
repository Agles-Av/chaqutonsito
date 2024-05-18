import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import routes from "routes";
import bgImage from "assets/images/Reportes-clinicos.jpeg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Presentation() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const navigate = useNavigate();

  const fileData = {
    title: formData.title,
    description: formData.description,
  };

  const isFilePdf = (file) => {
    return file && file.type === "application/pdf";
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFilePdf(formData.file)) {
      setErrorMessage("El archivo seleccionado no es un PDF válido");
      return;
    } else {
      setErrorMessage("");
      try {
        const formDataObj = new FormData();
        const fileDto = new Blob([JSON.stringify(fileData)], {
          type: "application/json",
        });
        formDataObj.append("file", fileDto);
        formDataObj.append("filePDF", formData.file);
        const response = await fetch("http://localhost:8080/api-alma/file/upload", {
          method: "POST",
          body: formDataObj,
        });

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Archivo enviado correctamente",
          });
          setTimeout(() => {
            Swal.close(); // Cierra la alerta después de 3 segundos
            navigate("/reportes"); // Cambia '/otra-url' por la ruta a la que deseas redirigir
          }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error al enviar el archivo",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Error al enviar el archivo: ${error.message}`,
        });
      }
    }
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="30vh"
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
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              {}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 4,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
        style={{ textAlign: "center" }}
      >
        <MKBox
          component="section"
          bgColor="white"
          py={6}
          px={{ xs: 2, lg: 6 }}
          my={6}
          mx={{ xs: 2, lg: 6 }}
          borderRadius="xl"
          shadow="lg"
        >
          <MKTypography variant="h3" mb={2}>
            Ingresar informe clínico
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={4}>
            Por favor, asegúrate de que todos los datos ingresados sean correctos.
          </MKTypography>
          {errorMessage && (
            <MKBox mb={2}>
              <MKTypography variant="body2" color="error">
                {errorMessage}
              </MKTypography>
            </MKBox>
          )}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8} mx="auto">
                <MKBox mb={2}>
                  <MKInput
                    label="Título"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                  />
                </MKBox>
                <MKBox mb={2}>
                  <MKInput
                    label="Descripción"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                  />
                </MKBox>
                <MKBox mb={4}>
                  <MKInput
                    type="file"
                    name="file"
                    onChange={handleChange}
                    accept=".pdf"
                    fullWidth
                  />
                </MKBox>
                <MKBox mt={4} mb={1} md-ml={25} md-mr={25} textAlign="center">
                  <MKButton variant="gradient" color="info" type="submit" fullWidth>
                    Enviar
                  </MKButton>
                </MKBox>
              </Grid>
            </Grid>
          </form>
        </MKBox>
      </Card>
    </>
  );
}

export default Presentation;
