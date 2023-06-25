export default function Factbox({ leader, fact, closer }) {
  return (
    <div className="text-center self-center">
      <p className="self-end">{leader}</p>
      <p className="text-4xl font-semibold my-2">{fact}</p>
      <p className="self-start">{closer}</p>
    </div>
  );
}
