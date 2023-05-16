import styled from 'styled-components'

interface IAvatarProps {
  count?: number
  imgUrl?: string
}
const UserAvatar = ({ count = 0, imgUrl }: IAvatarProps) => {
  return (
    <AvatarWrap>
      <span></span>
    </AvatarWrap>
  )
}

const AvatarWrap = styled.div`
  background: #001529;
`
export default UserAvatar
