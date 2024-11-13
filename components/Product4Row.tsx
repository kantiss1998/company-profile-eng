import Image from 'next/image'
import Link from 'next/link'

import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import { Button } from './Button'

interface ProductListProps {
    products: any[]
    title: string
    slug: string
}

export default function Product4Row({ products, title, slug }: ProductListProps) {
  return (
    <>
      <FadeIn className='flex justify-between'>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          {title}
        </h2>
        <Link href={`/work/${slug}`}>
          <Button invert>See More</Button>
        </Link>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {products.slice(0, 4).map((product, index) => (
            <li key={product.name} className="group relative">
              <FadeIn className="overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    width={500}
                    height={500}
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.material}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </>
  )
}