import prismaClient from "../../prisma/index";
import { RemoveItemRequest } from "../../interfaces/RemoveItemRequest";

class RemoveItemService {
  async execute({ item_id }: RemoveItemRequest) {
    const order = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });
    return order;
  }
}

export { RemoveItemService };
