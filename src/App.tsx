import Result from "./Result";
import Summary from "./Summary";

const articleStyles = "w-1/2 text-lg p-11 max-[800px]:w-full";

export default function App() {
  return (
    <main className="h-screen bg-neutral-Pale-blue flex justify-center items-center">
      <div className="bg-neutral-White w-full max-w-[736px] flex rounded-[32px] overflow-hidden shadow-xl max-[800px]:flex-col max-[800px]:h-screen max-[800px]:overflow-scroll max-[800px]:rounded-none">
        <Result styles={articleStyles} />
        <Summary styles={articleStyles} />
      </div>
    </main>
  );
}
