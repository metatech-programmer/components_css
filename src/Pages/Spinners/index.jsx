import SpinnerComponent from '../../components/Spinners/Spinner'

const SpinnersPage = () => {
  const title = 'Examples Spinners'
  return (
    <div className='w-full flex flex-col gap-y-10 flex-wrap items-center justify-center'>
      <h1 className='text-3xl font-semibold text-balance text-center'>
        {title}
      </h1>
      <SpinnerComponent ></SpinnerComponent>
    </div>
  )
}

export default {
  page: SpinnersPage
}
