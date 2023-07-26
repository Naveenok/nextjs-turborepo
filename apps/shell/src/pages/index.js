import dynamic from "next/dynamic";
import Link from "next/link";

const MFE2 = dynamic(() => import(`mfe1/mfe1UI`), {
  loading: () => <p>Loading component...</p>,
  ssr: false,
});
console.log("inside MFE1")

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
      }}
    >
      FOOTER
    </div>
  );
};

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <NavBar />
      <MFE2 />
      <Footer />
    </div>
  );
}
