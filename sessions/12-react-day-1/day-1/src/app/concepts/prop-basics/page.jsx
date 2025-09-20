import Greeting from '@/components/Greeting/Greeting';

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
