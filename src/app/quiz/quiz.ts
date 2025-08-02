import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizData } from '../quiz-data';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz implements OnInit {
  subject: string = '';
  level: string = '';
  public questions: any[] = [];
  submitted: boolean = false;
  public totalMarks : number = 0;
  minutes: number = 10;
  seconds: number = 0;
  timeUp: boolean = false;
  private timerInterval: any;

  constructor(
    private route: ActivatedRoute,
    private quiz: QuizData
  ) {}

  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const subject = params['subject'];
      const level = params['level'];
      if (subject && level) {
        this.questions = this.quiz.getFilteredQuestions(subject, level);
        console.log(this.questions);
      }
    });
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          this.timeUp = true;
          clearInterval(this.timerInterval);
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  public selectAnswer( questionId:any, option:any){
    console.log(option);
    console.log(questionId);
    console.log(this.questions);
    const selectedQuestion = this.questions.find((v) =>{
      return v.id === questionId
    });
    console.log(selectedQuestion)
    if(selectedQuestion.answer === option){
      console.log("right");
      selectedQuestion.result = true;
    } else{
      console.log("wrong");
      selectedQuestion.result = false;
    }
  }

  public submitQuiz(){
    this.totalMarks= 0;
    console.log(this.questions);
    this.questions.forEach((v) =>{
      if(v.result){
        ++this.totalMarks;
      }
    });
    clearInterval(this.timerInterval);
    alert('your total marks is: '+ this.totalMarks);
  }
}
