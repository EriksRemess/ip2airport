declare const _exports: {
  new (): {
    distance(lat1: number, lon1: number, lat2: number, lon2: number, unit: string): number;
    location(ip: string): Promise<{
      range: [ number, number ];
      country: string;
      region: string;
      eu: string;
      timezone: string;
      city: string;
      ll: [ number, number ];
      metro: number;
      area: number;
    }>;
    nearest(ip: string, radius?: number | null, limit?: number, unit?: string): Promise<{
      distance: number;
      country_code: string;
      region_name: string;
      iata: string;
      airport: string;
      ll: number[];
    }[]>;
  };
};
export = _exports;
