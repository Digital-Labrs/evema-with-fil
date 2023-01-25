import React from 'react';
import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

import { AiOutlineMail } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <Box bg={'gray.50'} color={'gray.700'} maxW='100vw'>
      <Container as={Stack} maxW={'container.lg'} py={10} px='8'>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing={5}>
          <Stack align={'flex-start'}>
            <ListHeader>
              <h3 className='flex-1  font-semibold pb-2'>
                <span className='text-primary font-semibold'>EVE</span>
                <span className='text-orange font-semibold'>MA</span>
              </h3>
            </ListHeader>
            <div className='w-full'>
              <Text fontSize='lg'>
                The first and best web3 event booking
                <br /> & ticketing system, powered by IPFS!
              </Text>
            </div>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Menu</ListHeader>
            <Link href={'/create'}>Create Event</Link>
            <Link href={'/events'}>All Events</Link>
            <Link href={'/'}>My Tickets</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Contact</ListHeader>
            <Box fontSize={'lg'}>
              <HStack gap='2'>
                <SlLocationPin />

                <p>Port Harcourt</p>
              </HStack>
            </Box>

            <Link href='tel:+2348165407995'>
              <HStack gap='2'>
                <FiPhoneCall />

                <p>+2348165407995</p>
              </HStack>
            </Link>
            <Link href='mailto:adoms@digemart.com'>
              <HStack gap='2'>
                <AiOutlineMail />
                <p>adoms@digemart.com</p>
              </HStack>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={'gray.200'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2023 Adom Labs. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
