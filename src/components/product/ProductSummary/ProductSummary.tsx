import { gql } from '@vtex/graphql-utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import Button from 'src/components/ui/Button'
import DiscountBadge from 'src/components/ui/DiscountBadge'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import { useProductLink } from 'src/sdk/product/useProductLink'
import type { ProductSummary_ProductFragment } from '@generated/graphql'

interface Props {
  product: ProductSummary_ProductFragment
  index: number
}

function ProductSummary({ product, index }: Props) {
  const {
    id,
    sku,
    gtin: referenceId,
    name: variantName,
    brand: { name: brandName },
    isVariantOf: { name, productGroupID: productId },
    image: [img],
    offers: { lowPrice: spotPrice, offers },
  } = product

  const { listPrice, seller } = useMemo(() => {
    const lowestPriceOffer = offers.find((x) => x.price === spotPrice)

    if (!lowestPriceOffer) {
      console.error(
        'Could not find the lowest price product offer. Showing the first offer provided.'
      )

      return offers[0]
    }

    return lowestPriceOffer
  }, [spotPrice, offers])

  const linkProps = useProductLink({ product, index })
  const buyProps = useBuyButton({
    id,
    name,
    brand: brandName,
    price: spotPrice,
    listPrice,
    seller,
    quantity: 1,
    referenceId,
    productId,
    itemOffered: {
      name: variantName,
      image: [img],
      sku,
    },
  })

  return (
    <Link {...linkProps}>
      <a {...linkProps}>
        <Image
          className="w-full"
          width={360}
          height={360}
          src={img.url}
          alt={img.alternateName}
        />
        <div>{name}</div>
        <div className="flex justify-between">
          <span
            data-testid="list-price"
            data-value={listPrice}
            className="line-through"
          >
            {useFormattedPrice(listPrice)}
          </span>
          <span data-testid="price" data-value={spotPrice}>
            {useFormattedPrice(spotPrice)}
          </span>
          <DiscountBadge listPrice={listPrice} spotPrice={spotPrice} />
        </div>
        <Button {...buyProps}>Add to cart</Button>
      </a>
    </Link>
  )
}

export const fragment = gql`
  fragment ProductSummary_product on StoreProduct {
    id: productID
    slug
    sku
    brand {
      brandName: name
    }
    name
    gtin

    isVariantOf {
      productGroupID
      name
    }

    image {
      url
      alternateName
    }

    brand {
      name
    }

    offers {
      lowPrice
      offers {
        price
        listPrice
        quantity
        seller {
          identifier
        }
      }
    }
  }
`

export default ProductSummary
