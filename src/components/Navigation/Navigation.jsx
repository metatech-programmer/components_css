import card from '../../assets/icons_components/card.svg'
import icon from '../../assets/icon.svg'
import accordions from '../../assets/icons_components/accordions.svg'
import badge from '../../assets/icons_components/badge.svg'
import buttons from '../../assets/icons_components/buttons.svg'
import carrousel from '../../assets/icons_components/carrousel.svg'
import fonts from '../../assets/icons_components/fonts.svg'
import footers from '../../assets/icons_components/footers.svg'
import images from '../../assets/icons_components/images.svg'
import lists from '../../assets/icons_components/lists.svg'
import modals from '../../assets/icons_components/modals.svg'
import navbar from '../../assets/icons_components/navbar.svg'
import pages from '../../assets/icons_components/pages.svg'
import progressBar from '../../assets/icons_components/progressBar.svg'
import spinners from '../../assets/icons_components/spinners.svg'
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
              backgroundImage: `url("${icon}")`,
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
                    backgroundImage: `url("${accordions}")`,
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
                    backgroundImage: `url("${badge}")`,
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
                    backgroundImage: `url("${buttons}")`,
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
                    backgroundImage: `url("${card}")`,
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
                    backgroundImage: `url("${carrousel}")`,
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
                    backgroundImage: `url("${fonts}")`,
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
                    backgroundImage: `url("${footers}")`,
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
                    backgroundImage: `url("${images}")`,
                    backgroundSize: 'cover'
                  }}
                />
                <span className='hidden lg:block'>Images</span>
              </li>
            </a>
            <a href='#'>
              {' '}
              <li className='bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11'>
                <div
                  slot='image'
                  className='w-8 h-8 mr-3'
                  style={{
                    backgroundImage: `url("${lists}")`,
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
                    backgroundImage: `url("${modals}")`,
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
                    backgroundImage: `url("${navbar}")`,
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
                    backgroundImage: `url("${pages}")`,
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
                    backgroundImage: `url("${progressBar}")`,
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
                    backgroundImage: `url("${spinners}")`,
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
