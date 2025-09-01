// src/components/LocaleSwitcher.tsx
import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'
import { flags } from '@/config'

export default function LocaleSwitcher() {
  const { locale: activeLocale, asPath, push } = useRouter();
  const blogSupportedLocales = ["en", "fr", "es", "it"];

  const localeToAltNames: Record<string, string> = {
    en: "English",
    fr: "Français",
    it: "Italiano",
    es: "Español",
    ro: "Română",
    srb: "Srpski",
    hy: "Հայերեն",
  };

  return (
    <div className="switcher justify-content-center">
      {blogSupportedLocales?.map((loc) => (
        <button
          key={loc}
          onClick={() => push(asPath, asPath, { locale: loc })}
          className={`button${loc === activeLocale ? ' active' : ''}`}
        >
          <div className='switcher-flag'>
            <Image
              src={`/flags/${flags[loc]}.svg`}
              alt={localeToAltNames[loc] || loc}
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>
        </button>
      ))}
    </div>
  )
}