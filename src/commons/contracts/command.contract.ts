export interface ICommandContract<T, R> {
  execute(input?: T): Promise<R>;
}
