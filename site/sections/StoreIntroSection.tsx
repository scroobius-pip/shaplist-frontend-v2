import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import StoreImage from 'components/StoreImage';
import CartButton from 'components/CartButton'
import { useRouter } from 'next/dist/client/router';
import { SectionProps } from 'sections';
import theme from 'styles/theme';


function StoreIntro(props: { hash: string }) {
  const router = useRouter()
  return <Stack
    spacing={2}
    display='flex'
    justifyContent='center'
    height='100%'
  >

    <Box
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
      }}
    >

      <StoreImage url='/food_background.jpg' />
      <Typography padding={5} textAlign='center' variant='body1'>
        🤎 Custom orders taken through website. <br />
        🤎 Closed for orders on Mondays. We can block out unavailable dates. <br />
        🤎 Automatic cutoff date & time set. 3 days advance order. Order by 6pm each day. <br />
        🤎 Inventory by date. If your item is sold out, please check other dates for availability.
      </Typography>
      <Box sx={{
        padding: 2,
        paddingTop: 0
      }}>

        <Button
          onClick={() => router.push('#catalog')}
          sx={{
            width: '100%',
            padding: '16.5px 14px',
            marginTop: theme.spacing(4),

          }}
          variant='contained'>Order Now</Button>
      </Box>
    </Box>

  </Stack>;
}

export default StoreIntro