import { OrderIdRequest } from "../../interfaces/OrderIdRequest";
import prismaClient from "../../prisma/index";
class RemoveOrderService {
  async execute({ order_id }: OrderIdRequest) {
    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });
    return order;
  }
}

export { RemoveOrderService };
