import { type Metadata } from "next";

import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { List, ListItem } from "@/components/List";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import Clients from "../components/Client";
import imageLaptop from "@/images/Team-Produksi.png";
import Technology from "@/components/Technology";
import { Button } from "@/components/Button";
import Link from "next/link";

function CaseStudies() {
  return (
    <>
      <SectionIntro
        title="Creating New Leading Products"
        className="mt-20 sm:mt-20 lg:mt-20"
      >
        <p>
          Technological advancements make clothing products easy to duplicate.
          Kantiss believes that technological advancements can also be an
          opportunity to continue innovating and creating leading products.
          Some of the products created by Kantiss that have become market
          leaders include{" "}
          <b className="text-[#b72525]">Saudia, Ultra Voal, Bella, and Shinar.</b>
        </p>
      </SectionIntro>
    </>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Production Service"
        title="Kantiss offers production service. Our enthusiasm is to make all your plans come true!"
        invert
        className="mt-20"
      >
        <p>
          Textile products have a very diverse range and Kantiss realizes this.
          Therefore, we are open if you have preferences in procuring materials.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Digital Printing">
              A service for printing patterns or custom designs that can be
              customized on fabric surfaces. This technology allows you to get
              fabric/hijabs with designs according to your taste with a low
              minimum quantity.
            </ListItem>
            <ListItem title="Hijab Finishing">
              A service for processing fabric into hijabs with various finishing
              options. These include edge stitching, ultrasonic, neci, picot,
              eyelash, and various laser-cut variations.
            </ListItem>
            <ListItem title="Garment">
              A service for processing fabric into ready-to-wear products such
              as bergo, daily mukena, travel mukena, prayer mats, sarongs, and
              other garments.
            </ListItem>
          </List>
        </div>
        <Link href="/process">
          <div className="flex justify-end">
            <Button invert>See more</Button>
          </div>
        </Link>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  description:
    "We are a development studio working at the intersection of design and technology.",
};

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            PT Kantiss
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            PT Kanti Sehati Sukses, established in 1998, is a leading textile
            manufacturer for fabrics, hijabs, and other Muslim clothing. 
            Specializing in hijab manufacturing, Kantiss has become{" "}
            <b className="text-[#b72525]">One Stop Hijab Manufacturing</b> and
            focuses on producing superior quality products, the best materials,
            and the latest technology at affordable prices.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies />

      <Technology />

      <Services />

      <ContactSection />
    </>
  );
}
