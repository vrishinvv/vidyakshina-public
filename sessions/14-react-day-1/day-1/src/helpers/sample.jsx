export default function Page() {
  const name = "Asha";
  const n = 2, m = 3;

  const iCanStoreHTMLinVariables = <p>Vidyakshina - entering react :0</p>

  return (
    <div className="wrap">
      <h2 className="title">JSX demo</h2>
      <p>Hi, {name}! {n} + {m} = {n + m}</p>
      <p>{m > n ? "m is greater" : "n is greater or equal"}</p>
      <style jsx>{`
        .wrap { font-family: system-ui, sans-serif; max-width: 720px; margin: 24px auto; }
        .title { margin: 0 0 8px; }
      `}</style>
      {iCanStoreHTMLinVariables}
    </div>
  );
}
