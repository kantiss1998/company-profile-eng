import { type Metadata } from "next";

import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import { GridPattern } from "@/components/GridPattern";
import { PageIntro } from "@/components/PageIntro";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import { TagList, TagListItem } from "@/components/TagList";
import imageLaptop from "@/images/laptop.jpg";
import imageMeeting from "@/images/meeting.jpg";
import imageWhiteboard from "@/images/whiteboard.jpg";

function Section({
  title,
  image,
  children,
}: {
  title: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>;
  children: React.ReactNode;
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

function DigitalPrinting() {
  return (
    <Section title="Digital Printing" image={{ src: "https://i.imgur.com/f864pyG.jpeg", width: 100, height: 100 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our digital printing service offers innovative solutions for printing custom design patterns on hijab fabrics. By utilizing digital printing technology, customers can create hijabs with unique and personal designs. This process allows for the reproduction of design details with{" "}
          <strong className="font-semibold text-neutral-950">accuracy</strong>,
          both in terms of color and pattern, resulting in highly precise prints.
        </p>
        <p>
          This technology enables the production of hijabs in{" "}
          <strong className="font-semibold text-neutral-950">flexible</strong>
          quantities, whether for individual needs or mass production. The main advantage of digital printing is its ability to print complex and detailed color variations that are difficult to achieve with conventional methods. The produced hijab designs have high color durability and do not fade easily.
        </p>
        <p>
          Additionally, the digital printing process on hijab fabrics is more{" "}
          <strong className="font-semibold text-neutral-950">
            environmentally friendly
          </strong>{" "}
          because it uses water-based inks that are safer for the environment. This makes the service increasingly popular among customers who care about the ecological impact of the products they use. The end result is hijabs that are not only beautiful and unique but also contribute to environmental sustainability.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Design consultation</TagListItem>
        <TagListItem>Color matching and calibration</TagListItem>
        <TagListItem>Fabric samples (swatches)</TagListItem>
        <TagListItem>Print proofs</TagListItem>
        <TagListItem>Design approval by customers</TagListItem>
        <TagListItem>Fabric suitability assessment</TagListItem>
        <TagListItem>Quality control inspection</TagListItem>
      </TagList>
    </Section>
  );
}


function FlatPrinting() {
  return (
    <Section title="Hijab Finishing" image={{ src: "https://i.imgur.com/sVCpKfN.jpeg", shape: 1, width: 100, height: 100 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our flat printing service emphasizes printing techniques that use specialized machines to print design patterns on hijab fabrics with faster production times. This process is highly efficient because it uses machines designed to print flat, allowing the motifs to be evenly printed across the entire fabric surface.
        </p>
        <p>
          Flat printing is very suitable for customers who need large-scale production with short lead times. Even though the process is fast, the print quality remains high. The motifs produced by flat printing have clear and sharp details, with long-lasting colors.
        </p>
        <p>
          This technology is also flexible in terms of using various types of fabrics, so customers can choose materials that suit their needs. The speed and quality produced make flat printing an ideal solution for producing hijabs with simpler designs but still high quality.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Design preparation for flat printing</TagListItem>
        <TagListItem>Printing machine setup</TagListItem>
        <TagListItem>Production speed adjustment</TagListItem>
        <TagListItem>Print quality testing</TagListItem>
        <TagListItem>Pre-production fabric samples</TagListItem>
        <TagListItem>Print result approval by customers</TagListItem>
        <TagListItem>Final visual inspection before mass production</TagListItem>
      </TagList>
    </Section>
  );
}


function YarnTwisting() {
  return (
    <Section title="Yarn Twisting" image={{ src: "https://i.imgur.com/EBd3U8B.jpeg[", shape: 2, width: 100, height: 100  }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our yarn twisting service creates hijabs with unique textures and attractive appearances through the process of twisting yarns. In this technique, two or more yarns are spun together, creating a torsion effect that gives the fabric a different look and feel. This technique not only produces hijabs with different textures but also enriches the range of achievable colors.
        </p>
        <p>
          Hijabs produced from the yarn twisting process have their own advantages in terms of aesthetics and functionality. The torsion effect on the fabric creates additional dimension, making the hijab feel more dynamic when worn. Additionally, the combination of different colored yarns provides beautiful, non-monotonous color gradients.
        </p>
        <p>
          The yarn twisting technique also allows for the creation of stronger and more durable hijabs, as the twisted yarns provide extra strength to the fabric. The resulting hijabs are not only fashionable but also comfortable and durable for everyday use.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Selection of yarn types</TagListItem>
        <TagListItem>Assessment of yarn strength</TagListItem>
        <TagListItem>Spinning machine setup</TagListItem>
        <TagListItem>Testing the torsion effect on yarn</TagListItem>
        <TagListItem>Sample fabrics from twisting</TagListItem>
        <TagListItem>Quality inspection of texture and color</TagListItem>
        <TagListItem>
          Assessment of color combinations on twisted yarn
        </TagListItem>
      </TagList>
    </Section>
  );
}


function Weaving() {
  return (
    <Section title="Weaving" image={{ src: "https://i.imgur.com/SB8cC0k.jpeg", width: 100, height: 100 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The weaving process is one of the oldest techniques in fabric manufacturing that we use to create high-quality hijab fabrics. By intertwining threads through this technique, we can create hijabs that are strong, comfortable, and durable. The weaving technique allows us to control the density and strength of the fabric, which can be adjusted according to customer preferences.
        </p>
        <p>
          The weaving technique enables the production of fabrics with complex and varied patterns, creating beautiful and attractive motifs on hijabs. This process also provides flexibility in the selection of base materials, whether natural fibers like cotton or synthetics like polyester, according to customer needs and preferences.
        </p>
        <p>
          Furthermore, hijabs produced from the weaving process have a distinctive texture, providing a soft yet strong sensation when worn. The hijab fabrics produced by this technique have an elegant appearance and long-lasting quality, making them an excellent choice for everyday use or special occasions.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Selection of yarn for weaving</TagListItem>
        <TagListItem>Determination of weaving patterns</TagListItem>
        <TagListItem>Adjustment of fabric thickness and density</TagListItem>
        <TagListItem>Initial pattern weaving test</TagListItem>
        <TagListItem>Sample woven fabrics</TagListItem>
        <TagListItem>Pattern approval by customers</TagListItem>
        <TagListItem>Testing fabric strength and elasticity</TagListItem>
      </TagList>
    </Section>
  );
}


function Knitting() {
  return (
    <Section title="Knitting" image={{ src: "https://i.imgur.com/MDDTlSM.jpeg", shape: 1, width: 100, height: 100 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The knitting process that we use in the production of hijab fabrics offers a more elastic texture and comfortable wear. In this technique, yarns are interlinked to create a flexible fabric that easily adjusts to shape. This knitting result provides a soft and lightweight feel when worn, making hijabs a comfortable choice for various weather conditions.
        </p>
        <p>
          In addition to comfort, knitting also offers flexibility in design. Hijabs produced through this knitting process often have more varied and richly textured patterns, making them a popular choice for those seeking something unique. This technique also allows the creation of hijabs with good stretchability without compromising on quality or beauty.
        </p>
        <p>
          Hijabs produced through knitting are generally more pliable, giving a casual yet elegant impression. This makes them a very suitable choice for everyday styles that require comfort and practicality, without sacrificing a stylish appearance.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Selection of yarn types for knitting</TagListItem>
        <TagListItem>Knitting machine setup</TagListItem>
        <TagListItem>Initial knitting pattern testing</TagListItem>
        <TagListItem>Sample knitted fabrics</TagListItem>
        <TagListItem>Approval of patterns and textures by customers</TagListItem>
        <TagListItem>Testing the flexibility and elasticity of the fabric</TagListItem>
        <TagListItem>Final quality inspection of the knitted fabric</TagListItem>
      </TagList>
    </Section>
  );
}


function DyeingFinishing() {
  return (
    <Section title="Dyeing & Finishing" image={{ src: "https://i.imgur.com/gkffBNf.jpeg", shape: 2, width: 100, height: 100 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our dyeing & finishing service offers detailed dyeing and finishing processes to produce hijabs with bright and long-lasting colors. In the dyeing process, the fabric is dipped in the chosen color, allowing customers to select the color they desire. This process ensures that the color thoroughly penetrates the fabric fibers, resulting in rich, fade-resistant colors.
        </p>
        <p>
          After the dyeing process is complete, we proceed to the finishing stage to provide a final touch that ensures the hijab looks perfect. The finishing process includes various techniques to enhance the fabric quality, such as smoothing the surface, increasing the fabric's strength, and providing a glossy or matte effect according to the customer's preference.
        </p>
        <p>
          The end result of the dyeing & finishing process is hijabs with more vibrant colors, longer-lasting quality, and a more elegant appearance. This process ensures that every hijab produced meets high-quality standards and is ready to be comfortably used for various occasions.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Selection of dye colors</TagListItem>
        <TagListItem>Testing fabric's dye absorption</TagListItem>
        <TagListItem>Color fastness testing</TagListItem>
        <TagListItem>Sample dyed fabrics</TagListItem>
        <TagListItem>Final color approval by customers</TagListItem>
        <TagListItem>Application of finishing techniques (smooth, glossy, matte)</TagListItem>
        <TagListItem>Final quality inspection (color, strength, texture)</TagListItem>
      </TagList>
    </Section>
  );
}


function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Combining Reliability and Creativity"
      >
        <p>
          We always strive to combine reliability with innovation while staying true to proven printing technology and techniques. Although we are familiar with the latest technology, we still believe in processes that have delivered satisfying results for years.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            Every detail in the production process, from fabric to color, is carefully examined to ensure the best quality.
          </GridListItem>
          <GridListItem title="Efficient">
            Our production process is fast, without compromising results. Speed and accuracy are priorities.
          </GridListItem>
          <GridListItem title="Adaptive">
            We are flexible in adjusting each design according to customer needs, without reducing efficiency.
          </GridListItem>
          <GridListItem title="Honest">
            Transparency in every step of the production process is our key, even though customers often do not want to bother reading the details.
          </GridListItem>
          <GridListItem title="Loyal">
            We build long-term relationships with clients, continuously innovating and meeting their needs.
          </GridListItem>
          <GridListItem title="Innovative">
            We always look for new ways to produce unique hijabs, without forgetting tradition and quality.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}


export const metadata: Metadata = {
  title: "Our Process",
  description:
    "We believe in efficiency and maximizing our resources to provide the best value to our clients.",
};

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Production Service" title="The Services We Provide">
        <p>
          We believe in efficiency and maximizing our resources to
          provide the best value to our clients. Our primary way of doing so
          is by optimizing the machines we use.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <DigitalPrinting />
        <FlatPrinting />
        <YarnTwisting />
        <Weaving />
        <Knitting />
        <DyeingFinishing />
      </div>

      <Values />

      <ContactSection />
    </>
  );
}

