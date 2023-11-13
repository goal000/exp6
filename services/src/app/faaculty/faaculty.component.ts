import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
StudentService
@Component({
  selector: 'app-faaculty',
  templateUrl: './faaculty.component.html',
  styleUrls: ['./faaculty.component.css']
})
export class FaacultyComponent  implements OnInit{

    Stulist:any[]=[];
    constructor(private studentService: StudentService){

    }
    ngOnInit():void{
      this.Stulist=this.studentService.getAllstudents();
    }
}
