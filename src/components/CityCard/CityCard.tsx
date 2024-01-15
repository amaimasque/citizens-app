import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CityCardProps } from "../../types/components"
import "./CityCard.css"

const CityCard = ({name, population}: CityCardProps) => {
  return (
    <Card id="city_card_container">
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" sx={{fontWeight: "bold"}}>
          {population.toLocaleString()}
        </Typography>
        <Typography color="text.secondary">
          citizens
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CityCard;