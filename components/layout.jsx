import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>This is layout</h1>
      <div style={{ marginBottom: "30px" }}>
        <Link style={{ marginRight: "20px" }} href={"/films"}>
          Animals
        </Link>

        <Link href={"/people"}>People</Link>
      </div>
      {children}
    </div>
  );
}
