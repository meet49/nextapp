import Image from "next/image";
import Banner from "./componets/Banner";
import Whoweare from "./componets/Whoweare";
import Smartturbine from "./componets/Smartturbine";
import Working from "./componets/Working";
import Blog from "./componets/Blog";
import Client from "./componets/Client";

export default function Home() {
  return (
    <main >
     <Banner/>
     <Whoweare/>
     <Smartturbine/>
     <Working/>
     <Client/>
     <Blog/>
    </main>
  );
}
