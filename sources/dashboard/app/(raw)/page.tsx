import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@nextui-org/button';

export default function Home() {
  return (
    <section className="flex flex-col items-center min-w-screen justify-center h-full">
      <div className="flex flex-row min-w-full text-center min-h-full px-10">
        <div className='w-3/5 h-full items-center justify-center flex'>
          <Image src="/logo2.png" alt='Avatar hakutaku' width={756} height={656} />
        </div>
        <div className='w-2/5 bg-[#E25F2B] h-full rounded-3xl flex flex-col items-center justify-center gap-y-40'>
          <div>
            <Image src="/logo.png" alt='Hakutaku' width={256} height={256} />
            <h1 className='font-bold text-3xl text-white'>BOAS VINDAS!</h1>
          </div>

          <div className='flex flex-col justify-center gap-y-3 w-full px-20'>
            <Link href="/Home">
              <Button className='bg-black text-center p-10  text-white flex justify-center text-xl items-center rounded-3xl w-full'>
                <p className=''>Sou</p>
                <Image className='pt-2' src="/star.png" alt='Stark Bank' width={126} height={126} />
              </Button>
            </Link>

            <Link href="/Chat">
              <Button className='bg-white text-center p-10 text-black flex text-xl justify-center items-center rounded-3xl w-full'>
                Sou Cliente
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
