// 用户
export interface SysUser {
  id?: number;
  username: string;
  telephone: string;
  mail: string;
  password: string;
  dept_id: number;
  status: number;
  remark: string;
  operator: string;
  operator_time: string;
  operator_ip: number;
}
// 部门
export interface SysDept {
  id: number;
  name: string;
  parent_id: number;
  seq: string;
  remark: string;
  operator: string;
  operator_time: string;
  operator_ip: string;
}
// 角色
export interface SysRole {
  id: number;
  name: string;
  type: number;
  status: number;
  remark: string;
  operator: string;
  operator_time: string;
  operator_ip: string;
}
// 权限
export interface SysAcl {
  id: number;
  code: number;
  name: string;
  acl_module_id: number;
  seq: string;
  status: number;
  remark: string;
  operator: string;
  operator_time: string;
  operator_ip: string;
}
// 模块
export interface SysModule {
  id: number;
  name: string;
  parent_id: number;
  level: string;
  seq: string;
  status: number;
  remark: string;
  operator: string;
  operator_time: string;
  operator_ip: string;
}
