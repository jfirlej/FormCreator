import {FieldTyeModel} from"../FieldTypeModel";
import {Field} from "../Interface/Field";

export class SelectField implements Field   {
    name:string;
    label:string;
    type:FieldTyeModel;
    value:string;
    option:string[];
    constructor(name:string,label:string,type:FieldTyeModel,value:string)  {
        

    }
    render()    {

    }

}