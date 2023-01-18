import Tabs from "./containers/Tabs";
import AppBar from "./containers/AppBar";
import {Container} from "@mui/material";

export default function App () {
  return (
    <>
      <AppBar />
      <Container>
        <Tabs />
      </Container>
    </>
  );
}