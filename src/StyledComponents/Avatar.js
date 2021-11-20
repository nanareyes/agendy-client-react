import styled from 'styled-components'

const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  padding: 5px;
`
const AvatarNavbar = styled.div.attrs((props) => ({
  image: props.image || '',
}))`
  background-image: url('${(props) => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 5px;
`

export {Avatar, AvatarNavbar}
