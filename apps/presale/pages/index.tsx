import Link from 'next/link';
import { Button } from 'ui';

export default function Web() {
  return (
    <div>
      <h1>tryluck</h1>
      <Link href="/">Enlace 1</Link>
      <Link href="hello1">Enlace 2</Link>
      <br />
      <Button />
    </div>
  );
}
