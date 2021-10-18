interface Task {
  user_id: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TaskApiResponseMultiple {
  totalItems: number;
  data: Task[];
}

type TaskApiResponse = Task