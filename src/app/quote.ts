export class Quote {
    showDescription: boolean;
    count:number;
    count2:number;

    constructor(public id: number,public name: string,public description : string,public completeDate: Date,){
      this.showDescription=false;
      this.count=0;
      this .count2=0;
    }
  }