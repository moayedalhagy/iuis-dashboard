import { MantineProvider, DirectionProvider } from "@mantine/core";

function App() {
  return (
    <DirectionProvider>
      <MantineProvider>
        <p>Lorem ipsum dolor sit.</p>
      </MantineProvider>
    </DirectionProvider>
  );
}

export default App;
