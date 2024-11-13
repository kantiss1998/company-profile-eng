// `GalleryData` diambil dari komponen server
import Image from 'next/image';
import { ContactSection } from '@/components/ContactSection';
import { Container } from '@/components/Container';
import { PageIntro } from '@/components/PageIntro';
import GalleryGrid from '@/components/GaleryGrid';

// Data gallery yang diambil dari server
export const fetchGalleryData = async () => {
  return [
    { 
      src: "https://i.imgur.com/rMXJE8R.jpeg", 
      alt: 'Cutting Roll', 
      description: "The Cutting Roll machine is designed for precision cutting in manufacturing processes, particularly in the paper and film industries. Utilizing advanced rolling mechanisms, this machine ensures clean, accurate cuts with minimal waste, enhancing production efficiency and material conservation.", 
      span: 'col-span-2 row-span-2'  
    },
    { 
      src: "https://i.imgur.com/YMAMWWx.jpeg", 
      alt: 'Cutting Roll 2', 
      description: "This advanced version of the Cutting Roll machine incorporates automated controls for higher precision and faster processing. Ideal for large-scale production, the machine is optimized to handle various materials, from thin films to thicker papers, delivering consistent quality with each cut." 
    },
    { 
      src: "https://i.imgur.com/BooGGO5.jpeg", 
      alt: 'Inspect Machine', 
      description: "The Inspect Machine is designed to detect and assess defects in materials during production, ensuring that only high-quality products reach the end of the line. Equipped with high-resolution sensors and real-time analysis, it allows manufacturers to maintain strict quality control and reduce production errors effectively." 
    },
    { 
      src: "https://i.imgur.com/sVCpKfN.jpeg", 
      alt: 'Inspect Machine 2', 
      description: "A state-of-the-art Inspect Machine equipped with enhanced imaging technology to detect even the smallest imperfections. It provides continuous monitoring and high-speed inspection capabilities, making it a critical component for quality assurance in modern manufacturing." 
    },
    { 
      src: "https://i.imgur.com/mRgnKH1.jpeg", 
      alt: 'Laser Cutting Machine', 
      description: "The Laser Cutting Machine utilizes high-powered lasers to cut through a variety of materials with extreme precision and minimal material waste. This machine is ideal for industries that require intricate designs and patterns, such as automotive, aerospace, and electronics manufacturing." 
    },
    { 
      src: "https://i.imgur.com/XK3ITeI.jpeg", 
      alt: 'Laser Cutting Machine 2', 
      description: "An upgraded Laser Cutting Machine, featuring enhanced speed and accuracy for large-scale industrial applications. This machine's high-efficiency lasers provide smooth cuts on complex designs, making it suitable for both prototype development and mass production." 
    },
    { 
      src: "https://i.imgur.com/SB8cC0k.jpeg", 
      alt: 'Press Machine', 
      description: "The Press Machine is designed for heavy-duty stamping and pressing applications, widely used in metal fabrication industries. It combines robust engineering with precision control, allowing it to shape and form metals into various parts for automotive, construction, and machinery manufacturing." 
    },
    { 
      src: "https://i.imgur.com/EBd3U8B.jpeg", 
      alt: 'Press Machine 2', 
      description: "An industrial-grade Press Machine with enhanced force application capabilities, optimized for creating durable metal components. With a focus on energy efficiency, it ensures powerful pressing actions while minimizing operational costs and environmental impact." 
    },
    { 
      src: "https://i.imgur.com/kEtGWqB.jpeg", 
      alt: 'Printing Machine', 
      description: "The Printing Machine offers high-resolution, large-scale printing solutions, tailored for packaging and labeling industries. With customizable settings, it can print on various substrates, including paper, plastic, and fabric, providing vibrant colors and detailed images for commercial products." 
    },
    { 
      src: "https://i.imgur.com/y0j4NCZ.jpeg", 
      alt: 'Printing Machine 2', 
      description: "An advanced Printing Machine optimized for faster print speeds without compromising on quality. Its precise color calibration and adaptable ink systems make it ideal for both small and large batch productions in the packaging and graphic arts industries." 
    },
    { 
      src: "https://i.imgur.com/f864pyG.jpeg", 
      alt: 'Printing Machine 3', 
      description: "This high-capacity Printing Machine is designed for continuous operation in industrial settings. Its automated ink management and drying systems ensure a seamless printing process, suitable for large-scale production of labels, posters, and other printed materials." 
    },
    { 
      src: "https://i.imgur.com/3qucI7u.jpeg", 
      alt: 'Finishing Machine', 
      description: "The Finishing Machine is crucial for the final stages of production, providing processes like laminating, coating, and binding. It enhances the durability and aesthetics of the product, ensuring that items meet industry standards before distribution." ,
      span: 'col-span-2 row-span-2' 
    },
    { 
      src: "https://i.imgur.com/ktA8Zda.jpeg", 
      alt: 'Finishing Machine 2', 
      description: "An advanced Finishing Machine that offers multiple finishing options including embossing, foil stamping, and UV coating. With its versatility, it can be used across a wide range of products, ensuring a polished, high-quality result." 
    },
    { 
      src: "https://i.imgur.com/ZvpMQcy.jpeg", 
      alt: 'Warehouse', 
      description: "Our fully optimized Warehouse facility is designed to efficiently store and manage raw materials, in-process items, and finished goods. With a robust inventory management system and dedicated sections for each product type, it ensures smooth logistical operations and timely deliveries." 
    },
  ];
};

// Menandai komponen sebagai server
export const metadata = {
  title: 'Gallery',
  description: 'We proudly present various innovations and leading technologies that we offer.',
};

// Komponen utama server
export default async function Gallery() {
  const galleryImages = await fetchGalleryData(); // Mengambil data dari server

  return (
    <>
      <PageIntro eyebrow="Gallery" title="Technology and Reliability">
        <p>
          We proudly present various innovations and leading technologies that we offer. Each machine we showcase is the result of in-depth research and continuous development, designed to meet industry needs and provide efficient solutions for our customers.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <GalleryGrid images={galleryImages} /> {/* Render komponen klien */}
      </Container>

      <ContactSection />
    </>
  );
}
