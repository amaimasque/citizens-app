import { Grid, Typography } from '@mui/material';
import { CityListProps } from '../../types/components';
import CityCard from '../CityCard';

const CityList = ({data}: CityListProps) => (
  <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{pt: 2, pb: 2, minHeight: '63vh'}}>
    {!data.length ? (
      <Grid item xl={12}>
        <Typography variant='h6' color='text.secondary' sx={{textAlign: 'center'}}>NO DATA</Typography>
      </Grid>
    ) : (
      data.map((info) => (
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <CityCard {...info} />
        </Grid>
      ))
    )}
  </Grid>
)

export default CityList;