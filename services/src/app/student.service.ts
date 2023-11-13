import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  stuname=String;
  activity=String;
  Stulist:any[]=[];
  addstudent(stuname:String,activity:String)
  {
    this.Stulist.push({name:stuname,acty:activity})
  }
  getAllstudents()
  {
    return this.Stulist;
  }

  constructor() { }
}
