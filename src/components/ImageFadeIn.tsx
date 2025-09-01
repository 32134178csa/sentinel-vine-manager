// components/ImageFadeIn.tsx
import Image from 'next/image'
import { useState } from 'react'

interface ImageFadeInProps {
  src: string
  altText: string
  /** Optional extra class for the <Image> itself */
  imageClassName?: string
  /** If you don’t know width/height ahead of time, you can pass `fill` instead */
  width?: number
  height?: number
  fill?: boolean
}

export default function ImageFadeIn({
  src,
  altText,
  imageClassName,
  width,
  height,
  fill = false,
}: ImageFadeInProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`image-container ${loaded ? 'fade-in' : ''}`}>
      {fill ? (
        <Image
          src={src}
          alt={altText}
          fill
          className={imageClassName}
          onLoadingComplete={() => setLoaded(true)}
        />
      ) : (
        <Image
          src={src}
          alt={altText}
          width={width ?? 600}
          height={height ?? 400}
          className={imageClassName}
          onLoadingComplete={() => setLoaded(true)}
        />
      )}
    </div>
  )
}