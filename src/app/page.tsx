import Image from "next/image";
import Nav from "./_components/Nav";
import Landing from "./_components/Landing";
import About from "./_components/About";
import Feedbacks from "./_components/Feedbacks";

export default function Home() {
  return (
    <div className="bg-white ">
      <div className="w-full bg-[#feeb34]  h-[52px]" ></div>
      <Nav/>
      <Landing/>
      <About/>
      <Feedbacks/>
    </div>
  );
}
