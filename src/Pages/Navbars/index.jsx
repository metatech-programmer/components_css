import NavbarComponent from '../../components/Navbars/Navbar'

const NavbarsPage = () => {
  const title = 'Examples Navbars'
  return (
    <div className='w-full flex flex-col gap-y-10 flex-wrap items-center justify-center'>
      <h1 className='text-3xl font-semibold text-balance text-center'>
        {title}
      </h1>
      <NavbarComponent ></NavbarComponent>
    </div>
  )
}

export default {
  page: NavbarsPage
}
