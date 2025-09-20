function Tagline() {
  return <p>React components are reusable.</p>;
}

export default function Page() {
  return (
    <div>
      <h2>Same Component, Many Times</h2>
      <Tagline />
      <Tagline />
      <Tagline />
    </div>
  );
}
