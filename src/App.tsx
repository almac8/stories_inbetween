import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ul>
        <li> Facebook </li>
        <li> Instagram </li>
        <li> TikTok </li>
        <li> Youtube </li>
      </ul>

      <h1>Stories in Between</h1>
      <h2>Do something</h2>

      <p>
        We backpack around the country meeting incredible people who are making things better in their communities.
        Sometimes with big projects, sometimes with small everyday magic.
        We tell their stories because they’re worth telling, and because seeing what others are doing can spark ideas in the rest of us.
        Most people already know what their community needs; we just help shine a light on the clever, creative ways they’re solving real problems.
        Along the way, we’re connecting people who care—people with ideas, tools, time, or just a willingness to listen and help.
        We weren’t meant to figure things out alone, and honestly, it’s way more fun together.
        In the end, everything we do comes back to this: educate, educate, educate.
        Because once you learn something real, you can’t unsee it—and maybe, just maybe, it gets you to make a little change of your own.
      </p>

      <h3>Everybody wants to change the world..</h3>
      <p>Toilet roll image</p>
      <h3>..nobody wants to change the toilet roll.</h3>

      <h3>Our Peacewalk Supporters</h3>
      <p>Peacewalk Supporters Slider</p>

      <h3>Our Blog Introduction</h3>
      <p>
        It was a cool but sunny day on the second of September in 2024.
        It was a good day for hiking, which came highly appreciated since we've committed to about 2500km of hiking.
        We've spent four months planning and arranging and making sure we knew what we were doing.
        We did not, in fact, have any idea what we were doing, and honestly,
        no amount of planning, reading or researching could even remotely have prepared us for much of what we experienced.
      </p>
      <button>Read More</button>

      <h3>Youtube Introduction Video</h3>
      <p>The youtube video introducing our new project.</p>
      
      <h3>Our Socials</h3>
      <ul>
        <li> Facebook </li>
        <li> Instagram </li>
        <li> TikTok </li>
        <li> Youtube </li>
      </ul>

      <h3>Network</h3>
      <p>
        Everywhere our journey takes us, we end up meeting people doing really amazing things
        We would love to link these people up with each other.
      </p>

      <h3>Donations</h3>
      <p>Donation Information</p>
    </div>
    /* 
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
 */
  )
}

export default App
