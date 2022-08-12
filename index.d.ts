export default class IP2Airport {
    distance(lat1: number, lon1: number, lat2: number, lon2: number, unit: string): number;
    nearest(ip: string, radius?: number, limit?: number, unit?: string): Promise<{
        distance: number;
        country_code: string;
        region_name: string;
        iata: string;
        airport: string;
        ll: number[];
    }[]>;
}
