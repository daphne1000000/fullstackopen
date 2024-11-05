import { useState } from 'react'

const Button = ({ handleClick, text }) => (
 <button onClick={handleClick}>
 {text}
 </button>
)

const Stat = ({ value, text }) => {
return (
<>
<td>{text}</td>
<td>{value}</td>
</>
)
}

const App = () => {
	//save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [total, setTotal] = useState(0)

   const handleGoodClick = () => {
     const updatedGood = good + 1
     setGood(updatedGood)
     setTotal(updatedGood + bad + neutral)
   }

   const handleBadClick = () => {
     const updatedBad = bad + 1
     setBad(updatedBad)
     setTotal(updatedBad + good + neutral)
   }

   const handleNeutralClick = () => {
     const updatedNeutral = neutral + 1
     setNeutral(updatedNeutral)
     setTotal(updatedNeutral + bad + good)
   }
	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={handleGoodClick} text='good' />
			<Button handleClick={handleNeutralClick} text='neutral' />
			<Button handleClick={handleBadClick} text='bad' />
			<h2>statistics</h2>
			<table>
			<tbody>
			<tr><Stat value={good} text='good' /></tr>
			<tr><Stat value={neutral} text='neutral' /></tr>
			<tr><Stat value={bad} text='bad' /></tr>
			<tr><Stat value={total} text='all' /></tr>
			<tr><Stat value={((good - bad)/total)} text='average' /></tr>
			<tr><Stat value={(good/total)} text='positive' /></tr>
			</tbody>
			</table>
		</div>
	)
}

export default App
