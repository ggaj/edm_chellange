import { ICreateCategoryUseCase } from "@/modules/categories/domain/use-case"
import faker from "faker";

export class CreateCategorySpy implements ICreateCategoryUseCase {
  params: ICreateCategoryUseCase.Params
  result: ICreateCategoryUseCase.Result

  async create (params: ICreateCategoryUseCase.Params): Promise<ICreateCategoryUseCase.Result> {
    this.params = params
    this.result = {
      id: faker.random.number(),
      name: params,
      updatedAt: new Date(),
      createdAt: new Date(),
    } as ICreateCategoryUseCase.Result;

    return this.result
  }
}