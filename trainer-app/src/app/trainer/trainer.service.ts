import { Injectable } from '@angular/core';
import { TrainerModel } from '../Model/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor() { }

  trainers : TrainerModel [] = [
    new TrainerModel("Bhushan", "Java", "Mumbai", "9898989898", "bhushan@gmail.com"),
    new TrainerModel("Naman", "Dot Net", "Pune", "7878787878", "naman@gmail.com"),
    new TrainerModel("Isha", "Cloud", "Pune", "9898989898", "isha@gmail.com"),
    new TrainerModel("Jyoti", "AI", "Bangalore", "7575757575", "jyoti@gmail.com")   
  ];
  index : number;

  addTrainer(trainer : TrainerModel){
    this.trainers.push(trainer);
  }

  listTrainers(){
    return this.trainers;
  }

  searchTrainers(name : string){
    let result = this.trainers.filter(x => x.name == name  );
    return result; 
  }

  sortByName(){
    this.trainers.sort((a, b) => a.name > b.name ? 1 : ((a.name < b.name) ? -1 : 0));
    return this.trainers;
  }

  sortByBranch(){
    this.trainers.sort((a, b) => a.branch > b.branch ? 1 : ((a.branch < b.branch) ? -1 : 0));
    return this.trainers;
  }

  sortByCity(){
    this.trainers.sort((a, b) => a.city > b.city ? 1 : ((a.city < b.city) ? -1 : 0));
    return this.trainers;
  }

  sortByMobile(){
    this.trainers.sort((a, b) => a.mobile > b.mobile ? 1 : ((a.mobile < b.mobile) ? -1 : 0));
    return this.trainers;
  }

  sortByEmail(){
    this.trainers.sort((a, b) => a.email > b.email ? 1 : ((a.email < b.email) ? -1 : 0));
    return this.trainers;
  }

  deleteTrainer(index : number) {
    return this.trainers.splice(index, 1);
  }
  
}
