import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        sm: `"nav nav" "aside main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`,
        xl: `"nav nav" "aside main"`,
        "2xl": `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        sm: "200px 1fr",
        md: "200px 1fr",
        lg: "200px 1fr",
        xl: "200px 1fr",
        "2xl": "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
