import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/FooterPage'

function App () {
  return (
    <div className='w-screen h-screen font-sans dark:text-slate-200 overflow-auto bg-gradient-to-t from-gray-800 to-50% to-gray-950'>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
  )
}

export default App
