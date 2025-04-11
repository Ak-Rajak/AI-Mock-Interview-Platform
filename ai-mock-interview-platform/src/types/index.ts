import { FieldValue, Timestamp } from "firebase/firestore";

export interface User{
    id : string;
    name : string ;
    email : string;
    imageUrl : string;
    createdAt : Timestamp | FieldValue;
    updateAt: Timestamp | FieldValue;
}

export interface Interview{
    id: string;
    position : string;
    description : string;
    experience : string;
    userId: string;
    techStack : string;
    questions: {questions: string; answer: string}[];
    createdAt: Timestamp;
    updatedAt: Timestamp; 
}

export interface UserAnswer {
    id : string;
    mockIdRef : string;
    question : string;
    user_ans: string;
    correct_ans: string;
    feedback:string;
    rating: number;
    userId: string;
    createdAt: Timestamp;
    updateAt: Timestamp;
}
