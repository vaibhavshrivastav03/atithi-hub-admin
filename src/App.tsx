import { useLogin } from "./hooks/useLogin";

function App() {
  const loginMutation = useLogin();

  const handleLogin = () => {
    loginMutation.mutate({
      email: "vaibhav.shrivastav@agnistack.com",
      password: "Mukul@7024",
    });
  };

  return (
    <div style={{ padding: 40 }}>
      <button onClick={handleLogin}>
        Login Test
      </button>

      {loginMutation.isPending && (
        <p>Loading...</p>
      )}

      {loginMutation.isSuccess && (
        <p>Login Success</p>
      )}

      {loginMutation.isError && (
        <p>Login Failed</p>
      )}
    </div>
  );
}

export default App;