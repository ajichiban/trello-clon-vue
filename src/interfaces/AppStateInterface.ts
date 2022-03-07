

export interface Task {
  id: string;
  text: string;
}

export interface List{
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

export interface AppStateMutations {
  addList: (text : string) => void;
  addTask: (listId: string, text: string) => void;
}




