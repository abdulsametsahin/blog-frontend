import Link from "next/link";
import "../assets/styles/app.css";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a href="#">About</a>
      </Link>
    </div>
  );
}
