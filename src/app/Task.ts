export interface Task {
    id? : number ;
    text : string ;
    day : string|Date;
    reminder : boolean;
    done : boolean
}