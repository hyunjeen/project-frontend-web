import React from 'react'
import { Nav } from '@/components/modules/navigation/Navigation.styled'
import { NavListProps } from '@/components/modules/navigation/types'

const Navigation = () => {
  const NAV_LISTS: NavListProps[] = [
    { key: '1', url: '/', title: 'heelo' },
    { key: '2', url: '/', title: 'heelfaso' },
  ]

  return (
    <Nav.Bar>
      <Nav.ListView>
        {NAV_LISTS.length > 0
          ? NAV_LISTS.map(({ key, url, title }) => (
              <Nav.List key={key} url={url} title={title} />
            ))
          : null}
      </Nav.ListView>
    </Nav.Bar>
  )
}

export default Navigation
