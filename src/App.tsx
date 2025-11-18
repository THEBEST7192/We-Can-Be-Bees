import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [beeScript, setBeeScript] = useState<string>('Loading Bee script...')

  useEffect(() => {
    const beesUrl = new URL('./BEES.txt', import.meta.url)

    fetch(beesUrl.href)
      .then((res) => res.text())
      .then((text) => setBeeScript(text))
      .catch(() => {
        setBeeScript('Failed to load Bee script.')
      })
  }, [])

  return (
    <div className="bee-script-container">
      <div className="bee-sky">
        <div className="bee bee-1">
          <div className="bee-body" />
          <div className="bee-wing bee-wing-left" />
          <div className="bee-wing bee-wing-right" />
        </div>
        <div className="bee bee-2">
          <div className="bee-body" />
          <div className="bee-wing bee-wing-left" />
          <div className="bee-wing bee-wing-right" />
        </div>
        <div className="bee bee-3">
          <div className="bee-body" />
          <div className="bee-wing bee-wing-left" />
          <div className="bee-wing bee-wing-right" />
        </div>
        <div className="bee bee-4">
          <div className="bee-body" />
          <div className="bee-wing bee-wing-left" />
          <div className="bee-wing bee-wing-right" />
        </div>
        <div className="bee bee-5">
          <div className="bee-body" />
          <div className="bee-wing bee-wing-left" />
          <div className="bee-wing bee-wing-right" />
        </div>
      </div>
      <h1 className="bee-script-title">We Can Be Bees</h1>
      <pre className="bee-script">{beeScript}</pre>
    </div>
  )
}

export default App
