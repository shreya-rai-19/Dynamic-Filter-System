import type { Employee } from "./employee";

export type FieldType =
  | "text"
  | "number"
  | "date"
  | "currency"
  | "select"
  | "multiselect"
  | "boolean";

export type FilterOperator =
  | "equals"
  | "contains"
  | "startsWith"
  | "endsWith"
  | "doesNotContain"
  | "greaterThan"
  | "lessThan"
  | "greaterThanOrEqual"
  | "lessThanOrEqual"
  | "between"
  | "is"
  | "isNot"
  | "in"
  | "notIn";

export interface FilterCondition {
  id: string;
  field: keyof Employee | string;
  operator: FilterOperator;
  value: unknown;
}

export interface FilterFieldConfig {
  key: keyof Employee | string;
  label: string;
  type: FieldType;
  options?: string[];
}