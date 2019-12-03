// 接口数据格式
export interface ResponseData<T> {
  code: number;
  data: T;
  message: string;
}
