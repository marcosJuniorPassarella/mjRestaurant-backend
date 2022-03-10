import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
  async handle(req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body;
    const addItemService = new AddItemService();
    const order = await addItemService.execute({
      order_id,
      product_id,
      amount,
    });
    return res.json(order);
  }
}

export { AddItemController };
