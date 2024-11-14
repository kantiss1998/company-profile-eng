import { type Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import polos from "@/data/polos.json";
import motif from "@/data/motif.json";
import phasmina from "@/data/phasmina.json";
import prayer from "@/data/prayerset.json";
import apparel from "@/data/apparell.json";
import Product4Row from "@/components/Product4Row";

function ProductShowcase() {
  return (
    <>
      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row
          products={polos}
          title="Plain Hijab"
          slug="polos"
        ></Product4Row>
      </Container>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row
          products={motif}
          title="Digital Print Patterned Hijab"
          slug="motif"
        ></Product4Row>
      </Container>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row
          products={phasmina}
          title="Pashmina & Bergo"
          slug="pashminaBergo"
        ></Product4Row>
      </Container>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row
          products={prayer}
          title="Prayer Set"
          slug="prayerset"
        ></Product4Row>
      </Container>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row
          products={apparel}
          title="Apparel"
          slug="apparel"
        ></Product4Row>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "A collection of high-quality fabrics for hijabs and scarves from PT. Kanti Sehati Sukses.",
};

export default function Work() {
  return (
    <>
      <PageIntro
        eyebrow="Our Products"
        title="Happiness can't be bought, but you can buy Fabric."
      >
        <p>
          Kantiss offers a variety of high-quality products at affordable
          prices. Some of the products we offer include fabrics, hijabs, and
          other garments.
        </p>
      </PageIntro>

      <ProductShowcase />

      <ContactSection />
    </>
  );
}
