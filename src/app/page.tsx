import Image from 'next/image';

export default function Home() {
  return (
    <div className="
      w-full
      min-h-[70vh]
      flex
      flex-col
      md:flex-row-reverse
      md:justify-between
      md:items-center
      md:gap-10
    ">
      <div className="
        md:flex-1 
        md:flex 
        md:justify-end
      ">
        <Image 
          src="/me.jpg" 
          alt="A picture of Zeus, a software and DevOps engineer" 
          width={200} 
          height={200}
          className="rounded-full 
          mx-auto 
          mb-4"
        />
      </div>
      <div>
        <h1 className="
          text-3xl 
          font-bold 
          text-center 
          mb-4 
          md:text-left
        ">Hello, I&apos;m Zeus
        </h1>
        <p className="
          text-center 
          text-lg 
          md:text-left
        ">
          I&apos;m a software and DevOps engineer with a passion for building scalable and efficient systems.
        </p>
        <p className="
          text-center 
          text-lg 
          md:text-left
        ">
          I&apos;ve had the pleasure of working on various projects, from internal tools used by large teams to client facing websites and architectures that serve millions of clients.
        </p>
      </div>
    </div>
  );
}
