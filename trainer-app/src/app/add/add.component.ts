import { Component, OnInit } from '@angular/core';
import { TrainerModel } from '../Model/trainer.model';
import { TrainerService } from '../trainer/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  constructor(private service : TrainerService, private route : Router) { }

  trainer : TrainerModel;
  branches : string[] = ["Java", "Dot Net", "Cloud", "AI", "ML"];
  cities : string[] = ["Mumbai", "Pune", "Chennai", "Kolkata", "Delhi"];

  ngOnInit() {
    this.trainer = new TrainerModel();
  }

  addTrainer(){
    this.service.addTrainer(this.trainer);
    this.trainer = new TrainerModel();
    this.route.navigate(['list']);
  }

}
