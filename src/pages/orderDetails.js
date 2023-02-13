import { Container } from "@mui/system";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HelpIcon from "@mui/icons-material/Help";
import { LinearProgress } from "@mui/material";
import TimeLineDetails from "../components/timeLine";

const OrderDetails = () => (
  <div className="order-details bg-[#edf0f5] py-3">
    <Container class="bg-white grid rounded-lg p-6 my-3 max-w-[80%] m-auto">
      <div className="sm:text-2xl xl:text-3xl grid grid-cols-3 gap-4">
        <span className="col-span-2">#Pedido 56798</span>
        <div className="col-start-4 col-end-7">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mx-1 border border-blue-700 rounded text-base">
            Visualizar menssagens
          </button>
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 mx-1 border border-gray-400 rounded shadow text-base">
            Imprimir
          </button>
        </div>
      </div>
      <div className="flex justify-center pt-4 grid grid-cols-3 gap-4">
        <p>
          <b>Carrinho iniciado em:</b>
          <br />
          18/12/2020 às 22:30
        </p>
        <p>
          <b>Fornecedor:</b>
          <br />
          Codigo: 11
        </p>
        <p>
          <b>Status:</b>
          <br />
          No carrinho
        </p>
        <p>
          <b>Filial:</b>
          <br />
          Matriz MG - 99.999.999/9999-9
        </p>
        <p>
          <b>ID Pedido do Fornecedor:</b>
          <br />
          9999999
        </p>
        <p>
          <b>Prazo de entrega aproximado:</b>
          <br />
          Obs: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          vitae erat vel leo ultricies vestibulum non a nibh. Aenean in orci
          nunc. Integer ut viverra lectus. Mauris facilisis, nisi ac facilisis
          eleifend
        </p>
        <p>
          <b>Endereço de entrega:</b>
          <br />
          Rua Racanelo Prestigio, 95 - Andar 57 - Trabalhadores - 301489225 -
          Belo Horizonte - MG
        </p>
        <p>
          <b>Numero da nota:</b>
          <br />
          99999999
        </p>
        <p>
          <b>Forma de pagamento:</b>
          <br />
          Boleto - 45 dias
        </p>
        <p>
          <b>Endereço de cobrança:</b>
          <br />
          Rua Racanelo Prestigio, 95 - Andar 57 - Trabalhadores - 301489225 -
          Belo Horizonte - MG
        </p>
        <p>
          <b>Responsavel:</b>
          <br />
          Carlos
        </p>
        <p>
          <b>Prioridade do Pedido:</b>
          <br />
          Baixa
        </p>
        <p>
          <b>Requisitante Limite de Compras:</b>
          <br />
          18/12/2020 às 22:30
        </p>
      </div>
    </Container>

    <Container class="bg-white grid min-h-[150px] w-full overflow-x-scroll rounded-lg p-6 lg:overflow-visible my-3 max-w-[80%] m-auto">
      <span className="sm:text-2xl lg:text-3xl">Status</span>
      <div className="relative">
        {/* Icons and Text */}
        <div className="flex justify-between items-end w-full m-auto absolute bottom-3.5 z-10 pt-15">
          <figure className="flex flex-col justify-center items-center w-1/5">
            <caption className="sm:text-xs xl:text-base font-bold text-black pb-3 justify-self-start">
              No Carrinho
            </caption>
            <CheckCircleIcon
              fontSize="large"
              className="text-green-500 bg-white "
            />
          </figure>
          <figure className="flex flex-col justify-center items-center w-1/5">
            <caption className="sm:text-xs xl:text-base font-bold text-black pb-3 justify-self-start">
              Pendente Aprovação <br /> de Minha Empresa
            </caption>
            <CheckCircleIcon
              fontSize="large"
              className="text-green-500 bg-white"
            />
          </figure>
          <figure className="flex flex-col justify-center items-center w-1/5">
            <caption className="sm:text-xs xl:text-base font-bold text-black pb-3 justify-self-start">
              Aguardando Liberação <br /> do Fornecedor
            </caption>
            <CheckCircleIcon
              fontSize="large"
              className="text-green-500 bg-white"
            />
          </figure>
          <figure className="flex flex-col justify-center items-center w-1/5">
            <caption className="sm:text-xs xl:text-base font-bold text-black pb-3 justify-self-start">
              Aguardar Entrega
            </caption>
            <CheckCircleIcon
              fontSize="large"
              className="text-green-500 bg-white"
            />
          </figure>
          <figure className="flex flex-col justify-center items-center w-1/5">
            <caption className="sm:text-xs xl:text-base font-bold text-black pb-3 justify-self-start">
              Entregue e Finalizado
            </caption>
            <HelpIcon fontSize="large" className="text-yellow-500 bg-white" />
          </figure>
        </div>
        {/* Bar */}
        <LinearProgress
          variant="determinate"
          value={75}
          sx={{
            height: "8px",
            marginBottom: "30px",
            marginTop: "9vh",
          }}
        />
      </div>
    </Container>

    <Container class="bg-white grid min-h-[600px] w-full place-items-center overflow-x-scroll rounded-lg p-6 my-3 max-w-[80%] m-auto">
      <TimeLineDetails />
    </Container>
  </div>
);

export default OrderDetails;
