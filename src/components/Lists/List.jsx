import CopyCode from "../CopyCode/CopyCode";
const ListComponents = () => {
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
      uno: "List One",
      dos: "List Two",
      tres: "List Three",
      cuatro: "List Four",
      cinco: "List Five",
      seis: "List Six",
    },
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className={boxStyle.padre}>
        <h2 className={boxStyle.subtitulo}>Normal Lists:</h2>
        {/* List 1 */}
        <div className={boxStyle.hijo}>
          <h2 className={boxStyle.titulo}>{textos.titulo_texto.uno}</h2>
          <div className="mx-4 border rounded-xl p-4">
            <div className="w-full">
              <ol className="list-outside list-disc m-4">
                <li className="list-item hover:underline underline-offset-4 hover:list-inside">
                  item 1
                </li>
                <li className="list-item hover:underline underline-offset-4 hover:list-inside">
                  item 2
                </li>
                <li className="list-item hover:underline underline-offset-4 hover:list-inside">
                  item 3
                </li>
                <li className="list-item hover:underline underline-offset-4 hover:list-inside">
                  item 4
                </li>
              </ol>
            </div>
          </div>
          <CopyCode
            number_code={Math.floor(Math.random() * 10000)}
            code={` <div className="mx-4 border rounded-xl p-4">
            <div className="w-full">
              <ol className="list-outside list-disc m-4">
                <li className="list-item hover:underline underline-offset-4 hover:list-inside">
                  item 1
                </li>
                <li className="list-item hover:underline underline-offset-4 hover:list-inside">
                  item 2
                </li>
                <li className="list-item hover:underline underline-offset-4 hover:list-inside">
                  item 3
                </li>
                <li className="list-item hover:underline underline-offset-4 hover:list-inside">
                  item 4
                </li>
              </ol>
            </div>
          </div>`}
          />
        </div>
      </div>
      {/* ///////////////////////////////////// */}
    </div>
  );
};
export default ListComponents;
