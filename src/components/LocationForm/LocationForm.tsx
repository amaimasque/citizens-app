import Grid from "@mui/material/Grid";
import { LocationFormProps } from "../../types/components";
import SelectInput from "../SelectInput";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCities, setStates } from "../../features/data";

const LocationForm = ({countriesData, statesData}: LocationFormProps) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const dispatch = useAppDispatch();
  const [countries, states] = useAppSelector(state => [state.data.countries, state.data.states, state.data.cities]);

  useEffect(() => {
    const countryData = countries?.find((country) => country.code === selectedCountry)
    if (countryData) {
      setSelectedState('')
      dispatch(setStates(countryData.states))
      dispatch(setCities([]))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry])

  useEffect(() => {
    const stateData = states?.find((state) => state.code === selectedState)
    if (stateData) dispatch(setCities(stateData.cities))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedState])

  return (
    <Grid container spacing={2} sx={{mt: 2}} justifyContent="center" alignItems="center">
      <Grid item lg={6} md={6} xs={6}>
        <SelectInput data={countriesData} id='countries' label='Country' selected={selectedCountry} onChange={setSelectedCountry} />
      </Grid>
      <Grid item lg={6} md={6} xs={6}>
        <SelectInput data={statesData} id='states' label='State' selected={selectedState} onChange={setSelectedState} />
      </Grid>
    </Grid>
  )
}

export default LocationForm;