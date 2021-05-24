export interface IMapping<I,O> {
  transform: (input: I) => O
}
