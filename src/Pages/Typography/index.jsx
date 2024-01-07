import TypographyComponent from '../../components/Typography/Typography'

const TypographyPage = () => {
  const title = 'Examples Typographies'
  return (
    <div className='w-full flex flex-col gap-y-10 flex-wrap items-center justify-center'>
      <h1 className='text-3xl font-semibold text-balance text-center'>
        {title}
      </h1>
      <TypographyComponent></TypographyComponent>
    </div>
  )
}

export default {
  page: TypographyPage
}
