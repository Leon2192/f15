import { Box, Typography, Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const Confirm = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#e8b4be",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >

<CheckIcon
  sx={{
    fontSize: { xs: 60, md: 80 },
    color: "#c27382",
    mb: 2,
  }}
/>

  
      <Typography
        variant="h4"
        sx={{
           fontFamily: "'zhandelson-three', cursive",
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 2,
          
        }}
      >
        Confirmación de asistencia
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.1rem" },
            fontFamily: "'zhandelson-three', cursive",
          maxWidth: 500,
          mb: 4,
          color: "#222",
        }}
      >
        Espero que seas parte de esta gran celebración. ¡Confirmame tu asistencia!
      </Typography>

      {/* Botón */}
    <Button
  component="a"
  href="https://docs.google.com/forms/d/e/1FAIpQLSelY0QMb2Pdi7bOb19tFv-Q42qepyMiIHq9qaPUBfGh_Qr8Lw/viewform?fbzx=4030668355714172330"
  target="_blank"
  rel="noopener noreferrer"
  variant="contained"
  sx={{
    borderRadius: 999,
    px: 4,
    fontFamily: "'zhandelson-three', cursive",
    backgroundColor: "#c27382",
    color: "#fff",
    boxShadow: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#fff",
      border: "2px solid #c27382",
      color: "#c27382",
    },
  }}
>
  Confirmar asistencia
</Button>

    </Box>
  );
};

export default Confirm;
