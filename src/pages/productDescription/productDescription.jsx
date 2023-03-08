import productOne from "../../assets/produto_2_semfundo.png";
import SearchIcon from "@mui/icons-material/Search";
import ProductRows from "../productList/productRows";

export default function ProductDescription() {
  return (
    <div className="bg-[#edf0f5] py-10">
      <div className="bg-white w-[80%] m-auto rounded-md flex justify-between items-start pb-8">
        {/* image half */}
        <div className="flex flex-col items-center xl:p-4 w-6/12 ">
          <img
            className="mt-5 object-scale-down m-auto bg-white pb-4"
            src={productOne}
            alt="Sunset in the mountains"
          />
          <button className="p-3 bg-gray-400 rounded-lg">
            <SearchIcon />
          </button>
        </div>
        {/* text half */}
        <div className="flex flex-col items-start justify-center p-5 xl:p-10 w-6/12 ">
          <p className="pb-5 font-bold text-[0.9rem] xl:text-[1.5rem] ">
            PAP A4 CERT.FSC GIMBA 210X297 CX5000 75G
          </p>
          <p className="text-[0.8rem] xl:text-[1.2rem]">
            <b>ID:</b> 905
            <br />
            <b>CÓD. SUPRICORP:</b> 1109319
            <br />
            <b>MARCA:</b> GIMBA
            <br />
          </p>

          <p className="pt-5 text-[0.8rem] xl:text-[1.2rem]">
            <b>CONDIÇÕES PARA COMPRA</b>
          </p>

          <p className="pt-5 text-[0.8rem] xl:text-[1.2rem]">
            <b>PEDIDO MÍNIMO:</b> 1 UNIDADE
            <br />
            <b>FORMA DE PAGAMENTO:</b> BOLETO - 45 DIAS
            <br />
            <b>PRAZO DE ENTREGA APROXIMADO:</b> 3 DIAS ÚTEIS
            <br />
            <span className=" text-[0.6rem] xl:text-[0.9rem] text-gray-500">
              Obs: Esse tempo é de responsabilidade do fornecedor, pode variar
              de acordo com seu fluxo de pedidos.
            </span>
          </p>

          <div className="flex justify-between items-center pt-16 w-6/12">
            <span className="text-[0.6rem] xl:text-[0.9rem] underline font-bold text-orange-400">
              UNID
            </span>
            <span className="text-[0.9rem] xl:text-[1.5rem] font-bold text-orange-400">
              R$ 192,45
            </span>
            <div className="text-[0.9rem] xl:text-[1.5rem] flex justify-between items-center w-2/12 space-x-2">
              <button>-</button>
              <p className="border border-black py-1 px-5">1</p>
              <button>+</button>
            </div>
          </div>
          <div className="flex justify-between items-center pt-16 w-6/12">
            <button className="w-full py-2 px-4 rounded-lg bg-green-600 text-[0.7rem] xl:text-[1.2rem] text-white font-medium">
              INCLUIR NO CARRINHO
            </button>
          </div>
        </div>
      </div>

      <div className="w-[80%] m-auto pt-20">
        <p className="font-bold text-[0.9rem] xl:text-[1.5rem] text-gray-600">RELACIONADOS</p>
        <ProductRows />
      </div>
    </div>
  );
}
