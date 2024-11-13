import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { Metadata } from "next";
import Image from "next/image";

import polos from "@/data/polos.json";
import motif from "@/data/motif.json";
import pashminaBergo from "@/data/phasmina.json";
import prayerset from "@/data/prayerset.json";
import apparel from "@/data/apparell.json";
import ProductCard from "./ProductCard";

interface WorkPageProps {
  params: { slug: string };
}

const categoryDescriptions: Record<string, string> = {
  polos:
    "Good news for those of you who want to create your own hijab brand! Kantiss offers plain hijabs with customizable finishing according to your preferences. These hijabs can also be combined with accessories such as metal logos, single plastic pieces, pouches, boxes, and other packaging that will be provided by Kantiss.",
  motif:
    "At PT. Kanti Sehati Sukses, we take pride in our collection of patterned fabrics that combine art and innovation. Each pattern is designed to reflect the beauty of culture and modern trends, making each product a unique style statement.",
  pashminaBergo:
    "Our Pashmina and Bergo are specially designed to provide softness and luxury in every strand of fabric. At PT. Kanti Sehati Sukses, we ensure that each pashmina is not only beautiful but also comfortable to wear for various occasions.",
  prayerset:
    "Our prayer set is designed with meticulous attention to provide maximum comfort during worship. At PT. Kanti Sehati Sukses, we ensure each prayer set is made from the best materials, offering peace in worship and luxury in design.",
  apparel:
    "Our apparel collection is designed to meet everyday fashion needs. At PT. Kanti Sehati Sukses, we prioritize comfort and style, ensuring each of our products can be paired with various styles, from casual to formal.",
};

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `${title} - PT KANTI SEHATI SUKSES`,
    description: `Our ${params.slug} Collections`,
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const description =
    categoryDescriptions[params.slug] ||
    " ";
  let title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  if (title === "Polos") {
    title = "Plain Hijabs"
  } else if (title === "Motif") {
    title = "Digital Print Patterned Hijab"
  } else if (title === "pashminaBergo") {
    title = "Pashmina & Bergo"
  } 

  const productData: Record<string, any[]> = {
    polos: polos,
    motif: motif,
    pashminaBergo: pashminaBergo,
    prayerset: prayerset,
    apparel: apparel,
  };
  const products = productData[params.slug] || [];

  return (
    <>
      <PageIntro eyebrow="Produk" title={title}>
        <p>{description}</p>
      </PageIntro>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}
