import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.text} {props.value}</div>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={good + neutral + bad} />
      <Display text="average" value={(good + (bad * -1)) / (good + neutral + bad)} />
      <Display text="positive" value={((good + neutral) / (good + neutral + bad)) * 100 + " %"} />

    </div>
  )
}

export default App