import { FieldValue, Timestamp } from "firebase/firestore";

// This is the type file for safety check 
// This type is defined for the user object in the database
export interface User{
    id : string;
    name : string ;
    email : string;
    imageUrl : string;
    createdAt : Timestamp | FieldValue;
    updateAt: Timestamp | FieldValue;
}

// This type is defined for the mock interview object in the database , interview
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

// This type is defined for the mock interview UserAnswer object type
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
