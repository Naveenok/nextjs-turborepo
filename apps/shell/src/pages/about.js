import Link from "next/link";

export default function About() {
  console.log("inside about page")
  return (
    <>
      <div>
        <Link href="/">
          <a>Back</a>
        </Link>
      </div>
      <>Inside Home</>
    </>
  );
}
