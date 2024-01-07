import BadgeComponent from '../../components/Badges/Badge'

const BadgesPage = () => {
  const title = 'Examples Badges'
  return (
    <div className='w-full flex flex-col gap-y-10 flex-wrap items-center justify-center'>
      <h1 className='text-3xl font-semibold text-balance text-center'>
        {title}
      </h1>
      <BadgeComponent ></BadgeComponent>
    </div>
  )
}

export default {
  page: BadgesPage
}
