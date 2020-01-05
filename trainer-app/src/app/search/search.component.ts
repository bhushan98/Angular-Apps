import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer/trainer.service';
import { TrainerModel } from '../Model/trainer.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  found : boolean = false;
  trainers : TrainerModel[] = [];
  tname : string;
  tcity : string;
  constructor(private service : TrainerService) { }

  ngOnInit() {
  }

  searchTrainer(){
    this.trainers = this.service.searchTrainers(this.tname);
    if(this.trainers.length == 0)
      alert("No trainer found !");
    else
      this.found = true;
  }

}
