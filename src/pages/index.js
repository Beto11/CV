import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} align="center">
        <div>Hello, I&apos;m a Software Engineer based in Mexico! </div>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alberto Treviño
          </Heading>
          <p> Software Engineer </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
