export interface IService<I = any, O = any> {
  execute: (input: I) => Promise<O>
}
