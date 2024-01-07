import AccordionsComponent from '../../components/Accordions/Accordion'

const AccordionsPage = () => {
  const title = 'Examples Accordions'
  return (
    <div className='w-full flex flex-col gap-y-10 flex-wrap items-center justify-center'>
      <h1 className='text-3xl font-semibold text-balance text-center'>
        {title}
      </h1>
      <AccordionsComponent></AccordionsComponent>
    </div>
  )
}

export default {
  page: AccordionsPage
}
