import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'p7';
  isST: boolean =true;
  imagess:number[]=[1,1,1]
  user:{name:string,lastname:string,phone:string,email:string,age:number}={
    name:"mobina",
    lastname:"zarei",
    phone:"0641964794",
    email:"mobina@1090",
    age:25
  }
  users:{name:string,lastname:string,phone:string,email:string}[]=[
    {
      name:"mobina",
      lastname:"zarei",
      phone:"0641964794",
      email:"mobina@1090"
    },
    {
      name:"ali",
      lastname:"jenabi",
      phone:"65416584",
      email:"ali@1111"
    }
  ]
  constructor() {
    this.myAge(this.user.age)
    console.table(this.users);
  }

  myAge(i:number){
    if(i < 18){
      this.isST=false;
    }else{
      this.isST=true;
    }
  }
  myClick(){
    console.log("mobina")
  }
  count:number=0
  sumNumber(i:number){
    this.count+=i;
    console.log(this.count)
  }
}
