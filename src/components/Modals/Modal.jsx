import CopyCode from "../CopyCode/CopyCode";

const ModalComponents = () => {
  const boxStyle = {
    padre:
      "grid grid-cols-2 border border-slate-600 p-7 rounded-xl gap-5 w-[60vw] h-[80%] bg-[#0404048e]  overflow-scroll",
    hijo: "h-auto w-full  flex text-left flex-col m-auto p-2 gap-5 rounded-md border",
    titulo:
      "underline font-semibold underline-offset-4 text-amber-200 p-2 text-start",
    subtitulo: "text-center my-5 md:mt-20 leading-3 font-bold",
  };
  const textos = {
    titulo_texto: {
      uno: "Modal One",
      dos: "Modal Two",
      tres: "Modal Three",
      cuatro: "Modal Four",
      cinco: "Modal Five",
      seis: "Modal Six",
    },
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className={boxStyle.padre}>
        <h2 className={boxStyle.subtitulo}>Normal Modals:</h2>
        {/* Modal 1 */}
        <div className={boxStyle.hijo}>
          <h2 className={boxStyle.titulo}>{textos.titulo_texto.uno}</h2>
          <div className="mx-4 border rounded-xl p-4 bg-black ">
            <div className="modal-one">
              <button
                className="border p-2 rounded w-full "
                popovertarget="modal-one"
                popovertargetaction="show"
              >
                Open Modal
              </button>
              <div
                className="w-1/2 h-1/2 rounded p-3 flex flex-col justify-between bg-zinc-200 relative -z-50"
                id="modal-one"
                popover="auto"
              >
                <h1>Esto es un modal</h1>
                <button
                  className="border p-2 rounded bg-red-500 font-semibold text-zinc-100 hover:scale-95 transition-all w-1/3"
                  popovertarget="modal-one"
                  popovertargetaction="hide"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <CopyCode
            number_code={Math.floor(Math.random() * 10000)}
            code={`             <div className="modal-one">
			<button className="border p-2 rounded w-full " popovertarget="modal-one" popovertargetaction="show">
			  Open Modal
			</button>
			<div className="w-1/2 h-1/2 rounded p-3 flex flex-col justify-between bg-zinc-200 relative -z-50"  id="modal-one" popover="auto">
			  <h1>Esto es un modal</h1>
			  <button className="border p-2 rounded bg-red-500 font-semibold text-zinc-100 hover:scale-95 transition-all w-1/3" popovertarget="modal-one" popovertargetaction="hide">
				Close
			  </button>
			</div>
		  </div>`}
          />
        </div>
      </div>
      {/* ///////////////////////////////////// */}
    </div>
  );
};
export default ModalComponents;
