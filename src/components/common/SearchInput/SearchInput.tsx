import { formatSearchState, initSearchState } from '@faststore/sdk'
import { SearchInput as UISearchInput } from '@faststore/ui'
import { navigate } from 'gatsby'
import React, { useCallback } from 'react'
import Icon from 'src/components/ui/Icon'
import useSearchHistory from 'src/sdk/search/useSearchHistory'
import type {
  SearchInputProps as UISearchInputProps,
  SearchInputRef,
} from '@faststore/ui'

import './search-input.scss'

declare type SearchInputProps = {
  onSearchClick?: () => void
  buttonTestId?: string
} & Omit<UISearchInputProps, 'onSubmit'>

const SearchInput = React.forwardRef<SearchInputRef, SearchInputProps>(
  function SearchInput(
    { onSearchClick, buttonTestId = 'store-search-button', ...props },
    ref
  ) {
    const { addToSearchHistory } = useSearchHistory()
    const doSearch = useCallback(
      (term: string) => {
        const { pathname, search } = formatSearchState(
          initSearchState({
            term,
            base: '/s',
          })
        )

        addToSearchHistory(term)
        navigate(`${pathname}${search}`)
      },
      [addToSearchHistory]
    )

    return (
      <UISearchInput
        ref={ref}
        icon={
          <Icon
            name="MagnifyingGlass"
            onClick={onSearchClick}
            data-testid={buttonTestId}
          />
        }
        placeholder="Search everything at the store"
        onSubmit={doSearch}
        {...props}
      />
    )
  }
)

export default SearchInput
