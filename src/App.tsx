import Result from "./Result";
import Summary from "./Summary";

const articleStyles = "w-1/2";

export default function App() {
  return (
    <main className="h-screen bg-neutral-Pale-blue flex justify-center items-center">
      <div className="bg-neutral-White w-full max-w-[736px] flex p-3">
        <Result styles={articleStyles} />
        <Summary styles={articleStyles} />
      </div>
    </main>
  );
}
