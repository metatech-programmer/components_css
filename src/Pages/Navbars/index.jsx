import ButtonComponent from '../../components/Buttons/Button'

const NavBarsPage = () => {
  const title = 'Examples NavBars'
  return (
    <div className='w-full flex flex-col gap-y-10 flex-wrap items-center justify-center'>
      <h1 className='text-3xl font-semibold text-balance text-center'>
        {title}
      </h1>
      <ButtonComponent ></ButtonComponent>
    </div>
  )
}

export default {
  page: NavBarsPage
}
