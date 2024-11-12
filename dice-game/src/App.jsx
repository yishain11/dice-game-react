import './App.css'

function App() {
  const player = {
    name: "yishai",
    currentScore: 0
  };
  const targetScore = 50;

  function throwDice() {
    const num1 = Math.floor(Math.random() * 6 + 1);
    const num2 = Math.floor(Math.random() * 6 + 1);
    return [num1, num2];
  }

  function handleDiceThrow() {
    const [num1, num2] = throwDice();
    player.currentScore += (num1 + num2);
  }

  return (
    <>
      <button onClick={handleDiceThrow}>throw dice</button>
    </>
  )
}

export default App
