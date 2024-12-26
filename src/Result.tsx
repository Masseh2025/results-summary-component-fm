type StyleProp = {
  styles: string;
};

export default function Result({ styles }: StyleProp) {
  return (
    <article className={`${styles} text-center`}>
      <h2 className="text-2xl font-bold mb-8">Your Result</h2>
      <div className="font-bold bg-primary-light-red rounded-full aspect-square w-[200px] flex items-center justify-center flex-col mx-auto">
        <p>
          <span className="text-7xl font-extrabold">76</span>
          <div>of 100</div>
        </p>
      </div>
      <h3 className="text-2xl  mt-7 mb-3.5 font-bold">Great</h3>
      <p className="font-medium">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </article>
  );
}
