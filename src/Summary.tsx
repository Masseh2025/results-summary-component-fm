import ResultItem from "./ResultItem";

type StyleProp = {
  styles: string;
};

import memory from "./assets/images/icon-memory.svg";
import reaction from "./assets/images/icon-reaction.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";
import ContinueButton from "./ContinueButton";

export default function Summary({ styles }: StyleProp) {
  return (
    <article className={styles}>
      <h2 className="mb-4 font-bold text-2xl">Summary</h2>
      <ul className="">
        <ResultItem
          resultName="Reaction"
          image={reaction}
          color="primary-light-red"
          score={80}
        />
        <ResultItem
          resultName="Memory"
          image={memory}
          color="primary-Orangey-yellow"
          score={92}
        />
        <ResultItem
          resultName="Verbal"
          image={verbal}
          color="primary-Green-teal"
          score={61}
        />
        <ResultItem
          resultName="Visual"
          image={visual}
          color="primary-Cobalt-blue"
          score={73}
        />
      </ul>
      <ContinueButton />
    </article>
  );
}
