interface ReduxStore {
  user: {
    name: string;
  };
  weather: {
    search: string;
    oneday: any;
    fourday: any;
    latest: any;
    loading: boolean;
  };
}

export type { ReduxStore };
