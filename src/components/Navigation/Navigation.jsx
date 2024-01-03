import icons from '../../assets/icons'
const Navigation = () => {
  return (
    <div className='bg-slate-950 h-screen lg:w-60 p-3 rounded fixed overflow-y-scroll md:w-24'>
      <div className='flex text-center lg:hidden pt-2 '>
        <span
          className='text-2xl font-semibold text-amber-200 pb-5 m-auto underline-offset-8  '
          style={{ textShadow: '1px 1px 7px #4CB9E7' }}
        >
          M&apos;C
        </span>
        <hr className='mb-3  border-slate-800' />
      </div>
      <aside className='text-center h-full '>
        <div className='mb-5 underline font-bold text-[#4CB9E7] border-2 rounded-xl border-gray-400 p-3 lg:block hidden hover:animate-pulse'>
          <div
            slot='image'
            className='w-full h-28 hidden lg:block hover:animate-pulse'
            style={{
              backgroundImage: `url(${icons.icon})`,
              backgroundSize: 'cover'
            }}
          />
          <span>Metatech Components</span>
        </div>
        <hr className='mb-3  border-slate-800' />
        <nav className='text-justify text-pretty h-full m-2'>
          <ul className='flex flex-col gap-2 text-white items-center pb-6  lg:items-stretch'>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.accordions})`,
                    backgroundSize: 'cover'
                  }}
                />

                <span className='hidden lg:block'>Accordions</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.badge})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Badges</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.buttons})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Buttons</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.card})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Cards</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.carrousel})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Carrousel</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.fonts})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Fonts</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.footers})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Footers</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.icons})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>icons</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.lists})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Lists</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.modals})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Modals</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.navbar})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>NavBars</span>
              </li>
            </a>

            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.pages})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Pages Resources</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.progressBar})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Progress Bar</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url(${icons.spinners})`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Spinners</span>
              </li>
              <hr className='mt-4 border-slate-800' />
            </a>
            <a
              href='https://santiagoaguilar-devfront.netlify.app/'
              target='_blank'
              className='mt-2 text-slate-700 text-center hover:text-slate-400'
              rel='noreferrer'
            >
              By <br className='block lg:hidden' /> metatech{' '}
              <br className='block lg:hidden' />
              2024
            </a>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Navigation
