import NextLink from 'next/link'
import { Button, Box, Container, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={2} mb={4} align="center">
                Hello, I&apos;m a full-stack developer based in Santa Cruz!
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
                        src="/images/smoke.png"
                        alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as ="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I am LFW!
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="red">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1995</BioYear>
                    Born in San Jose, CA
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Completed a Full Stack bootcamp at UT-A
                </BioSection>
                <BioSection>
                    <BioYear>2017-Present</BioYear>
                    Worked at Trader Joe's
                </BioSection>
            </Section>
        </Container>
    )
}

export default Page