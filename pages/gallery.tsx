import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import GalleryGrid from '../components/GalleryGrid';
import Layout from '../components/Layout/Layout';
import WrapContent from '../components/WrapContent';

function Gallery() {
  return (
    <Layout title='My tickets on Evema'>
      <WrapContent>
        <Box py='5'>
          <Text px='2' fontSize='xl' as='h1' className='capitalize py-5'>
            EVENTS GALLERY
          </Text>
        </Box>

        <GalleryGrid />
      </WrapContent>
    </Layout>
  );
}

export default Gallery;
