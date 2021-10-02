import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { ResponsiveBox } from 'components/ResponsiveBox';
import { ResponsiveBoxVariants } from 'components/ResponsiveBoxVariants';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stitches</title>
        <meta name="description" content="Stitches example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box as="h1">Stitches example</Box>

        <Box
          css={{
            backgroundColor: '$purple500',
            color: '$gray100',
            fontSize: '$5',
            padding: '$4',
          }}
        >
          Box
        </Box>
        <Button>Button</Button>
        <Button color="teal">Button</Button>
        <Button color="orange">Button</Button>
        <ResponsiveBox
          css={{
            padding: '$4',
          }}
        >
          ResponsiveBox
        </ResponsiveBox>
        <ResponsiveBoxVariants
          css={{
            padding: '$4',
          }}
          color={{
            '@initial': 'purple',
            '@bp1': 'teal',
            '@bp2': 'orange',
          }}
        >
          ResponsiveBoxVariants
        </ResponsiveBoxVariants>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
