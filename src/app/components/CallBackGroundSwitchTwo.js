const { useRouter } = require("next/navigation");

const CallBackGroundSwtichTwo = () => {
  const router = useRouter();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
      onClick={() => router.push("/backgroundSwitcher2")}
    >
      Vermelho/Azul
    </button>
  );
};

export default CallBackGroundSwtichTwo;
