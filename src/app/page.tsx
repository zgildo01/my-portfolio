import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image src="/me.jpg" 
        alt="A picture of Zeus, a software and DevOps engineer" 
        width={200} 
        height={200}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-center">Welcome to my portfolio!</h1>
      <p className="text-center">I&#39;m Zeus, a software and DevOps engineer.</p>
    </div>
  );
}
