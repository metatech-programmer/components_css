import fondo from '../../assets/fondo.webp'

const Home = () => {
  return (
    <div className='w-full h-screen flex text-center items-center  font-bold text-balance  text-amber-200'>
      <div className='-z-90 fixed right-0 top-0 w-screen h-screen opacity-5' style={{backgroundImage: `url(${fondo})`, backgroundSize: 'cover'}}>
      </div>
      <h1 className='z-100  text-lg md:text-7xl  animate-pulse hover:animate-none transition-all' style={{textShadow: '1px 1px 15px #68B6D8'}}>
        Welcome to Metatech Components
      </h1>
    </div>
  )
}

export default Home
