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
    history: any[];
    mycord: MyCords;
  };
}
interface MyCords {
  longitude: number | null;
  latitude: number | null;
}
interface IpType {
  country_code: string;
  country_name: string;
  city: string;
  postal: string;
  latitude: number;
  longitude: number;
  IPv4: string;
  state: string;
}

export type { ReduxStore, MyCords, IpType };
