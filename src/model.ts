export interface Task {
    urgent: boolean;
    important: boolean;
    id: number;
    title: string;
    comment?: string;
    deadline?: Date;
    category?: string; 
    isDone: boolean;
    accepts: string[];
}