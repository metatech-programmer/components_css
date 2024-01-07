import fondo from '../../assets/fondo.webp'

const Home = () => {
  return (
    <div className='w-full h-screen flex text-center items-center flex-col justify-center  font-bold text-balance  transition-all duration-1000'>
      <div
        className='-z-90 fixed right-0 top-0 w-screen h-screen opacity-5'
        style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover' }}
      ></div>
      <h1 className='z-100  text-lg md:text-7xl hover:animate-pulse  transition-all  text-amber-200'  style={{ textShadow: '0px 0px 15px #FFCC00' }}>
        Welcome to Metatech Components
      </h1>
      <h2 className='z-100  text-xs md:text-3xl  mt-2 md:mt-6 hover:animate-pulse transition-all opacity-30'  style={{ textShadow: '0px 0px 15px #FFFFFF' }}>
        (HTML - TAILWIND CSS)
      </h2>
    </div>
  )
}

export default Home
