import { useCallback, useEffect, useMemo } from 'react';
import './App.css';
import { Container, Typography } from '@mui/material';
import { getCountries } from './utils/api';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setCountries } from './features/data';
import { SelectInputData } from './types/components';
import "./App.css"
import CityList from './components/CityList';
import { blue } from '@mui/material/colors';
import { titleCase } from './utils/stringHelper';
import LocationForm from './components/LocationForm';

function App() {
  const dispatch = useAppDispatch();
  const [countries, states, cities] = useAppSelector(state => [state.data.countries, state.data.states, state.data.cities]);
  

  const fetchData = useCallback(async () => {
    const resData = await getCountries();
    dispatch(setCountries(resData));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const countriesInputData: SelectInputData[] = useMemo(() => countries?.map(({ code, name }) => ({ value: code, display: titleCase(name) })), [countries]) as unknown as SelectInputData[]
  const statesInputData: SelectInputData[] = useMemo(() => states?.map(({ code, name }) => ({ value: code, display: titleCase(name) })), [states]) as unknown as SelectInputData[]
  const totalCitizens = useMemo(() => cities?.reduce((prev, cur) => prev + cur.population, 0), [cities])
  
  return (
    <div id="container" style={{backgroundColor: blue[500], padding: 20, backgroundImage:`url(${process.env.PUBLIC_URL}/background.png)`, backgroundSize: '100vw'}}>
      <Container maxWidth="md" sx={{ backgroundColor: 'white', borderRadius: 3, pt: 5}}>
        <img alt='Globe icon' src={`${process.env.PUBLIC_URL}/world-globe.png`} width={64} height={64} id="logo" />
        <LocationForm countriesData={countriesInputData} statesData={statesInputData}/>
        <Typography variant='h5' sx={{textAlign: 'center', mt: 5, mb: 6}}>Total Citizens: <strong>{totalCitizens.toLocaleString()}</strong></Typography>
        <Typography variant='h5'>Cities:</Typography>
        <CityList data={cities}/>
    </Container>
   </div>
  );
}

export default App;
