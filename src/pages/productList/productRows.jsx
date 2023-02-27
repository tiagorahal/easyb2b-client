import productZero from "../../assets/produto_0.png";
import productOne from "../../assets/produto_2_semfundo.png";
import productTwo from "../../assets/produto1.jpg";
import productThree from "../../assets/produto3.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductRows() {
  const products = [productZero, productOne, productTwo, productThree];
  return (
    <div className="flex justify-between items-center pt-7">
      {products.map((product) => (
        <div className="w-[24%] h-[450px] rounded overflow-hidden shadow-lg  bg-white" key={product}>
          <img
            className="w-full mt-5 object-contain max-h-[200px] m-auto bg-white pb-4 "
            src={product}
            alt="Sunset in the mountains"
          />
          <div className="w-[95%] border-t-4 border-gray m-auto"></div>
          <div className="px-2 py-1">
            <button
              type="button"
              className="rounded text-[0.6rem] xl:text-[0.8rem] bg-orange-400 px-3 text-white"
            >
              Promoção
            </button>
            <p>
              <a href="#" className="text-[0.7rem] xl:text-[0.9rem] font-bold">
                PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS
              </a>
            </p>
          </div>
          <div className="flex justify-around items-center m-auto  py-1">
            <span className="text-[0.6rem] xl:text-[0.9rem] text-gray-400  py-1">
              <p className="line-through">R$22,75</p>
              <p>Unidade</p>
            </span>
            <span className="text-orange-400 font-bold text-[0.8rem] xl:text-[1rem]">
              R$14,75
            </span>
          </div>
          {/* bottom part */}
          <div className="pt-2 flex justify-around items-center flex-col h-[20%] bg-[#FDEEDB]">
            <div className="flex justify-around items-center">
              <div className="flex justify-center items-center space-x-2 pr-4">
                <button>-</button>
                <span className="px-2 border border-black bg-white text-sm">
                  1
                </span>
                <button>+</button>
              </div>
              <button className="text-[0.6rem] xl:text-[0.8rem] bg-[#313457] text-white font-bold p-2 rounded-md xl:px-4">
                Incluir no Carrinho
              </button>
            </div>
            <div className="pl-[55%] xl:pl-[75%] space-x-2">
              <a href="">
                {" "}
                <VisibilityIcon sx={{ color: "#FF8A4C" }} />
              </a>
              <a href="">
                <FavoriteIcon sx={{ color: "#FF8A4C" }} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
