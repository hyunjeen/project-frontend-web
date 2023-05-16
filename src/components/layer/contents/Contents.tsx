import React, { ReactNode } from 'react'
import styled from 'styled-components'
interface ContentsProps {
  children?: ReactNode
}
const Contents = ({ children }: ContentsProps) => {
  return <StyledContents>{children}</StyledContents>
}

const StyledContents = styled.main`
  position: relative;
`
export default Contents
