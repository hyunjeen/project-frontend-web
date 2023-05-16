import styled from 'styled-components'
import { flex } from '@/styles/util/flex'
import Link from 'next/link'
import type { NavListProps } from '@/components/modules/navigation/types'

const Bar = styled.div`
  ${flex()};
`
const ListView = styled.ul`
  ${flex()};
`

const StyledListItem = styled.li``

const StyledLink = styled(Link)`
  ${flex()};
  padding: var(--list-padding-y) var(--list-padding-x);
`

const List = (props: NavListProps) => (
  <StyledListItem>
    <StyledLink href={props.url}>{props.title}</StyledLink>
  </StyledListItem>
)

export const Nav = { List, ListView, Bar }
