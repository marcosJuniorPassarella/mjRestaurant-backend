import prismaClient from "../../prisma";
import { OrderIdRequest } from "../../interfaces/OrderIdRequest";
class FinishOrderService {
  async execute({ order_id }: OrderIdRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });
    return order;
  }
}

export { FinishOrderService };
