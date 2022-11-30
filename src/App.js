import { useLoaction } from './components/customHook/useLoaction';
import { Weather } from './components/Weather';
import Box from '@mui/material/Box';
function App() {
  const locationinInfo = useLoaction();

  return (
    <Box
      justifyItems="center"
      pt={10}
      style={{
        display: 'grid',
        backgroundImage: `linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)`,
        minHeight: '100vh',
      }}
    >
      <Weather data={locationinInfo} />
    </Box>
  );
}

export default App;
