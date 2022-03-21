interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

export type MyReadonly2<T, U> = {
  readonly [key in keyof T as key extends U ? key : never]: T[key];
} & {
  [K in keyof T]: T[K]
}