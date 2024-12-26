type StyleProp = {
  styles: string;
};

export default function Summary({ styles }: StyleProp) {
  return <article className={styles}>Hello</article>;
}
