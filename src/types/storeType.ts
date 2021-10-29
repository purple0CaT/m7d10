interface ReduxStore {
  user: {
    name: string;
  };
  weather: {
    search: string;
    data: any;
    //   today: {}
  };
}

export type { ReduxStore };
