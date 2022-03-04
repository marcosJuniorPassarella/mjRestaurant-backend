import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from 'cors'
import { router } from "./routes";

const app = express();
// INFORMANDO O TIPO DE DADO QUE IREMOS UTILIZAR
app.use(express.json());
// DESSA FORMA ESTAMOS HABILITANDO O NOSSO CORS PARA QUE QUALQUER URL QUALQUER IP FAÇA REQUISIÇÃO PARA NOSSA API
app.use(cors())
// UTILIZAR NOSSAS ROTAS
app.use(router);
// MIDLEWARE - ele é uma tratativa de erro, todas as rotas vão passar por ele
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Se for uma instância do tipo error
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }
  // SE NÃO FOR DO TIPO INSTANCE ERROR MAS FOR UM ERROR, VOU RETORNAR O SEGUINTE
  return res.status(500).json({
    status: "error",
    message: "Internal server error."
  })
});

app.listen(3333, () => console.log("Servidor tá on!"));
