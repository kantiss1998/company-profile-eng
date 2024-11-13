import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-950' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-neutral-950' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        Jl. Belakang Factory Kav F6 No.23
          <br />
          Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111
      </li>
      {/* <li>
        <Office name="Bandung" invert={invert}>
          24 Lego 
          <br />
          7190, Tanggerang, Indonesia
        </Office>
      </li> */}
    </ul>
  )
}
