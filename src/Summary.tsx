import ResultItem from "./ResultItem";
import data from "./data.json";

type StyleProp = {
  styles: string;
};

import memory from "./assets/images/icon-memory.svg";
import reaction from "./assets/images/icon-reaction.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";

export default function Summary({ styles }: StyleProp) {
  return (
    <article className={styles}>
      <h2>Summary</h2>
      <ul>
        <ResultItem
          resultName="Reaction"
          image={reaction}
          color="primary-light-red"
          score={80}
        />
      </ul>
    </article>
  );
}
