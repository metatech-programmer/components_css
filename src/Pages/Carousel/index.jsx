import CarouselComponent from '../../components/Carousels/Carousel'

const CarouselPage = () => {
  const title = 'Examples Carrousels'
  return (
    <div className='w-full flex flex-col gap-y-10 flex-wrap items-center justify-center'>
      <h1 className='text-3xl font-semibold text-balance text-center'>
        {title}
      </h1>
      <CarouselComponent ></CarouselComponent>
    </div>
  )
}

export default {
  page: CarouselPage
}
