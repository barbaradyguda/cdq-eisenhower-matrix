export interface Task {
    urgent: boolean;
    important: boolean;
    id?: number;
    title: string;
    comment?: string;
    deadline?: number;
    category?: string; 
    isDone: boolean;
}