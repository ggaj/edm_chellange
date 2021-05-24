import { getRepository, Repository } from 'typeorm'
import { IGetDeviceRepository } from '../../data/interfaces'
import Device from '../../domain/entity/device-entity'

export class GetDeviceRepository implements IGetDeviceRepository {
  async finOne (id: number): Promise<Device> {
    const ormRepository: Repository<Device> = getRepository(Device)

    const device = await ormRepository.findOne({ id })

    return device
  }
}
