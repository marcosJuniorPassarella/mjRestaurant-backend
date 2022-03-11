import prismaClient from "../../prisma";
import { OrderIdRequest } from "../../interfaces/OrderIdRequest";
class SendOrderService {
  async execute({ order_id }: OrderIdRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        draft: false,
      },
    });
    return order;
  }
}

export { SendOrderService };
