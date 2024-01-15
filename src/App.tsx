import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import { Container, Grid, Typography, capitalize } from '@mui/material';
import { getCountries } from './utils/api';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setCities, setCountries, setStates } from './features/data';
import { SelectInputData } from './types/components';
import SelectInput from './components/SelectInput';
import "./App.css"
import CityList from './components/CityList';
import { blue } from '@mui/material/colors';

function App() {
  const dispatch = useAppDispatch();
  const [countries, states, cities] = useAppSelector(state => [state.data.countries, state.data.states, state.data.cities]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const fetchData = useCallback(async () => {
    const resData = await getCountries();
    dispatch(setCountries(resData));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const countryData = countries.find((country) => country.code === selectedCountry)
    if (countryData) {
      setSelectedState('')
      dispatch(setStates(countryData.states))
      dispatch(setCities([]))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry])

  useEffect(() => {
    const stateData = states.find((state) => state.code === selectedState)
    if (stateData) dispatch(setCities(stateData.cities))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedState])

  const countriesInputData: SelectInputData[] = useMemo(() => countries?.map(({ code, name }) => ({ value: code, display: capitalize(name) })), [countries]) as unknown as SelectInputData[]
  const statesInputData: SelectInputData[] = useMemo(() => states?.map(({ code, name }) => ({ value: code, display: capitalize(name) })), [states]) as unknown as SelectInputData[]
  const totalCitizens = useMemo(() => cities?.reduce((prev, cur) => prev + cur.population, 0), [cities])
  return (
    <div id="container" style={{backgroundColor: blue[500], padding: 20, backgroundImage:`url(${process.env.PUBLIC_URL}/background.png)`, backgroundSize: '100vw'}}>
      <Container maxWidth="md" sx={{ backgroundColor: 'white', borderRadius: 3, pt: 5}}>
        <img alt='Globe icon' src={`${process.env.PUBLIC_URL}/world-globe.png`} width={64} height={64} id="logo" />
        <Grid container spacing={2} sx={{mt: 2}} justifyContent="center" alignItems="center">
          <Grid item lg={6} md={6} xs={6}>
            <SelectInput data={countriesInputData} id='countries' label='Country' selected={selectedCountry} onChange={setSelectedCountry} />
          </Grid>
          <Grid item lg={6} md={6} xs={6}>
            <SelectInput data={statesInputData} id='states' label='State' selected={selectedState} onChange={setSelectedState} />
          </Grid>
        </Grid>
        <Typography variant='h5' sx={{textAlign: 'center', mt: 5, mb: 6}}>Total Citizens: <strong>{totalCitizens.toLocaleString()}</strong></Typography>
        <Typography variant='h5'>Cities:</Typography>
        <CityList data={cities}/>
    </Container>
   </div>
  );
}

export default App;
