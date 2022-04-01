import { Button } from '@faststore/ui'
import React, { useState } from 'react'
import { Image } from 'src/components/ui/Image'

import { ImageGallerySelector, ImageZoom } from '.'

import './image-gallery.scss'

export interface ImageElementData {
  url: string
  alternateName: string
}

interface ImageGalleryProps {
  images: ImageElementData[]
}

const imgOptions = {
  sourceWidth: 1024,
  backgroundColor: '#f0f0f0',
  layout: 'constrained' as const,
  sizes: '(max-width: 768px) 25vw, 50vw',
  breakpoints: [360, 720, 1024],
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0)
  const currentImage = images[selectedImageIdx]

  return (
    <section data-image-gallery={images.length > 1 ? 'has-selector' : 'true'}>
      <ImageZoom>
        <Image
          baseUrl={currentImage.url}
          alt={currentImage.alternateName}
          loading="eager"
          aspectRatio={4 / 3}
          {...imgOptions}
        />
      </ImageZoom>
      {images.length > 1 && (
        <ImageGallerySelector itemsPerPage={4}>
          {images.map((image, idx) => {
            return (
              <Button
                key={idx}
                data-thumbnail-button={
                  idx === selectedImageIdx ? 'selected' : 'true'
                }
                aria-label={`Load ${image.alternateName} - Image ${
                  idx + 1
                } of ${images.length}`}
                onClick={() => {
                  setSelectedImageIdx(idx)
                }}
              >
                <Image
                  baseUrl={image.url}
                  alt={image.alternateName}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  aspectRatio={1}
                  {...imgOptions}
                />
              </Button>
            )
          })}
        </ImageGallerySelector>
      )}
    </section>
  )
}

export default ImageGallery
