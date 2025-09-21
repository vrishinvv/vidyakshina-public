import Greeting from '@/components/Greeting/Greeting';

// inputs to components are called "props" -> "properties", think of it like passing parameters to functions
// remeber component is like a function, if function can accept params, components can accept props
export default function Page() {
  return (
    <div>
      <h2>Props let us reuse components</h2>
      <Greeting name="Asha" />
      <Greeting name="Rahul" />
      <Greeting name="Meera" />
    </div>
  );
}
