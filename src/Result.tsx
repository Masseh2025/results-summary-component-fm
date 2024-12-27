type StyleProp = {
  styles: string;
};

export default function Result({ styles }: StyleProp) {
  return (
    <article
      className={`${styles} text-center bg-gradient-to-b from-Light-slate-blue  to-Light-royal-blue text-neutral-White`}
    >
      <h2 className="text-2xl font-bold mb-8 text-neutral-White text-opacity-70">
        Your Result
      </h2>
      <div className="font-bold  rounded-full aspect-square w-[200px] flex items-center justify-center flex-col mx-auto bg-gradient-to-b from-Violet-blue to-Persian-blue">
        <p className="flex flex-col">
          <span className="text-7xl font-extrabold">76</span>
          <span className="text-neutral-White text-opacity-70">of 100</span>
        </p>
      </div>
      <h3 className="text-2xl  mt-7 mb-3.5 font-bold">Great</h3>
      <p className="font-medium text-neutral-White opacity-70">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </article>
  );
}
