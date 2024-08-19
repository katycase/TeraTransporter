import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "text.secondary",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        TeraTransportation
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          TeraTransportation
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
