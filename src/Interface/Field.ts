import {FieldTyeModel} from"../FieldTypeModel";
export interface Field{
    name:string,
    label:string,
    type:FieldTyeModel,
    value:any,
    render():any;
}