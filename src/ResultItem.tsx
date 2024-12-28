type ReactionProp = {
  resultName: string;
  score: number;
  color: string;
  image: string;
};

export default function ReactionItem({
  resultName,
  score,
  color,
  image,
}: ReactionProp) {
  return (
    <li
      className={`bg-${color} bg-opacity-10 p-4 rounded-xl flex justify-between mb-4`}
    >
      <div className="flex">
        <img src={image} alt="" />
        <p className={`text-${color} ml-2`}>{resultName}</p>
      </div>
      <p className="text-neutral-Dark-gray-blue font-bold">
        {score}{" "}
        <span className="text-neutral-Dark-gray-blue text-opacity-50">
          / 100
        </span>
      </p>
    </li>
  );
}
