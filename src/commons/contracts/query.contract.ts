export interface IQueryContract<T = any, R = any> {
  execute(input?: T): Promise<R>;
}
