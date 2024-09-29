import { Button, MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <p className="bg-green-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <Button className="bg-blue-600"> click me</Button>
    </MantineProvider>
  );
}

export default App;
