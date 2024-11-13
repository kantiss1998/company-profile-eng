import { type Metadata } from 'next'
import Image from 'next/image'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'

const galleryImages = [
  { src: "https://i.imgur.com/rMXJE8R.jpeg", alt: 'Cutting Roll', span: 'col-span-2 row-span-2' },
  { src: "https://i.imgur.com/YMAMWWx.jpeg", alt: 'Cutting Roll 2' },
  { src: "https://i.imgur.com/BooGGO5.jpeg", alt: 'Inspect Macchine' },
  { src: "https://i.imgur.com/sVCpKfN.jpeg", alt: 'Inspect Macchine 2' },
  { src: "https://i.imgur.com/mRgnKH1.jpeg", alt: 'Lasercut Macchine' },
  { src: "https://i.imgur.com/XK3ITeI.jpeg", alt: 'Lasercut Macchine 2' },
  { src: "https://i.imgur.com/SB8cC0k.jpeg", alt: 'Press Macchine' },
  { src: "https://i.imgur.com/EBd3U8B.jpeg", alt: 'Press Macchine 2' },
  { src: "https://i.imgur.com/kEtGWqB.jpeg", alt: 'Print Macchine' },
  { src: "https://i.imgur.com/y0j4NCZ.jpeg", alt: 'Print Macchine 2' },
  { src: "https://i.imgur.com/f864pyG.jpeg", alt: 'Print Macchine 3' },
  { src: "https://i.imgur.com/3qucI7u.jpeg", alt: 'Finishing', span: 'col-span-2 row-span-2' },
  { src: "https://i.imgur.com/ktA8Zda.jpeg", alt: 'Finishing 2' },
  { src: "https://i.imgur.com/ZvpMQcy.jpeg", alt: 'Warehouse' },
]

function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {galleryImages.map((img, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1 transform transition duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl ${img.span || ''}`}
        >
          {/* Wrapper untuk aspect ratio */}
          <div className="relative w-full pt-[100%]">
            <Image
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:scale-105 "
              width={800}
              height={800}
              priority={index < 4}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'We proudly present various innovations and leading technologies that we offer.',
}

export default function Gallery() {
  return (
    <>
      <PageIntro eyebrow="Gallery" title="Technology and Reliability">
        <p>
          We proudly present various innovations and leading technologies that we offer. Each machine we showcase is the result of in-depth research and continuous development, designed to meet industry needs and provide efficient solutions for our customers.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <GalleryGrid />
      </Container>

      <ContactSection />
    </>
  )
}
