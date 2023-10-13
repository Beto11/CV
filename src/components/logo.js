import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(-10deg);
  }
`

const Logo = () => {
  const hackerImg = `/images/hacker${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <LogoBox>
        <Image src={hackerImg} width={40} height={40} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Alberto Treviño
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
