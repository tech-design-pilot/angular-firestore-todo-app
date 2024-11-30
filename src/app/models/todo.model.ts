export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    dueDate: Date;
    priority: "High" | "Medium" | "Low";
}