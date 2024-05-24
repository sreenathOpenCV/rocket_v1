import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed flex justify-around top-0 left-0 right-0 px-4 py-4 z-10 w-full bg-black text-white">
      <nav className="flex justify-between items-center max-container w-1600">
        <a href='/'>
          <img
            src={"logo.png"}
            alt='logo'
            className='w-[210px] h-auto pl-6'
          />
        </a>
        <ul className='flex justify-center items-center font-bold gap-16 max-lg:hidden pr-10'>
       {/* <Link href="/Profile"><li><Image width={45} height={45} className="rounded-full" src={"/profile.png"} alt="student"/></li></Link>    */}
        </ul>
      </nav>
    </header>
  )
}

export default Header;
