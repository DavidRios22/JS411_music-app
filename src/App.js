import React, { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import SignIn from "./components/SignIn"
import OnlineMode from "./components/OnlineMode"
import MasterVolume from "./components/MasterVolume"
import Sound from "./components/Sound"

function App() {
  const [isOnline, setIsOnline] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isVolume, setIsVolume] = useState(0)
  const [isQuality, setIsQuality] = useState("")

  return (
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <>
          <p>You are logged in</p>

        <span>
          <OnlineMode isOnline={isOnline} setIsOnline={setIsOnline} />
          <MasterVolume isVolume={isVolume} setIsVolume={setIsVolume} />
          <Sound isQuality={isQuality} setIsQuality={setIsQuality} />
        </span>

          <h3>System Notfications</h3>
          {!isOnline && (
            <p>
              Your application is offline. You won't be able to share or stream
              music to other devices
            </p>
          )}
          {isVolume > 80 && (
            <p>
              Listening to music at a high volume could cause long-term hearing
              loss.
            </p>
          )}
          {isQuality === 1 && (
            <p>
              Music quality is degraded. Increase quality if your connection
              allows it.
            </p>
          )}
        </>
      ) : (
        <SignIn setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  )
}

export default App
