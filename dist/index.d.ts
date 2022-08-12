declare const _exports: {
    new (): {
        distance(lat1: number, lon1: number, lat2: number, lon2: number, unit: string): number;
        nearest(ip: string, radius?: number, limit?: number, unit?: string): Promise<{
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
