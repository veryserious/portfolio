import Image from "next/image";
import { Inter } from "next/font/google";
import Block from "@/components/Block";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-full md:w-[600px] bg-white min-h-screen">
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
              "absolute -top-8 h-16 w-16 md:scale-150 md:ml-2 border-white border-2 border-solid rounded-full overflow-hidden"
            }
            style={{
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Image
              src="/images/hero.jpeg"
              alt="hero image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Button */}
          <div className="flex justify-end py-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Follow
            </button>
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
        {/* Tabs */}
        <div>
          <div className="flex flex-row">
            <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
              Tweets
            </button>
            <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
              Replies
            </button>
            <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
              Media
            </button>
            <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
              Likes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
