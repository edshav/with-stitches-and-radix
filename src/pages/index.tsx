import Head from 'next/head';
import type { NextPage } from 'next';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { ResponsiveBox } from 'components/ResponsiveBox';
import { ResponsiveBoxVariants } from 'components/ResponsiveBoxVariants';
import { Dialog, DialogTrigger, DialogContent, Title } from 'components/dialog';

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
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <Title>This is a title</Title>
            <p>Order complete.</p>
            <p>You&apos;ll receive a confirmation email in the next few minutes.</p>
          </DialogContent>
        </Dialog>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
