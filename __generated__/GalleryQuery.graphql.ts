

/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */


// Operation related types
export type GalleryQueryQueryVariables = Exact<{
  fullText: Maybe<Scalars['String']>;
  selectedFacets: Maybe<Array<Vtex_SelectedFacetInput> | Vtex_SelectedFacetInput>;
  from: Maybe<Scalars['Int']>;
  to: Maybe<Scalars['Int']>;
  sort: Maybe<Scalars['String']>;
  hideUnavailableItems?: Maybe<Scalars['Boolean']>;
}>;


export type GalleryQueryQuery = { vtex: { productSearch: Maybe<{ products: Maybe<Array<Maybe<{ productName: Maybe<string>, slug: Maybe<string>, id: Maybe<string>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ sellerId: Maybe<string>, commercialOffer: Maybe<{ spotPrice: Maybe<number>, listPrice: Maybe<number> }> }>>> }>>> }>>> }> } };


// Query Related Code

export const GalleryQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query GalleryQuery($fullText: String, $selectedFacets: [VTEX_SelectedFacetInput!], $from: Int, $to: Int, $sort: String, $hideUnavailableItems: Boolean = false) {\n  vtex {\n    productSearch(\n      hideUnavailableItems: $hideUnavailableItems\n      selectedFacets: $selectedFacets\n      fullText: $fullText\n      from: $from\n      to: $to\n      orderBy: $sort\n    ) {\n      products {\n        slug: linkText\n        id: productId\n        productName\n        items {\n          itemId\n          images {\n            imageUrl\n            imageText\n          }\n          sellers {\n            sellerId\n            commercialOffer: commertialOffer {\n              spotPrice\n              listPrice: ListPrice\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "a998c1e1012222c30ff2da6485b781b24ffb60dd8b5d0e4acc55481975fa458d",
  operationName: "GalleryQuery",
}

