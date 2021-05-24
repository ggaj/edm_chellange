export interface IDeleteDeviceRepository {
  delete: (id: number) => Promise<boolean>
}