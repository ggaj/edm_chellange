import { IDeleteDeviceUseCase } from '../../domain/use-case';
import { IDeleteDeviceRepository } from '../interfaces'

export class DeleteDeviceUseCase implements IDeleteDeviceUseCase {
  constructor (
    private readonly deleteDeviceRepository: IDeleteDeviceRepository
  ) { }
  async delete (id: number): Promise<boolean> {
    const isDeleted = await this.deleteDeviceRepository.delete(id);

    return isDeleted;
  }
}