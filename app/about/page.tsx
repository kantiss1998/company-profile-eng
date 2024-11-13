import { type Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { GridList, GridListItem } from "@/components/GridList";
import { PageIntro } from "@/components/PageIntro";
import { SectionIntro } from "@/components/SectionIntro";
import { StatList, StatListItem } from "@/components/StatList";
import { loadArticles } from "@/lib/mdx";

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-[#eee7f6] py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow="Visi Misi" title="Visi">
        <p>
          A company that is ready to prioritize excellent service to make local
          Indonesian hijabs valuable in Creativity, Innovation, Functionality,
          Aesthetics, and style with Global quality
        </p>
      </SectionIntro>
      <div className="mt-10"></div>
      <SectionIntro title="Misi"></SectionIntro>
      <Container className="mt-5">
        <GridList>
          <GridListItem title="Reading changes" invert>
            {" "}
            that occur and seizing existing opportunities.{" "}
          </GridListItem>
          <GridListItem title="Adapting" invert>
            {" "}
            by improving the management system towards a more professional
            direction.{" "}
          </GridListItem>
          <GridListItem title="Building" invert>
            {" "}
            Strength by continuously empowering human resources.{" "}
          </GridListItem>
          <GridListItem title="Serving" invert>
            {" "}
            The satisfaction of all consumers so that professional and
            harmonious relationships are established.{" "}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Leading manufacturer of high-quality fabrics for hijabs and headscarves.",
};
export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2);
  return (
    <>
      {" "}
      <PageIntro
        eyebrow="About Us"
        title="Leading manufacturer of high-quality fabrics"
      >
        {" "}
        <p>
          {" "}
          PT. Kanti Sehati Sukses, a leading manufacturer of high-quality
          fabrics for hijabs and headscarves. Established in 1998, our company
          has built a reputation for producing superior quality fabrics using
          the latest technology and the best materials.{" "}
        </p>{" "}
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem
            value="T"
            isi="aat (Obedient)"
            label="Always obedient and submissive to Allah SWT and the leaders"
          />
          <StatListItem
            value="A"
            isi="manah (Trustworthy)"
            label="Honest and trustworthy"
          />
          <StatListItem
            value="K"
            isi="erjasama (Cooperation)"
            label="Working together to achieve company targets"
          />
          <StatListItem
            value="W"
            isi="inning spirit"
            label="Always striving to advance by maximizing one's competencies"
          />
          <StatListItem
            value="A"
            isi="daptif (Adaptive)"
            label="Continuously innovate and adapt to change"
          />
        </StatList>
      </Container>
      <Culture />
      <ContactSection />
    </>
  );
}
