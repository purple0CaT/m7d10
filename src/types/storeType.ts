interface ReduxStore {
  user: {
    name: string;
  };
  weather: {
    search: string;
    oneday: any;
    days: any;
    latest: any;
    loading: boolean;
    mycord: MyCords;
  };
}
interface MyCords {
  longitude: null;
  latitude: null;
}

export type { ReduxStore, MyCords };
