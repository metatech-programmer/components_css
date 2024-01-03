import './App.css'
import Navigation from './components/Navigation/Navigation'

function App () {
  return (
    <div className='w-screen h-screen dark:bg-slate-800 bg-slate-200 font-sans'>
      <header></header>
      <Navigation></Navigation>
      <main></main>
      <footer></footer>
    </div>
  )
}

export default App
