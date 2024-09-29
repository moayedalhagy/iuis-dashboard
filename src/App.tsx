import { Button, MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <p className="bg-red-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <Button color="green"> click me</Button>
    </MantineProvider>
  );
}

export default App;
