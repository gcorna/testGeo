export interface Todo {
    id: number | null;
    title: string;
    description?: string;
    priority: number;
    status: boolean;
}
