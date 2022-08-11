# ip2airport - IP to nearest airport lookup

simple module to lookup the nearest airport to a given IP address. Public data from https://ourairports.com/data/.

## Example

```js
import IP2Airport from 'ip2airport';

const ip2airport = new IP2Airport();

// 100km radius, 5 nearest airports
const nearestAirports = await ip2airport.nearest('50.112.136.166', 100, 5);

console.log(nearestAirports);
```

## Sample output

```js
[
  {
    country_code: 'US',
    region_name: 'Pasco',
    iata: 'PSC',
    airport: 'Tri Cities Airport',
    ll: [ 46.26470184326172, -119.11900329589844 ],
    distance: '65.16'
  }
]
```
