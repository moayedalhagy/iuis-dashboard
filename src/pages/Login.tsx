import { Button } from "@mantine/core";
import { useLoginService } from "../services/LoginService";

export default function LoginPage() {
  const loginService = useLoginService();
  return (
    <div>
      <h1>login page</h1>
      <Button
        disabled={loginService.isPending}
        loading={loginService.isPending}
        onClick={() =>
          loginService.mutate({ username: "admin", password: "12345678" })
        }
      >
        login page
      </Button>
    </div>
  );
}
