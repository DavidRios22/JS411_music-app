import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Switch from "@mui/material/Switch"

const label = { inputProps: { "aria-label": "Switch demo" } }

export default function OnlineMode(props) {
//   const [isOnline, setIsOnline] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Online Mode
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Is this application connected to the internet
        </Typography>
      </CardContent>
      <CardActions>
        <Switch {...label} onChange={() => props.setIsOnline(!props.isOnline)} />
      </CardActions>
    </Card>
  )
}
