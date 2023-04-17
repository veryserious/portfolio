import Image from "next/image";
import { Inter } from "next/font/google";
import Block from "@/components/Block";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24">
      <div className="w-full m:w-600px bg-white min-h-screen">
        <Block classes="min-h-14">
          <h1>Very Serious</h1>
          <h2>X Projects</h2>
        </Block>
        <div className="relative h-200px w-full" style={{ aspectRatio: "6/2" }}>
          <Image
            src="/images/hero.jpeg"
            alt="hero image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Hero */}
        <Block classes="relative h-16">
          {/* Profile Image - Make Responsive */}
          <div
            className={
              "absolute -top-12 h-24 w-24 border-white border-2 border-solid rounded-full overflow-hidden"
            }
          >
            <Image
              src="/images/hero.jpeg"
              alt="hero image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </Block>
        <Block>
          <h3>Very Serious</h3>
          <h4>@JamieTheBreen</h4>
          <h5>staying inside until 2022</h5>
        </Block>
        <Block classes="py-2 ml-2">
          <div className="flex flex-row gap-4">
            <span>Melbourne, Victoria</span>
            <span>Github.com</span>
          </div>
          <div className="flex flex-row gap-4">
            <span>Born April 11, 1984</span>
            <span>Joined June 2010</span>
          </div>
        </Block>
      </div>
    </main>
  );
}
