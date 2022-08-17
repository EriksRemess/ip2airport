import geoip from 'geoip-lite';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const airports = require('./airports.json');
const { lookup } = geoip;

export default class IP2Airport {
  constructor() {}
  airports() {
    return airports;
  }
  distance(lat1, lon1, lat2, lon2, unit) {
    const radlat1 = Math.PI * lat1 / 180;
    const radlat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist.toFixed(2);
  }
  async location(ip) {
    if (!ip) {
      throw new Error('ip is required');
    }
    const location = await lookup(ip);
    if (!location) {
      throw new Error('ip is not valid or location not found');
    }
    return location;
  }
  async nearest(ip, radius = null, limit = 10, unit = 'K') {
    const location = await this.location(ip);
    let list = [];
    for (const airport of airports) {
      const distance = this.distance(location.ll[0], location.ll[1], airport.ll[0], airport.ll[1], unit);
      list.push({
        ...airport,
        distance: parseFloat(distance)
      });
    }
    list = list.sort((a, b) => a.distance - b.distance);
    if (list.length > limit) {
      list = list.slice(0, limit);
    }
    if (radius) {
      list = list.filter(airport => airport.distance < radius);
    }
    return list;
  }
}
