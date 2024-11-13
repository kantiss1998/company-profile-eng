import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import React from 'react';

type CustomCSSProperties = React.CSSProperties & {
  '--before-bg'?: string;
  '--after-bg'?: string;
};


export function GridList({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
          className,
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function GridListItem({
  title,
  children,
  className,
  invert = false,
}: {
  title: string
  children: React.ReactNode
  className?: string
  invert?: boolean
}) {
  return (
    <li
  className={clsx(
    'text-base',
    invert
      ? 'text-neutral-600 before:bg-neutral-800 after:bg-neutral-950'
      : 'text-neutral-600 before:bg-neutral-800 after:bg-neutral-950',
    className,
  )}
  style={{
    '--before-bg': invert ? 'black' : 'white',
    '--after-bg': invert ? 'black' : 'rgba(255, 255, 255, 0.1)',
  } as CustomCSSProperties}
>
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <strong
            className={clsx(
              'font-semibold',
              invert ? 'text-neutral-950' : 'text-white',
            )}
          >
            {title}
          </strong>{' '}
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
