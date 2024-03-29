import RevealFinal from "./components/Reveal_Final";
import Reveal from "./components/Reveal";

function Third() {
  return (
    <>
      <div className="min-h-screen flex flex-col px-12 md:px-24 text-center">
        <RevealFinal>
          <h1 className="text-[7em] md:text-[10em] font-[Thunder-bold] text-white w-full">
            I can help you elevate
          </h1>
        </RevealFinal>

        <RevealFinal>
          <p className="text-[7em] md:text-[10em] -translate-y-14 font-[Thunder-bold] text-white">
            and your work today!
          </p>
        </RevealFinal>

        <RevealFinal>
          <p className="text-white text-5xl font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            alias facere consequatur quasi ab, quo rerum voluptate similique,
            deserunt accusantium maxime, neque error. Unde eos molestias
            expedita accusantium saepe dignissimos?
          </p>
        </RevealFinal>
      </div>
      <div className="min-h-screen flex flex-col px-12 md:px-24 text-center">
        <Reveal>
          <h1 className="text-[7em] md:text-[10em] font-[Thunder-bold] text-white w-full">
            I can help you elevate
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-[7em] md:text-[10em] -translate-y-14 font-[Thunder-bold] text-white">
            and your work today!
          </p>
        </Reveal>

        <Reveal>
          <p className="text-white text-5xl font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            alias facere consequatur quasi ab, quo rerum voluptate similique,
            deserunt accusantium maxime, neque error. Unde eos molestias
            expedita accusantium saepe dignissimos?
          </p>
        </Reveal>
      </div>
    </>
  );
}

export default Third;
