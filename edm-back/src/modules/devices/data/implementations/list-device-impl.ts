import Device from '../../domain/entity/device-entity';
import { IListDeviceUseCase } from '../../domain/use-case';
import { IListDeviceRepository } from '../interfaces';

export class ListDeviceUseCase implements IListDeviceUseCase {
  constructor (
    private readonly listDeviceRepository: IListDeviceRepository
  ) { }
  async index (): Promise<Device[]> {
    const categories = await this.listDeviceRepository.find();

    return categories
  }
}