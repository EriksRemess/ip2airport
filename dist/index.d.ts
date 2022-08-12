declare const _exports: {
    new (): {
        distance(lat1: any, lon1: any, lat2: any, lon2: any, unit: any): string;
        nearest(ip: any, radius?: number, limit?: number, unit?: string): Promise<{
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
