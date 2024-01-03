const Main = () => {
  return (
    <main className='h-screen bg-gradient-to-t from-gray-800 to-50% to-gray-950 pl-40 pr-4 lg:pr-0 lg:pl-80 pt-12 w-[95%] flex gap-4 flex-wrap flex-row items-center justify-center '>
      <h1 className='text-3xl font-semibold mb-5 text-balance text-center'>
        Examples Buttons
      </h1>
      <div className=' flex border border-slate-600 p-3 rounded-xl gap-3 flex-wrap items-center justify-center w-full h-[80%] bg-[#06032f2c]  overflow-scroll'>
        {/* Button 1 */}
        <div className='h-28 w-40  flex text-left flex-col gap-1'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200'>
            Button 1
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 m-auto'>
            Click Here
          </button>
        </div>{' '}
        {/* Button 2 */}
        <div className='h-28 w-40  flex text-left flex-col gap-1'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200'>
            Button 2
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 transition-all m-auto'>
            Click Here
          </button>
        </div>
        {/* Button 3 */}
        <div className='h-28 w-40  flex text-left flex-col gap-1'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200'>
            Button 3
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 transition-all m-auto'>
            Click Here
          </button>
        </div>
        {/* Button 4 */}
        <div className='h-28 w-40  flex text-left flex-col gap-1'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200'>
            Button 4
          </h2>

          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 active:text-lg transition-all m-auto'>
            Click Here
          </button>
        </div>
        {/* Button 5 */}
        <div className='h-28 w-40  flex text-left flex-col gap-1'>
          <h2 className='underline font-semibold underline-offset-4 text-amber-200'>
            Button 5
          </h2>
          <button className='w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto'>
            Click Here
          </button>
        </div>
      </div>
    </main>
  )
}
export default Main
