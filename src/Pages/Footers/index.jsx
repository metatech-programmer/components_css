import FooterComponent from '../../components/Footers/Footer'

const FootersPage = () => {
  const title = 'Examples Footers'
  return (
    <div className='w-full flex flex-col gap-y-10 flex-wrap items-center justify-center'>
      <h1 className='text-3xl font-semibold text-balance text-center'>
        {title}
      </h1>
      <FooterComponent ></FooterComponent>
    </div>
  )
}

export default {
  page: FootersPage
}
