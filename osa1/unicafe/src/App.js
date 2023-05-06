import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if ((props.good + props.bad + props.neutral) === 0) {
    return (
      <>
        No feedback given
      </>
    )
  }
  return (
    <>
      <Display text="good" value={props.good} />
      <Display text="neutral" value={props.neutral} />
      <Display text="bad" value={props.bad} />
      <Display text="all" value={props.good + props.neutral + props.bad} />
      <Display text="average" value={(props.good + (props.bad * -1)) / (props.good + props.neutral + props.bad)} />
      <Display text="positive" value={((props.good + props.neutral) / (props.good + props.neutral + props.bad)) * 100 + " %"} />
    </>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App