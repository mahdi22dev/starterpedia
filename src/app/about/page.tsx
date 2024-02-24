import Image from "next/image";

export default function About(): JSX.Element {
  return (
    <main className="w-full space-y-5 min-h-[100vh] p-5 max-w-7xl mx-auto">
      <Image
        className="mx-auto"
        src={"/logo3.png"}
        width={150}
        height={150}
        alt="logo image"
      />

      <p className="mx-auto mt-[5%]">
        Starterpedia is a community-driven platform dedicated to sharing
        valuable resources and links across various fields, catering to
        freelancers, programmers, and enthusiasts alike. Whether you&apos;re a
        seasoned professional or just starting out, Starterpedia provides a
        diverse array of curated content to help you excel in your endeavors.
        From programming tutorials and development tools to freelancing tips and
        industry insights, our platform serves as a hub for knowledge-sharing
        and collaboration. Join us in building a vibrant community where
        individuals can discover, contribute, and grow together.
      </p>
    </main>
  );
}
