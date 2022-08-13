export interface TodoState {
    todos: any[],
    loading: boolean,
    error: string | null,
    page: number,
    limit: number,
}
