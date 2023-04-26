import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Slider from "@mui/material/Slider"

export default function MasterVolume(props) {

  const handleChange = (event, newValue) => {
    props.setIsVolume(newValue)
  }

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Master Volume
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Overrides all other sound settings in this application
        </Typography>
      </CardContent>
      <CardActions>
        <Slider
          value={props.isVolume}
          onChange={handleChange}
          aria-label="Small steps"
          defaultValue={0}
          step={10}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
      </CardActions>
    </Card>
  )
}
