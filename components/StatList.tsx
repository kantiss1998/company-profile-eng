import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function StatList({
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'> & {
  children: React.ReactNode
}) {
  return (
    <FadeInStagger {...props}>
      <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
        {children}
      </dl>
    </FadeInStagger>
  )
}

export function StatListItem({
  label,
  value,
  isi,
}: {
  label: string
  value: string
  isi: string
}) {
  return (
    <Border as={FadeIn} position="left" className="flex flex-col pl-8">
      <dd className="font-display text-4xl font-semibold text-neutral-950 sm:text-4xl">
        {value}<span className='text-xl'>{isi}</span>
      </dd>
      <dt className="mt-2 text-base text-neutral-600">{label}</dt>
    </Border>
  )
}
