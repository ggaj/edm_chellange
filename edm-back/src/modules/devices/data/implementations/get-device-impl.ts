import Device from '../../domain/entity/device-entity';
import { IGetDeviceUseCase } from '../../domain/use-case';
import { IGetDeviceRepository } from '../interfaces';

export class GetDeviceUseCase implements IGetDeviceUseCase {
  constructor (
    private readonly getDeviceRepository: IGetDeviceRepository
  ) { }
  async show (id: number): Promise<Device> {
    const device = await this.getDeviceRepository.finOne(id);

    return device
  }
}