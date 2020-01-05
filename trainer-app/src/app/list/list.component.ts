import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer/trainer.service';
import { TrainerModel } from '../Model/trainer.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  trainers : TrainerModel[];
  constructor(private service : TrainerService) { }

  ngOnInit() {
    this.trainers = this.service.listTrainers();
  }

  sortByName(){
    this.trainers = this.service.sortByName();
  }

  sortByBranch(){
    this.trainers = this.service.sortByBranch();
  }

  sortByCity(){
    this.trainers = this.service.sortByCity();
  }

  sortByMobile(){
    this.trainers = this.service.sortByMobile();
  }

  sortByMail(){
    this.trainers = this.service.sortByEmail();
  }

  deleteTrainer(index : number){
    var ans = confirm("Are you sure want to delete ??");
    if(ans)
      this.service.deleteTrainer(index);
  }

}
