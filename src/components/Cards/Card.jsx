const CardComponents = () => {
  const boxStyle = {
    padre:
      'grid grid-cols-1 md:grid-cols-2   border border-slate-600 p-7 rounded-xl gap-5 w-[60vw] h-[80%] bg-[#0404048e]  overflow-scroll',
    hijo: 'h-auto w-full  flex text-left flex-col m-auto p-2 gap-5 rounded-md border',
    titulo:
      'underline font-semibold underline-offset-4 text-amber-200 p-2 text-start',
    subtitulo: 'text-center my-5 md:mt-20 leading-3 font-bold'
  }
  const textos = {
    titulo_texto: {
      uno: 'Card One :',
      dos: 'Card Two :',
      tres: 'Card Three :',
      cuatro: 'Card Four :',
      cinco: 'Card Five :',
      seis: 'Card Six :'
    }
  }

  return (
    <div className='flex flex-col gap-y-10'>
      <div className={boxStyle.padre}>
        <h2 className={boxStyle.subtitulo}>Normal Cards:</h2>
        {/* Card 1 */}
        <div className={boxStyle.hijo}>
          <h2 className={boxStyle.titulo}>{textos.titulo_texto.uno}</h2>
          <div className='mx-4  rounded-xl overflow-auto relative flex flex-col min-w-0  break-words border border-1 border-gray-300'>
            <div className='py-3 px-6 mb-0 bg-gray-500 border-b-1 border-gray-300 text-slate-200 font-bold'>
              Featured
            </div>
            <div className='flex-auto p-6'>
              <h5 className='mb-3'>Special title treatment</h5>
              <p className='mb-0'>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                href='#'
                className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 mt-3 leading-normal no-underline bg-sky-600 text-white hover:bg-sky-700 '
              >
                Go somewhere
              </a>
            </div>
          </div>
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
      </div>
      {/* ///////////////////////////////////// */}
    </div>
  )
}
export default CardComponents
