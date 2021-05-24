import Device from "../../domain/entity/device-entity";
import { ICreateDeviceEntity, ICreateDeviceUseCase } from "../../domain/use-case";
import { ICreateDeviceRepository } from "../interfaces";

export class CreateDeviceUseCase implements ICreateDeviceUseCase {
  constructor (
    private readonly createDeviceRepository: ICreateDeviceRepository
  ) { }
  async create ({categoryId, color, partNumber}: ICreateDeviceEntity): Promise<Device> {
    const device = await this.createDeviceRepository.create({categoryId, color, partNumber});

    return device
  }
}