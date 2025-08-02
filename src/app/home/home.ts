import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
public subject: string | undefined;
  public level: string | undefined;
  public questionList :any;

  constructor(private router: Router) {} 


  onSubjectChange (event:any) {
    this.subject = event.target.value;
    console.log(this.subject);
  }
  onlevelChange(event: any) {
  this.level = event.target.value;
  console.log(this.level);
}

onSubmit() {
    if (this.subject && this.level) {
      this.router.navigate(['/quiz'], {
        queryParams: { subject: this.subject, level: this.level },
      });
    } else {
      alert('Please select both subject and level!');
    }
  }
}
