

/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */


// Operation related types
export type BrowserProductPageQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type BrowserProductPageQueryQuery = { vtex: { product: { titleTag: Maybe<string>, metaTagDescription: Maybe<string>, brand: Maybe<string>, linkText: Maybe<string>, productName: Maybe<string>, description: Maybe<string>, id: Maybe<string>, slug: Maybe<string>, categoryTree: Maybe<Array<Maybe<{ name: Maybe<string>, href: Maybe<string> }>>>, items: Maybe<Array<Maybe<{ ean: Maybe<string>, name: Maybe<string>, itemId: Maybe<string>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, videos: Maybe<Array<Maybe<{ videoUrl: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ sellerId: Maybe<string>, commercialOffer: Maybe<{ spotPrice: Maybe<number>, price: Maybe<number>, listPrice: Maybe<number>, availableQuantity: Maybe<number>, priceValidUntil: Maybe<string> }> }>>> }>>> } } };


// Query Related Code

export const BrowserProductPageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query BrowserProductPageQuery($slug: String!) {\n  vtex {\n    product(slug: $slug) {\n      id: productId\n      slug: linkText\n      titleTag\n      metaTagDescription\n      brand\n      linkText\n      productName\n      description\n      categoryTree {\n        name\n        href\n      }\n      items {\n        ean\n        name\n        itemId\n        images {\n          imageUrl\n          imageText\n        }\n        videos {\n          videoUrl\n        }\n        sellers {\n          commercialOffer: commertialOffer {\n            price: Price\n            listPrice: ListPrice\n            availableQuantity: AvailableQuantity\n            priceValidUntil: PriceValidUntil\n            spotPrice\n          }\n          sellerId\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "4c1158af46929f4c729a84f8a028dadbb60f1a4ed3a0439d47d889b77c19f252",
  operationName: "BrowserProductPageQuery",
}

