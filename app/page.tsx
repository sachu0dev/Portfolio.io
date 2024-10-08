import CVButton from "@/components/CVButton";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";
import RetroGrid from "@/components/magicui/retro-grid";
import Meteors from "@/components/magicui/meteors";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh_-_140px)] bg-background relative">
      {/* <Meteors number={30} /> */}
      <RetroGrid className="h-full"/>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-primary">FullStack Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent hover:text-accent-hover">
                Sushil Kumar
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-text/80">
              Building dynamic web solutions with full-stack precision, turning
              visions into reality.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
           <CVButton/>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}



