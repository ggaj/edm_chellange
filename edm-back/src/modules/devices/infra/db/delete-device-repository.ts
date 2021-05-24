import { getRepository, Repository } from 'typeorm'
import { IDeleteDeviceRepository } from '../../data/interfaces'
import Device from '../../domain/entity/device-entity'

export class DeleteDeviceRepository implements IDeleteDeviceRepository {
  async delete (id: number): Promise<boolean> {
    const ormRepository: Repository<Device> = getRepository(Device)

    const isDeleted = await ormRepository.delete({ id })

    return isDeleted.affected > 0
  }
}
