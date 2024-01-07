import PageResourceComponent from '../../components/PagesResources/PageResource'

const PagesResourcesPage = () => {
  const title = 'Examples Pages Resources'
  return (
    <div className='w-full flex flex-col gap-y-10 flex-wrap items-center justify-center'>
      <h1 className='text-3xl font-semibold text-balance text-center'>
        {title}
      </h1>
      <PageResourceComponent ></PageResourceComponent>
    </div>
  )
}

export default {
  page: PagesResourcesPage
}
