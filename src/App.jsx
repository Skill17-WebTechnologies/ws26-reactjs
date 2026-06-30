import { useState, version } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <main className="card">
      <h1>React <span className="v">{version}</span></h1>
      <p>WSC2026 Web Technologies — minimal React app (Vite).</p>
      <button onClick={() => setCount((c) => c + 1)}>Clicked {count} times</button>
    </main>
  )
}
