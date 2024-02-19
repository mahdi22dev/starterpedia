import Image from "next/image";
import Link from "next/link";

export function Footer(): JSX.Element {
  return (
    <div className="bg-primary/80 text-white ">
      <div className="flex gap-10 items-center p-3">
        <div>
          <h1 className="text-4xl">Starterpedia</h1>
          <p>welcome to starterpedia</p>
        </div>
        <ul className="md:flex ">
          <li className="ml-4">
            <Link href="/">Home</Link>
          </li>
          <li className="ml-4">
            <Link href="/resources">Resources</Link>
          </li>
          <li className="ml-4">
            <Link href="/privacy">Privacy terms</Link>
          </li>
        </ul>
      </div>
      <div className="w-full bg-primary flex justify-center items-center p-2">
        &copy; 2024 Starterpedia.com
      </div>
    </div>
  );
}
