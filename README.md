# ip2airport - IP to nearest airport lookup

simple module to lookup the nearest airport to a given IP address

## Installation

```js

import IP2Airport from 'ip2airport';

const ip2airport = new IP2Airport();

// 100km radius, 5 nearest airports
const nearestAirports = ip2airport.lookup('my-ip-address', 100, 5);

```

## License
This module is licensed under [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

The IATA/ICAO list data is licensed under [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/). It is free for personal or commercial use with attribution required by mentioning the use of this data as follows,
**This site or product includes IATA/ICAO List data available from <a href="https://www.ip2location.com">http://www.ip2location.com</a>.**

IATA is a registered trademark of International Air Transport Association.
ICAO is a registered trademark of International Civil Aviation Organization.
All other product names mentioned on this repository may be trademarks or registered trademarks of their respective companies.
