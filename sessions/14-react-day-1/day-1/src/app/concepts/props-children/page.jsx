import Card from '@/components/Card/Card';

//what if you fill data below a custom component
export default function Page() {
  return (
    <div>
      <h2>props.children for composition</h2>
      <Card title="About">
        <p>This content is passed from the parent into the Card.</p>
      </Card>
      <Card title="Tip">
        <ul>
          <li>Compose UIs by nesting components.</li>
          <li><code>children</code> is whatever you put between the tags.</li>
        </ul>
      </Card>
    </div>
  );
}
