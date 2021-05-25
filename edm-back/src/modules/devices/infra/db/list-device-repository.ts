import { getRepository, Repository } from 'typeorm'
import { IListDeviceRepository } from '../../data/interfaces'
import Device from '../../domain/entity/device-entity'

export class ListDeviceRepository implements IListDeviceRepository {
  async find (): Promise<Device[]> {
    const ormRepository: Repository<Device> = getRepository(Device)

    const devices = await ormRepository.find({
      relations: ['category']
    })
    return devices
  }
}
