import Image from "next/image";
import Quiz from "./components/Quiz";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <Quiz />
    </div>
  );
}
