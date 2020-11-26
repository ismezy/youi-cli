/**
 * 模型定义
 */
export interface ModelDefine {
  /**
   * 模型英文名
   */
  name: string;
  /**
   * 描述
   */
  caption: string;
  /**
   * 分页查询路径
   */
  pageQueryUrl: string;
  /**
   * 获取详情url
   */
  getUrl: string;
  /**
   * 保存url
   */
  saveUrl: string;
  /**
   * 属性
   */
  properties: ModelProperty[];
}

export interface ModelProperty {
  /**
   * 属性名
   */
  name: string;
  /**
   * 描述
   */
  caption: string;
  /**
   * 是否主键
   */
  isPrimaryKey?: boolean;
  /**
   * 数据类型
   */
  dataType?: string;
  /**
   * 校验规则
   */
  rules?: ValidationRule[];
}

export interface ValidationRule {
  required: boolean;
  pattern?: RegExp;
  message?: string;
}
