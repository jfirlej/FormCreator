export class FieldLabel {
    labelName:string;
    
    constructor(labelName:string){
        this.labelName=labelName;
        
    }
    render()    {
        const labelElement=document.createElement('label');
        labelElement.innerHTML=this.labelName;
        return labelElement;


    }
}