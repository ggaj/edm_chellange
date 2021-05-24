export interface IDeleteDeviceUseCase {
  delete: (id: number) => Promise<boolean>
}
