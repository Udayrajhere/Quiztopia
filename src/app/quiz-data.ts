import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizData {
  private questions=[
  {
    id: 101,
    subject:'Science',
    type:'Easy',
    question:'what is the process by which plant makes food ?',
    option:[
      'respiration','photosynthesis','digestion','circulation'
    ],
    answer:'photosynthesis',
    result: false
  },
  {
    id: 102,
    subject:'Science',
    type:'Easy',
    question:'what gas do animals breathe ?',
    option:[
      'oxygen','nitrogen','co2','methane'
    ],
    answer:'oxygen',
    result: false

  },
  {
    id: 103,
    subject:'Science',
    type:'Easy',
    question:'which planet is known as red planet?',
    option:[
      'earth','jupiter','saturn','mars'
    ],
    answer:'mars',
    result: false

  },
  {
    id: 104,
    subject:'Science',
    type:'Easy',
    question:'what force pull object towards earth?',
    option:[
      'respiration','magnetism','gravitation','friction'
    ],
    answer:'gravitation',
    result: false

  },
  {
    id: 105,
    subject:'Science',
    type:'Easy',
    question:'what is renewable source of energy ?',
    option:[
      'deisel','petrol','solar power','coal'
    ],
    answer:'solar power',
    result: false

  },
  {
    id: 206,
    subject:'Science',
    type:'Medium',
    question:'which of the following is not a function of the skeletal system?',
    option:[
      'support','movement','protection','digestion'
    ],
    answer:'digestion',
    result: false

  },
  {
    id: 207,
    subject:'Science',
    type:'Medium',
    question:'Which of the following is a chemical change ?',
    option:[
      'melting ice','burning wood','freezing ice','mixing sugar and water'
    ],
    answer:'burning wood',
    result: false

  },
  {
    id: 208,
    subject:'Science',
    type:'Medium',
    question:'What is the unit of electrical resistance ?',
    option:[
      'ohm','watt','amphere','volt'
    ],
    answer:'volt',
    result: false

  },
  {
    id: 209,
    subject:'Science',
    type:'Medium',
    question:'What is the relationship between resistance and current ?',
    option:[
      'double','indirectly proportional','directly proportional','equal'
    ],
    answer:'directly proportional',
    result: false

  },
  {
    id: 210,
    subject:'Science',
    type:'Medium',
    question:'which animal lives on land and water ?',
    option:[
      'monkey','lion','whale','frog'
    ],
    answer:'frog',
    result: false

  },
  {
    id: 106,
    subject:'Science',
    type:'Hard',
    question:'which of the following is not a function of the skeletal system?',
    option:[
      'support','movement','protection','digestion'
    ],
    answer:'digestion',
    result: false

  },
  {
    id: 107,
    subject:'Science',
    type:'Hard',
    question:'Which of the following is a chemical change ?',
    option:[
      'melting ice','burning wood','freezing ice','mixing sugar and water'
    ],
    answer:'burning wood',
    result: false

  },
  {
    id: 108,
    subject:'Science',
    type:'Hard',
    question:'What is the unit of electrical resistance ?',
    option:[
      'ohm','watt','amphere','volt'
    ],
    answer:'volt',
    result: false

  },
  {
    id: 109,
    subject:'Science',
    type:'Hard',
    question:'What is the relationship between resistance and current ?',
    option:[
      'double','indirectly proportional','directly proportional','equal'
    ],
    answer:'directly proportional',
    result: false

  },
  {
    id: 110,
    subject:'Science',
    type:'Hard',
    question:'which animal lives on land and water ?',
    option:[
      'monkey','lion','whale','frog'
    ],
    answer:'frog',
    result: false

  },
  {
    id: 111,
    subject: "Math",
    type: "Easy",
    question: "What is 2 + 2?",
    option: ["2", "3", "4", "5"],
    answer: "4",
    result: false

  },
  {
    id: 112,
    subject: "Math",
    type: "Easy",
    question: "What is 5 - 3?",
    option: ["1", "2", "3", "4"],
    answer: "2",
    result: false

  },
  {
    id: 113,
    subject: "Math",
    type: "Easy",
    question: "What is 10 / 2?",
    option: ["2", "5", "10", "20"],
    answer: "5",
    result: false

  },
  {
    id: 114,
    subject: "Math",
    type: "Easy",
    question: "What is 3 * 3?",
    option: ["6", "9", "12", "15"],
    answer: "9",
    result: false

  },
  {
    id: 115,
    subject: "Math",
    type: "Easy",
    question: "What is the square of 4?",
    option: ["12", "14", "16", "18"],
    answer: "16",
    result: false

  },
  {
    id: 211,
    subject: "Math",
    type: "Medium",
    question: "What is 2 + 2?",
    option: ["2", "3", "4", "5"],
    answer: "4",
    result: false
  },
  {
    id: 212,
    subject: "Math",
    type: "Medium",
    question: "What is 5 - 3?",
    option: ["1", "2", "3", "4"],
    answer: "2",
    result: false
  },
  {
    id: 213,
    subject: "Math",
    type: "Medium",
    question: "What is 10 / 2?",
    option: ["2", "5", "10", "20"],
    answer: "5",
    result: false
  },
  {
    id: 214,
    subject: "Math",
    type: "Medium",
    question: "What is 3 * 3?",
    option: ["6", "9", "12", "15"],
    answer: "9",
    result: false
  },
  {
    id: 215,
    subject: "Math",
    type: "Medium",
    question: "What is the square of 4?",
    option: ["12", "14", "16", "18"],
    answer: "16",
    result: false
  },

  {
    id: 116,
    subject: "Math",
    type: "Hard",
    question: "What is the derivative of x^2?",
    option: ["x", "2x", "x^2", "2"],
    answer: "2x",
    result: false
  },
  {
    id: 117,
    subject: "Math",
    type: "Hard",
    question: "Solve: 2x + 3 = 7",
    option: ["x=1", "x=2", "x=3", "x=4"],
    answer: "x=2",
    result: false
  },
  {
    id: 118,
    subject: "Math",
    type: "Hard",
    question: "What is the integral of 1/x dx?",
    option: ["x", "ln(x)", "1/x", "e^x"],
    answer: "ln(x)",
    result: false
  },
  {
    id: 119,
    subject: "Math",
    type: "Hard",
    question: "If sin(θ) = 0.5, then θ = ?",
    option: ["30°", "45°", "60°", "90°"],
    answer: "30°",
    result: false
  },
  {
    id: 120,
    subject: "Math",
    type: "Hard",
    question: "What is the value of π (up to 3 decimal places)?",
    option: ["3.142", "3.124", "3.421", "3.241"],
    answer: "3.142",
    result: false
  },
  {
    id: 121,
    subject: "Sst",
    type: "Easy",
    question: "Who was the first President of India?",
    option: ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Dr. Rajendra Prasad", "Jawaharlal Nehru"],
    answer: "Dr. Rajendra Prasad",
    result: false
  },
  {
    id: 122,
    subject: "Sst",
    type: "Easy",
    question: "Which river is the longest in India?",
    option: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
    answer: "Ganga",
    result: false
  },
  {
    id: 123,
    subject: "Sst",
    type: "Easy",
    question: "What is the capital of India?",
    option: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
    answer: "Delhi",
    result: false
  },
  {
    id: 124,
    subject: "Sst",
    type: "Easy",
    question: "Who wrote the Indian National Anthem?",
    option: ["Rabindranath Tagore", "Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    answer: "Rabindranath Tagore",
    result: false
  },
  {
    id: 125,
    subject: "Sst",
    type: "Easy",
    question: "Which festival is known as the festival of lights?",
    option: ["Holi", "Diwali", "Eid", "Christmas"],
    answer: "Diwali",
    result: false
  },
  {
    id: 221,
    subject: "Sst",
    type: "Medium",
    question: "Who was the first President of India?",
    option: ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Dr. Rajendra Prasad", "Jawaharlal Nehru"],
    answer: "Dr. Rajendra Prasad",
    result: false
  },
  {
    id: 222,
    subject: "Sst",
    type: "Medium",
    question: "Which river is the longest in India?",
    option: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
    answer: "Ganga",
    result: false
  },
  {
    id: 223,
    subject: "Sst",
    type: "Medium",
    question: "What is the capital of India?",
    option: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
    answer: "Delhi",
    result: false
  },
  {
    id: 224,
    subject: "Sst",
    type: "Medium",
    question: "Who wrote the Indian National Anthem?",
    option: ["Rabindranath Tagore", "Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    answer: "Rabindranath Tagore",
    result: false
  },
  {
    id: 225,
    subject: "Sst",
    type: "Medium",
    question: "Which festival is known as the festival of lights?",
    option: ["Holi", "Diwali", "Eid", "Christmas"],
    answer: "Diwali",
    result: false
  },
  {
    id: 126,
    subject: "Sst",
    type: "Hard",
    question: "When did the Revolt of 1857 take place?",
    option: ["1847", "1857", "1867", "1877"],
    answer: "1857",
    result: false
  },
  {
    id: 127,
    subject: "Sst",
    type: "Hard",
    question: "Who was the founder of the Maurya Empire?",
    option: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Harsha"],
    answer: "Chandragupta Maurya",
    result: false
  },
  {
    id: 128,
    subject: "Sst",
    type: "Hard",
    question: "What is the meaning of secularism?",
    option: [
      "One religion for all",
      "Promotion of majority religion",
      "Equal respect for all religions",
      "No religion at all"
    ],
    answer: "Equal respect for all religions",
    result: false
  },
  {
    id: 129,
    subject: "Sst",
    type: "Hard",
    question: "Which Article in Indian Constitution deals with Right to Education?",
    option: ["Article 19", "Article 21A", "Article 15", "Article 370"],
    answer: "Article 21A",
    result: false
  },
  {
    id: 130,
    subject: "Sst",
    type: "Hard",
    question: "When was the Constitution of India adopted?",
    option: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1947"],
    answer: "26 November 1949",
    result: false
  }
]

  constructor() { }

  getFilteredQuestions(subject: string, level: string) {
    return this.questions.filter(q => q.subject === subject && q.type === level);
  }

  getquestions(){
    return this.questions;
  }
}
