import { ItemRequest } from "../../interfaces/ItemRequest";
import prismaClient from "../../prisma/index";

class AddItemService {
  async execute({ order_id, product_id, amount }: ItemRequest) {
    const order = prismaClient.item.create({
      data: {
        order_id: order_id,
        product_id: product_id,
        amount: amount,
      },
    });
    return order;
  }
}

export { AddItemService };
