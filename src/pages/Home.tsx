import useAuthStore from "../store/AuthStore";

export default function Home() {
  const auth = useAuthStore();

  return <div className="bg-gray-400 p-10" id="e"></div>;
}
