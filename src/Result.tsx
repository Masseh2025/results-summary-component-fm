type StyleProp = {
  styles: string;
};

export default function Result({ styles }: StyleProp) {
  return <article className={styles}>Hello</article>;
}
