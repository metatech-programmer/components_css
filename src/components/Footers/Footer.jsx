import CopyCode from "../CopyCode/CopyCode";

const FooterComponents = () => {
  const boxStyle = {
    padre:
      "grid grid-cols-1 border border-slate-600 p-7 rounded-xl gap-5 w-[60vw] h-[80%] bg-[#0404048e]  overflow-scroll",
    hijo: "h-auto w-full  flex text-left flex-col m-auto p-2 gap-5 rounded-md border",
    titulo:
      "underline font-semibold underline-offset-4 text-amber-200 p-2 text-start",
    subtitulo: "text-center my-5 md:mt-20 leading-3 font-bold",
  };
  const textos = {
    titulo_texto: {
      uno: "Footer One",
      dos: "Footer Two",
      tres: "Footer Three",
      cuatro: "Footer Four",
      cinco: "Footer Five",
      seis: "Footer Six",
    },
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className={boxStyle.padre}>
        <h2 className={boxStyle.subtitulo}>Normal Footers:</h2>
        {/* Footer 1 */}
        <div className={boxStyle.hijo}>
          <h2 className={boxStyle.titulo}>{textos.titulo_texto.uno}</h2>
          <div className="mx-4 border rounded-xl p-4 bg-zinc-200 text-zinc-900 text-center text-balance">
            <hr className="border-zinc-900 m-4" />
            <span>
              {" "}
              &copy; 2023 - 2024 Development by Metatech | All right reserved
            </span>
          </div>
          <CopyCode
            number_code={Math.floor(Math.random() * 10000)}
            code={`<div className="mx-4 border rounded-xl p-4 bg-zinc-200 text-zinc-900 text-center text-balance">
						<hr className="border-zinc-900 m-4"/>
						<span > &copy; 2023 - 2024 Development by Metatech | All right reserved</span>
					  </div>`}
          />
        </div>
      </div>
      {/* ///////////////////////////////////// */}
    </div>
  );
};
export default FooterComponents;
