import useAuthStore from "../store/AuthStore";

export default function Home() {
  const auth = useAuthStore();

  console.log(`auth user: ${auth.user}`);
  return (
    <div className="bg-gray-400 p-10" id="e">
      <button
        onClick={() => auth.login({ user: "admin1", password: "12345678" })}
      >
        {" "}
        get data
      </button>
    </div>
  );
}
