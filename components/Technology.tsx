"use client";

import Link from "next/link";
import { Container } from "./Container";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { Button } from "./Button";

import snow from "@/images/icon/snow-svgrepo-com.svg";
import bakteri from "@/images/icon/antibakteri.png";
import air from "@/images/icon/antiair.png";

import Image from "next/image";

const technologys = [
  [
    "Hydrocool",
    snow,
    "Teknologi aditif yang memberikan sensasi dingin pada pengguna hijab",
  ],
  [
    "Antibacterial",
    bakteri,
    "Teknologi anti bakteri yang membuat material kain tidak mudah menghasilkan bau tidak sedap",
  ],
  [
    "Water-Repellant",
    air,
    "Memberikan lapisan hidrofobik pada permukaan kain sehingga tidak mudah terbasahi percikan air",
  ],
  [
    "Perfumed",
    snow,
    "Berikan kesan indah yang selalu melekat setiap pengguna mengenakan hijab Anda",
  ],
];
export default function Technology() {
  return (
    <div
      className="mt-24 rounded-4xl bg-[#eee7f6] py-2 shadow-md sm:mt-20 sm:py-20 lg:mt-20"
      style={{ boxShadow: "0px -4px 10px #dfd2eb, 0px 4px 10px #dfd2eb" }}
    >
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <div className="flex flex-col">
            <h2 className="item-center font-display text-3xl font-semibold tracking-wider text-black sm:text-left">
              Hijab+
            </h2>
            <h2 className="text-sm">Hijab Technology Innovation</h2>
          </div>
          <div className="h-px flex-auto bg-neutral-800" />
          <Link href="/contact">
            <Button invert>More information</Button>
          </Link>
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {technologys.map(([tech, logo]) => (
              <li key={tech}>
                <FadeIn className="flex items-center justify-center sm:justify-start">
                  <div className="flex items-center space-x-4">
                    <Image
                      width={40}
                      height={40}
                      src={logo}
                      alt={tech}
                      className="flex-shrink-0"
                    />
                    <h2 className="text-sm font-bold text-neutral-950">
                      {tech}
                    </h2>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}
