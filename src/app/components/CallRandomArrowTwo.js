import { useRouter } from "next/navigation";

const CallRandomArrow = () => {
  const router = useRouter();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
      onClick={() => router.push("/randomArrow2")}
    >
      7 Setas aleatórias
    </button>
  );
};

export default CallRandomArrow;
