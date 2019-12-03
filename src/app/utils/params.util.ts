// 参数对象转换为查询字符串
export const paramsToString = (params?: object): string => {
  return params ? '?' + Object.keys(params).map( key => `${key}=${params[key]}`).join('&') : '';
};
