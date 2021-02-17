import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    idCount: 3,
    tasks: [
      {
        id: 1,
        title: "TASK A",
        completed: false,
      },
      {
        id: 2,
        title: "TASK B",
        completed: true,
      },
      {
        id: 3,
        title: "TASK C",
        completed: false,
      },
    ],
  },
  reducers: {
    //タスクを作成する処理
    newTask: (state, action) => {
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },

    //タスクのチェックボックスがtrueかfalseか判断する処理
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },

    //タスクを削除する処理
    deleteTask: (state, action) => {
      //選択されたタスク以外のものをtasksに上書きする
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
