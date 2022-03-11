import prismaClient from "../../prisma/index";
import { CreateOrderRequest } from "../../interfaces/CreateOrderRequest";
class CreateOrderService {
  async execute({ table, name }: CreateOrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });
    return order;
  }
}

export { CreateOrderService };
