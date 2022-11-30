import { useLoaction } from './components/customHook/useLoaction';
import { Weather } from './components/Weather';

function App() {
  const locationinInfo = useLoaction();

  return (
    <>
      <div>App</div>
      <Weather data={locationinInfo} />
    </>
  );
}

export default App;
