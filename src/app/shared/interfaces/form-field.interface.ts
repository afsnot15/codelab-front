import { PipeTransform } from '@angular/core';
import { EFieldType } from '../enums/field-type.enum';

export interface ILabelValue {
  label: string;
  value: number | boolean | string | undefined;
}

export interface IItemList {
  value: number | boolean | string | undefined;
}

export interface IFormField {
  type: EFieldType;
  class: string;
  label: string;
  formControlName: string;
  placeholder: string;
  options?: ILabelValue[];
  mask?: any;
  password?: boolean;
}
