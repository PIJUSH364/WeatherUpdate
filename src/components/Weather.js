import moment from 'moment';
import Box from '@mui/material/Box';
import { IconButton, Stack, styled } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SyncIcon from '@mui/icons-material/Sync';

const iconButton = styled(IconButton)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  background: '#fff',
  borderColor: '#0063cc',
  '&:hover': {
    backgroundColor: '#fff',
    boxShadow: 'none',
    cursor: 'pointer',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const Weather = ({ data }) => {
  return (
    <Box minWidth="380px">
      {data.main && (
        <Box
          p={2}
          style={{
            borderRadius: '17px',
            color: '#fff',
            background:
              ' linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%,#3584A7 51%)',

            boxShadow: `35px 35px 83px  #473B7B,
             -35px -35px 83px  #473B7B `,
          }}
        >
          <Box>
            <Stack
              justifyContent="space-between"
              direction="row"
              alignItems="baseline"
            >
              <h4>Today</h4>
              <h4>
                {moment().format('ddd')},&nbsp;
                {moment().format('Do')}&nbsp;
                {moment().format('MMM')}
              </h4>
            </Stack>
            <Stack
              justifyContent="space-between"
              direction="row"
              alignItems="center"
              pt={2.3}
            >
              <p
                style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                }}
              >
                {data.main.temp}{' '}
                <sup
                  style={{
                    fontSize: '1.4rem',
                    color: '#e8d454',
                  }}
                >
                  ℃
                </sup>
              </p>
              <Stack alignItems="center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5538/5538361.png"
                  alt="img"
                  style={{
                    width: '100px',
                  }}
                />
                <p style={{ marginTop: '-14px' }}>
                  {data.weather[0].description}
                </p>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="baseline"
            >
              <h3>
                <LocationOnIcon />
              </h3>
              <h3>{data.name}</h3>
            </Stack>
          </Box>
          <Box
            style={{
              display: 'grid',
              justifyContent: 'center',
            }}
          >
            <Box style={{ cursor: 'pointer' }}>
              <iconButton
                aria-label="delete"
                color="primary"
                onClick={() => window.location.reload()}
              >
                <SyncIcon />
              </iconButton>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
