import CartImage from "../assets/cart.jpeg";
import HelpIcon from "@mui/icons-material/Help";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function SideCartProductsTable() {
  return (
    <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
      {/* first */}
      <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <h3 class="mb-3 text-xl font-bold text-indigo-600">Fornecedor 1</h3>
        <div class="relative">
          <img class="w-[90%] rounded-xl" src={CartImage} alt="Colors" />
          <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            R$224,00
          </p>
        </div>
        <div class="mt-4 text-gray-800 text-start">
          <p className="font-bold">Até 6 Vezes</p>
          <p className="text-sm">sem juros</p>
        </div>
        <div class="my-4">
          <div class="flex flex-col space-x-1 items-start">
            <p className="font-bold">6 dias úteis</p>
            <p className="text-sm">Sedex 10</p>
          </div>
          <div class="mt-4 text-gray-800 text-start">
            <p className="font-bold">
              Ped. Mínimo{" "}
              <span className="text-sm font-normal">
                {" "}
                <HelpIcon />{" "}
              </span>
            </p>
          </div>
          <div class="mt-4 text-gray-800 text-start">
            <p className="font-bold">
            Avaliação:
            <StarIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarHalfIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarOutlineIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            </p>
            
          </div>
          <button class="mt-4 space-x-2 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
            <ShoppingCartIcon />
            <span className="text-base">Comprar</span>
          </button>
        </div>
      </div>
      {/* second */}
      <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <h3 class="mb-3 text-xl font-bold text-indigo-600">Fornecedor 2</h3>
        <div class="relative">
          <img class="w-[90%] rounded-xl" src={CartImage} alt="Colors" />
          <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            R$331,58
          </p>
        </div>
        <div class="mt-4 text-gray-800 text-start">
          <p className="font-bold">Até 8 Vezes</p>
          <p className="text-sm">sem juros</p>
        </div>
        <div class="my-4">
          <div class="flex flex-col space-x-1 items-start">
            <p className="font-bold">12 dias úteis</p>
            <p className="text-sm">PAC</p>
          </div>
          <div class="mt-4 text-gray-800 text-start">
            <p className="font-bold">
              Ped. Mínimo{" "}
              <span className="text-sm font-normal">
                {" "}
                <HelpIcon />{" "}
              </span>
            </p>
          </div>
          <div class="mt-4 text-gray-800 text-start">
            <p className="font-bold">
            Avaliação:
            <StarIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarOutlineIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarOutlineIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarOutlineIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            </p>
            
          </div>
          <button class="mt-4 space-x-2 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
            <ShoppingCartIcon />
            <span className="text-base">Comprar</span>
          </button>
        </div>
      </div>
      {/* third */}
      <div class="max-w-sm bg-[#313457] px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <h3 class="mb-3 text-xl font-bold text-indigo-600">Fornecedor 3</h3>
        <div class="relative">
          <img class="w-[90%] rounded-xl" src={CartImage} alt="Colors" />
          <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            R$221,88
          </p>
        </div>
        <div class="mt-4 text-white text-start">
          <p className="font-bold">Até 10 Vezes</p>
          <p className="text-sm">com juros</p>
        </div>
        <div class="my-4">
          <div class="flex flex-col text-white space-x-1 items-start">
            <p className="font-bold">5 dias úteis</p>
            <p className="text-sm">Sedex</p>
          </div>
          <div class="mt-4 text-white text-start">
            <p className="font-bold">
              Ped. Mínimo{" "}
              <span className="text-sm font-normal">
                {" "}
                <HelpIcon />{" "}
              </span>
            </p>
          </div>
          <div class="mt-4 text-white text-start">
            <p className="font-bold">
            Avaliação:
            <StarIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            <StarIcon sx={{ fontSize: {sm: '1.1rem', lg: '1.7rem'}, color: '#EC942A' }} />
            </p>
            
          </div>
          <button class="mt-4 space-x-2 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
            <ShoppingCartIcon />
            <span className="text-base">Comprar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
