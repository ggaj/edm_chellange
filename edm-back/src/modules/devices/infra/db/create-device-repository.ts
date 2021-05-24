
import Category from '@/modules/categories/domain/entity/category-entity'
import { getRepository, Repository } from 'typeorm'
import { ICreateDeviceRepository } from '../../data/interfaces'
import Device from '../../domain/entity/device-entity'
import { ICreateDeviceEntity } from '../../domain/use-case'

export class CreateDeviceRepository implements ICreateDeviceRepository {
  async create ({categoryId, color, partNumber}: ICreateDeviceEntity): Promise<Device> {
    try {
      const ormRepository: Repository<Device> = getRepository(Device)

      let category = new Category()
      category.id = categoryId;

      const device = ormRepository.create({
        category: category,
        color: color,
        partNumber: partNumber,
      })
      
      await ormRepository.save(device)

      return device
    } catch (error) {
      console.log(error)
    }
  }
}
