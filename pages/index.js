import { Box, Container, Heading, Image } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
        <Box borderRadius="lg" bg="red" p={3} mt={2} mb={4}>
            Hello, I&apos;m a full-stack developer based in San Jose!
        </Box>

        <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Eric J Whitehead
                </Heading>
                <p>Writer, Developer</p>
            </Box>
            <Box 
                flexShrink={0} 
                mt={{ base: 4, md: 0 }} 
                ml={{ md: 6 }} 
                align="center"
            >
                <Image 
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="public/images/smoke.png"
                    alt="Profile Image"
                />
            </Box>
        </Box>
        </Container>
    )
}

export default Page