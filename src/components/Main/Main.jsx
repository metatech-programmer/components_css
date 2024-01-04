const Main = () => {
  return (
    <main className=' pl-40 pr-4 lg:pr-0 lg:pl-80 pt-12 w-[95%] flex gap-y-10 flex-wrap flex-row items-center justify-center '>
      <h1 className='text-3xl font-semibold text-balance text-center'>
        Examples Buttons
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-600 p-3 rounded-xl gap-3 w-full h-[80%] bg-[#0404048e]  overflow-scroll'>
        <h2 className='text-center my-5 md:mt-20 leading-3 font-bold'>
          Normal buttons:
        </h2>
        {/* Button 1 */}
        <div className='h-auto w-40  flex text-left flex-col m-auto border p-2 gap-5 rounded-md'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button One :
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 m-auto'>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700'
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>{' '}
        {/* Button 2 */}
        <div className='h-auto w-40  flex text-left flex-col gap- m-auto p-2 gap-5 rounded-md border'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button Two :
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 transition-all m-auto'>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700'
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>
        {/* Button 3 */}
        <div className='h-auto w-40  flex text-left flex-col gap- m-auto p-2 gap-5 rounded-md border'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button Three :
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 transition-all m-auto'>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700'
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>
        {/* Button 4 */}
        <div className='h-auto w-40  flex text-left flex-col gap- m-auto p-2 gap-5 rounded-md border'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button Four :
          </h2>

          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 active:text-lg transition-all m-auto'>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700'
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>
        {/* Button 5 */}
        <div className='h-auto w-40  flex text-left flex-col gap- m-auto p-2 gap-5 rounded-md border'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button Five :
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto'>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700 '
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>
        {/* Button 6 */}
        <div className='h-auto w-40  flex text-left flex-col gap- m-auto p-2 gap-5 rounded-md border'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button Six :
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto italic'>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700 '
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-600 p-3 rounded-xl gap-3 w-full h-[80%] bg-[#0404048e]  overflow-scroll'>
        <h2 className='text-center my-5 md:mt-20 leading-3 font-bold'>
          <span className='text-blue-200'>C</span>
          <span className='text-fuchsia-400'>o</span>
          <span className='text-amber-200'>l</span>
          <span className='text-sky-400'>o</span>
          <span className='text-blue-200'>r</span>
          <span className='text-purple-400'>s</span> buttons:
        </h2>
        {/* Button 1 */}
        <div className='h-auto w-40  flex text-left flex-col m-auto border p-2 gap-5 rounded-md'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button One :
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 m-auto bg-cyan-600 ring-white border-white'>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700'
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>{' '}
        {/* Button 2 */}
        <div className='h-auto w-40  flex text-left flex-col gap- m-auto p-2 gap-5 rounded-md border'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button Two :
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-blue-950 transition-all m-auto bg-blue-800 ring-blue-400'>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700'
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>
        {/* Button 3 */}
        <div className='h-auto w-40  flex text-left flex-col gap- m-auto p-2 gap-5 rounded-md border'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button Three :
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-purple-900 active:bg-purple-950 transition-all m-auto bg-purple-700 ring-purple-400'>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700'
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>
        {/* Button 4 */}
        <div className='h-auto w-40  flex text-left flex-col gap- m-auto p-2 gap-5 rounded-md border'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button Four :
          </h2>

          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-pink-800 active:bg-pink-900 active:text-lg transition-all m-auto bg-pink-500 ring-pink-200 '>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700'
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>
        {/* Button 5 */}
        <div className='h-auto w-40  flex text-left flex-col gap- m-auto p-2 gap-5 rounded-md border'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button Five :
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-fuchsia-600 active:bg-fuchsia-700 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto bg-fuchsia-500 ring-fuchsia-200 '>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700 '
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>
        {/* Button 6 */}
        <div className='h-auto w-40  flex text-left flex-col gap- m-auto p-2 gap-5 rounded-md border'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200 p-2 text-start'>
            Button Six :
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-bold active:ring-4 hover:bg-yellow-500 active:bg-yellow-600 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto italic bg-yellow-300 ring-yellow-100 font-semibold text-gray-950 active:text-white'>
            Click Here
          </button>
          <p className='text-xs text-center text-balance '>
            copy code{' '}
            <a
              href='#'
              className='underline underline-offset-2 text-sky-400 hover:text-sky-700 '
            >
              {' '}
              Just Here{' '}
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
export default Main
