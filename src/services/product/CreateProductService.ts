import prismaClient from "../../prisma";
import { ProductRequest } from "../../interfaces/ProductRequest";
class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id,
      },
    });
    return product;
  }
}
export { CreateProductService };
