import { motion, useScroll, useSpring } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { Navbar } from "./components/navbar";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-zinc-800">
      <Navbar />
      <motion.div
        className="fixed top-16 left-0 right-0 h-2 bg-sky-500 "
        style={{ scaleX }}
      />
      <section>
        <div className="h-screen flex flex-col justify-center items-center gap-10">
          <h1 className="text-6xl font-bold">My React</h1>
          <div className="text-9xl text-sky-500 animate-slow-spin">
            <FaReact />
          </div>
          <p className="text-2xl">
            This is React practice project{" "}
            <span className="font-semibold">Aria Pramesta</span>
          </p>
        </div>
      </section>

      <section className="bg-zinc-900 flex flex-col items-center p-10">
        <h1 className="text-4xl my-10">Calculator</h1>
        <div className="flex items-center">
          <div className="bg-[url('/public/calculator.png')] bg-cover bg-center w-96 h-[450px] rounded-xl z-10"></div>
          <div className="bg-[url('/public/calc-code.png')] bg-cover bg-center w-[800px] h-96 rounded-xl -ml-3"></div>
        </div>
        <a
          href="/calculator"
          className="bg-sky-500 text-zinc-800 p-3 rounded-lg font-semibold hover:font-bold my-10"
        >
          Go to the page {">"}
        </a>
      </section>
    </div>
  );
}

export default App;
