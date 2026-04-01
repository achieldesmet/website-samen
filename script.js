let airports = [];
let topAirports = [];
let aircrafts = [];
let airlines = [];

const BASELINE_ANNUAL_KG = 1500;
const EMBEDDED_TOP_AIRPORTS = [
  { code: "ATL", name: "Hartsfield-Jackson Atlanta Intl", city: "Atlanta", lat: 33.6407, lon: -84.4277, type: "large_airport" },
  { code: "LAX", name: "Los Angeles Intl", city: "Los Angeles", lat: 33.9416, lon: -118.4085, type: "large_airport" },
  { code: "ORD", name: "O'Hare Intl", city: "Chicago", lat: 41.9742, lon: -87.9073, type: "large_airport" },
  { code: "DFW", name: "Dallas/Fort Worth Intl", city: "Dallas", lat: 32.8998, lon: -97.0403, type: "large_airport" },
  { code: "DEN", name: "Denver Intl", city: "Denver", lat: 39.8561, lon: -104.6737, type: "large_airport" },
  { code: "JFK", name: "John F. Kennedy Intl", city: "New York", lat: 40.6413, lon: -73.7781, type: "large_airport" },
  { code: "SFO", name: "San Francisco Intl", city: "San Francisco", lat: 37.6213, lon: -122.379, type: "large_airport" },
  { code: "SEA", name: "Seattle-Tacoma Intl", city: "Seattle", lat: 47.4502, lon: -122.3088, type: "large_airport" },
  { code: "MIA", name: "Miami Intl", city: "Miami", lat: 25.7959, lon: -80.2871, type: "large_airport" },
  { code: "LAS", name: "Harry Reid Intl", city: "Las Vegas", lat: 36.084, lon: -115.1537, type: "large_airport" },
  { code: "MCO", name: "Orlando Intl", city: "Orlando", lat: 28.4312, lon: -81.3081, type: "large_airport" },
  { code: "PHX", name: "Phoenix Sky Harbor Intl", city: "Phoenix", lat: 33.4342, lon: -112.0116, type: "large_airport" },
  { code: "IAH", name: "George Bush Intercontinental", city: "Houston", lat: 29.99, lon: -95.3368, type: "large_airport" },
  { code: "BOS", name: "Logan Intl", city: "Boston", lat: 42.3656, lon: -71.0096, type: "large_airport" },
  { code: "EWR", name: "Newark Liberty Intl", city: "Newark", lat: 40.6895, lon: -74.1745, type: "large_airport" },
  { code: "CLT", name: "Charlotte Douglas Intl", city: "Charlotte", lat: 35.214, lon: -80.9431, type: "large_airport" },
  { code: "MSP", name: "Minneapolis-Saint Paul Intl", city: "Minneapolis", lat: 44.8848, lon: -93.2223, type: "large_airport" },
  { code: "DTW", name: "Detroit Metro", city: "Detroit", lat: 42.2162, lon: -83.3554, type: "large_airport" },
  { code: "PHL", name: "Philadelphia Intl", city: "Philadelphia", lat: 39.8744, lon: -75.2424, type: "large_airport" },
  { code: "LGA", name: "LaGuardia", city: "New York", lat: 40.7769, lon: -73.874, type: "large_airport" },
  { code: "DCA", name: "Ronald Reagan Washington National", city: "Washington", lat: 38.8512, lon: -77.0402, type: "large_airport" },
  { code: "BWI", name: "Baltimore/Washington Intl", city: "Baltimore", lat: 39.1774, lon: -76.6684, type: "large_airport" },
  { code: "SLC", name: "Salt Lake City Intl", city: "Salt Lake City", lat: 40.7899, lon: -111.9791, type: "large_airport" },
  { code: "YVR", name: "Vancouver Intl", city: "Vancouver", lat: 49.195, lon: -123.1779, type: "large_airport" },
  { code: "YYZ", name: "Toronto Pearson Intl", city: "Toronto", lat: 43.6777, lon: -79.6248, type: "large_airport" },
  { code: "YUL", name: "Montreal-Trudeau", city: "Montreal", lat: 45.4706, lon: -73.7408, type: "large_airport" },
  { code: "MEX", name: "Mexico City Intl", city: "Mexico City", lat: 19.4363, lon: -99.0721, type: "large_airport" },
  { code: "GRU", name: "Sao Paulo Guarulhos", city: "Sao Paulo", lat: -23.4356, lon: -46.4731, type: "large_airport" },
  { code: "GIG", name: "Rio de Janeiro Galeao", city: "Rio de Janeiro", lat: -22.809, lon: -43.2506, type: "large_airport" },
  { code: "EZE", name: "Ministro Pistarini Intl", city: "Buenos Aires", lat: -34.8222, lon: -58.5358, type: "large_airport" },
  { code: "SCL", name: "Arturo Merino Benitez", city: "Santiago", lat: -33.3929, lon: -70.7858, type: "large_airport" },
  { code: "LIM", name: "Jorge Chavez Intl", city: "Lima", lat: -12.0219, lon: -77.1143, type: "large_airport" },
  { code: "BOG", name: "El Dorado Intl", city: "Bogota", lat: 4.7016, lon: -74.1469, type: "large_airport" },
  { code: "PTY", name: "Tocumen Intl", city: "Panama City", lat: 9.0714, lon: -79.3835, type: "large_airport" },
  { code: "MAD", name: "Adolfo Suarez Madrid-Barajas", city: "Madrid", lat: 40.4719, lon: -3.5626, type: "large_airport" },
  { code: "BCN", name: "Barcelona El Prat", city: "Barcelona", lat: 41.2974, lon: 2.0833, type: "large_airport" },
  { code: "LHR", name: "Heathrow", city: "London", lat: 51.47, lon: -0.4543, type: "large_airport" },
  { code: "LGW", name: "Gatwick", city: "London", lat: 51.1537, lon: -0.1821, type: "large_airport" },
  { code: "CDG", name: "Charles de Gaulle", city: "Paris", lat: 49.0097, lon: 2.5479, type: "large_airport" },
  { code: "ORY", name: "Paris Orly", city: "Paris", lat: 48.7262, lon: 2.3652, type: "large_airport" },
  { code: "AMS", name: "Schiphol", city: "Amsterdam", lat: 52.31, lon: 4.7683, type: "large_airport" },
  { code: "FRA", name: "Frankfurt", city: "Frankfurt", lat: 50.0379, lon: 8.5622, type: "large_airport" },
  { code: "MUC", name: "Munich", city: "Munich", lat: 48.3538, lon: 11.7861, type: "large_airport" },
  { code: "ZRH", name: "Zurich", city: "Zurich", lat: 47.4581, lon: 8.5555, type: "large_airport" },
  { code: "VIE", name: "Vienna Intl", city: "Vienna", lat: 48.1103, lon: 16.5697, type: "large_airport" },
  { code: "BRU", name: "Brussels Airport", city: "Brussels", lat: 50.9014, lon: 4.4844, type: "large_airport" },
  { code: "CPH", name: "Copenhagen", city: "Copenhagen", lat: 55.6181, lon: 12.656, type: "large_airport" },
  { code: "ARN", name: "Stockholm Arlanda", city: "Stockholm", lat: 59.6498, lon: 17.9238, type: "large_airport" },
  { code: "OSL", name: "Oslo Gardermoen", city: "Oslo", lat: 60.1939, lon: 11.1004, type: "large_airport" },
  { code: "HEL", name: "Helsinki", city: "Helsinki", lat: 60.3172, lon: 24.9633, type: "large_airport" },
  { code: "DUB", name: "Dublin", city: "Dublin", lat: 53.4213, lon: -6.2701, type: "large_airport" },
  { code: "LIS", name: "Lisbon", city: "Lisbon", lat: 38.7742, lon: -9.1342, type: "large_airport" },
  { code: "OPO", name: "Porto", city: "Porto", lat: 41.2481, lon: -8.6814, type: "large_airport" },
  { code: "FCO", name: "Rome Fiumicino", city: "Rome", lat: 41.8003, lon: 12.2389, type: "large_airport" },
  { code: "MXP", name: "Milan Malpensa", city: "Milan", lat: 45.6306, lon: 8.7281, type: "large_airport" },
  { code: "ATH", name: "Athens Intl", city: "Athens", lat: 37.9364, lon: 23.9445, type: "large_airport" },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", lat: 41.2753, lon: 28.7519, type: "large_airport" },
  { code: "SAW", name: "Sabiha Gokcen", city: "Istanbul", lat: 40.8986, lon: 29.3092, type: "large_airport" },
  { code: "WAW", name: "Warsaw Chopin", city: "Warsaw", lat: 52.1657, lon: 20.9671, type: "large_airport" },
  { code: "PRG", name: "Vaclav Havel Airport Prague", city: "Prague", lat: 50.1008, lon: 14.26, type: "large_airport" },
  { code: "BUD", name: "Budapest Ferenc Liszt", city: "Budapest", lat: 47.4369, lon: 19.2556, type: "large_airport" },
  { code: "OTP", name: "Henri Coanda Intl", city: "Bucharest", lat: 44.5711, lon: 26.085, type: "large_airport" },
  { code: "TLV", name: "Ben Gurion", city: "Tel Aviv", lat: 32.0005, lon: 34.8708, type: "large_airport" },
  { code: "CAI", name: "Cairo Intl", city: "Cairo", lat: 30.1219, lon: 31.4056, type: "large_airport" },
  { code: "CMN", name: "Mohammed V Intl", city: "Casablanca", lat: 33.3675, lon: -7.5899, type: "large_airport" },
  { code: "ADD", name: "Addis Ababa Bole Intl", city: "Addis Ababa", lat: 8.9779, lon: 38.7993, type: "large_airport" },
  { code: "NBO", name: "Jomo Kenyatta Intl", city: "Nairobi", lat: -1.3192, lon: 36.9278, type: "large_airport" },
  { code: "JNB", name: "OR Tambo Intl", city: "Johannesburg", lat: -26.1337, lon: 28.242, type: "large_airport" },
  { code: "CPT", name: "Cape Town Intl", city: "Cape Town", lat: -33.97, lon: 18.6021, type: "large_airport" },
  { code: "DXB", name: "Dubai Intl", city: "Dubai", lat: 25.2532, lon: 55.3657, type: "large_airport" },
  { code: "DWC", name: "Al Maktoum Intl", city: "Dubai", lat: 24.8964, lon: 55.1614, type: "large_airport" },
  { code: "AUH", name: "Abu Dhabi Intl", city: "Abu Dhabi", lat: 24.4329, lon: 54.6511, type: "large_airport" },
  { code: "DOH", name: "Hamad Intl", city: "Doha", lat: 25.2731, lon: 51.6081, type: "large_airport" },
  { code: "RUH", name: "King Khalid Intl", city: "Riyadh", lat: 24.9576, lon: 46.6988, type: "large_airport" },
  { code: "JED", name: "King Abdulaziz Intl", city: "Jeddah", lat: 21.6796, lon: 39.1565, type: "large_airport" },
  { code: "DEL", name: "Indira Gandhi Intl", city: "Delhi", lat: 28.5562, lon: 77.1, type: "large_airport" },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj Intl", city: "Mumbai", lat: 19.0896, lon: 72.8656, type: "large_airport" },
  { code: "BLR", name: "Kempegowda Intl", city: "Bengaluru", lat: 13.1986, lon: 77.7066, type: "large_airport" },
  { code: "MAA", name: "Chennai Intl", city: "Chennai", lat: 12.99, lon: 80.1693, type: "large_airport" },
  { code: "HYD", name: "Rajiv Gandhi Intl", city: "Hyderabad", lat: 17.2313, lon: 78.4299, type: "large_airport" },
  { code: "CCU", name: "Netaji Subhas Chandra Bose Intl", city: "Kolkata", lat: 22.6547, lon: 88.4467, type: "large_airport" },
  { code: "KTM", name: "Tribhuvan Intl", city: "Kathmandu", lat: 27.6966, lon: 85.3591, type: "large_airport" },
  { code: "DAC", name: "Hazrat Shahjalal Intl", city: "Dhaka", lat: 23.8433, lon: 90.3978, type: "large_airport" },
  { code: "CMB", name: "Bandaranaike Intl", city: "Colombo", lat: 7.1808, lon: 79.8841, type: "large_airport" },
  { code: "BKK", name: "Suvarnabhumi", city: "Bangkok", lat: 13.69, lon: 100.7501, type: "large_airport" },
  { code: "DMK", name: "Don Mueang Intl", city: "Bangkok", lat: 13.9126, lon: 100.607, type: "large_airport" },
  { code: "SIN", name: "Changi", city: "Singapore", lat: 1.3644, lon: 103.9915, type: "large_airport" },
  { code: "KUL", name: "Kuala Lumpur Intl", city: "Kuala Lumpur", lat: 2.7456, lon: 101.7072, type: "large_airport" },
  { code: "CGK", name: "Soekarno-Hatta", city: "Jakarta", lat: -6.1256, lon: 106.6558, type: "large_airport" },
  { code: "DPS", name: "Ngurah Rai Intl", city: "Denpasar", lat: -8.7482, lon: 115.1672, type: "large_airport" },
  { code: "MNL", name: "Ninoy Aquino Intl", city: "Manila", lat: 14.5086, lon: 121.0198, type: "large_airport" },
  { code: "HAN", name: "Noi Bai Intl", city: "Hanoi", lat: 21.2212, lon: 105.8072, type: "large_airport" },
  { code: "SGN", name: "Tan Son Nhat Intl", city: "Ho Chi Minh City", lat: 10.8188, lon: 106.6519, type: "large_airport" },
  { code: "HKG", name: "Hong Kong Intl", city: "Hong Kong", lat: 22.308, lon: 113.9185, type: "large_airport" },
  { code: "TPE", name: "Taoyuan Intl", city: "Taipei", lat: 25.0797, lon: 121.2342, type: "large_airport" },
  { code: "ICN", name: "Incheon Intl", city: "Seoul", lat: 37.4602, lon: 126.4407, type: "large_airport" },
  { code: "GMP", name: "Gimpo Intl", city: "Seoul", lat: 37.5583, lon: 126.7906, type: "large_airport" },
  { code: "NRT", name: "Narita Intl", city: "Tokyo", lat: 35.7732, lon: 140.3874, type: "large_airport" },
  { code: "HND", name: "Haneda", city: "Tokyo", lat: 35.5494, lon: 139.7798, type: "large_airport" },
  { code: "KIX", name: "Kansai Intl", city: "Osaka", lat: 34.4347, lon: 135.2442, type: "large_airport" },
  { code: "ITM", name: "Osaka Intl", city: "Osaka", lat: 34.7855, lon: 135.4382, type: "large_airport" },
  { code: "NGO", name: "Chubu Centrair Intl", city: "Nagoya", lat: 34.8584, lon: 136.8054, type: "large_airport" },
  { code: "FUK", name: "Fukuoka", city: "Fukuoka", lat: 33.5859, lon: 130.4507, type: "large_airport" },
  { code: "PEK", name: "Beijing Capital Intl", city: "Beijing", lat: 40.0799, lon: 116.6031, type: "large_airport" },
  { code: "PKX", name: "Beijing Daxing Intl", city: "Beijing", lat: 39.5098, lon: 116.4105, type: "large_airport" },
  { code: "PVG", name: "Shanghai Pudong Intl", city: "Shanghai", lat: 31.1443, lon: 121.8083, type: "large_airport" },
  { code: "SHA", name: "Shanghai Hongqiao Intl", city: "Shanghai", lat: 31.1979, lon: 121.3363, type: "large_airport" },
  { code: "CAN", name: "Guangzhou Baiyun Intl", city: "Guangzhou", lat: 23.3924, lon: 113.2991, type: "large_airport" },
  { code: "SZX", name: "Shenzhen Bao'an Intl", city: "Shenzhen", lat: 22.6393, lon: 113.8107, type: "large_airport" },
  { code: "CTU", name: "Chengdu Shuangliu Intl", city: "Chengdu", lat: 30.5785, lon: 103.9471, type: "large_airport" },
  { code: "XIY", name: "Xi'an Xianyang Intl", city: "Xi'an", lat: 34.4471, lon: 108.7516, type: "large_airport" },
  { code: "HGH", name: "Hangzhou Xiaoshan Intl", city: "Hangzhou", lat: 30.2295, lon: 120.4345, type: "large_airport" },
  { code: "MEL", name: "Melbourne", city: "Melbourne", lat: -37.669, lon: 144.841, type: "large_airport" },
  { code: "SYD", name: "Sydney Kingsford Smith", city: "Sydney", lat: -33.9399, lon: 151.1753, type: "large_airport" },
  { code: "BNE", name: "Brisbane", city: "Brisbane", lat: -27.3842, lon: 153.1175, type: "large_airport" },
  { code: "PER", name: "Perth", city: "Perth", lat: -31.9403, lon: 115.9672, type: "large_airport" },
  { code: "AKL", name: "Auckland", city: "Auckland", lat: -37.0082, lon: 174.785, type: "large_airport" },
  { code: "CHC", name: "Christchurch", city: "Christchurch", lat: -43.4894, lon: 172.5322, type: "large_airport" },
  { code: "HNL", name: "Honolulu", city: "Honolulu", lat: 21.3187, lon: -157.9225, type: "large_airport" },
  { code: "GUM", name: "Antonio B. Won Pat Intl", city: "Guam", lat: 13.4839, lon: 144.796, type: "large_airport" },
  { code: "KEF", name: "Keflavik Intl", city: "Reykjavik", lat: 63.985, lon: -22.6056, type: "large_airport" },
  { code: "RKV", name: "Reykjavik Airport", city: "Reykjavik", lat: 64.13, lon: -21.9406, type: "medium_airport" },
  { code: "GVA", name: "Geneva", city: "Geneva", lat: 46.2381, lon: 6.109, type: "large_airport" },
  { code: "NCE", name: "Nice Cote d'Azur", city: "Nice", lat: 43.6584, lon: 7.2159, type: "large_airport" },
  { code: "PMI", name: "Palma de Mallorca", city: "Palma", lat: 39.5517, lon: 2.7388, type: "large_airport" },
  { code: "VLC", name: "Valencia", city: "Valencia", lat: 39.4893, lon: -0.4816, type: "large_airport" },
  { code: "AGP", name: "Malaga-Costa del Sol", city: "Malaga", lat: 36.6749, lon: -4.4991, type: "large_airport" },
  { code: "NAP", name: "Naples Intl", city: "Naples", lat: 40.886, lon: 14.2908, type: "large_airport" },
  { code: "TRN", name: "Turin Airport", city: "Turin", lat: 45.2008, lon: 7.6496, type: "large_airport" },
  { code: "HAM", name: "Hamburg", city: "Hamburg", lat: 53.6304, lon: 9.9882, type: "large_airport" },
  { code: "DUS", name: "Dusseldorf", city: "Dusseldorf", lat: 51.2895, lon: 6.7668, type: "large_airport" },
  { code: "TXL", name: "Berlin Tegel", city: "Berlin", lat: 52.5597, lon: 13.2877, type: "medium_airport" }
];

const EMBEDDED_AIRLINES = [
  { name: "Aegean Airlines", fleetAge: 8.6 }, 
  { name: "Aer Lingus", fleetAge: 12.6 }, 
  { name: "Aeromexico", fleetAge: 7.4 }, 
  { name: "Air Baltic", fleetAge: 4.9 }, 
  { name: "Air Canada", fleetAge: 11.8 }, 
  { name: "Air China", fleetAge: 9.9 }, 
  { name: "Air Europa", fleetAge: 10.3 }, 
  { name: "Air France", fleetAge: 14.2 }, 
  { name: "Air India", fleetAge: 9.3 }, 
  { name: "Air Malta", fleetAge: 11.2 }, 
  { name: "Air Mauritius", fleetAge: 9.8 }, 
  { name: "Air New Zealand", fleetAge: 7.5 }, 
  { name: "Air Serbia", fleetAge: 12.1 }, 
  { name: "Air Tahiti Nui", fleetAge: 6.7 }, 
  { name: "Alaska Airlines", fleetAge: 10.9 }, 
  { name: "Alitalia", fleetAge: 14.4 }, 
  { name: "All Nippon Airways", fleetAge: 9.1 }, 
  { name: "American Airlines", fleetAge: 12.8 }, 
  { name: "Asiana Airlines", fleetAge: 10.5 }, 
  { name: "Austrian Airlines", fleetAge: 15.3 }, 
  { name: "Avianca", fleetAge: 9.7 }, 
  { name: "Bangkok Airways", fleetAge: 8.2 }, 
  { name: "British Airways", fleetAge: 13.6 }, 
  { name: "Brussels Airlines", fleetAge: 11.2 }, 
  { name: "Cathay Pacific", fleetAge: 10.4 }, 
  { name: "China Airlines", fleetAge: 9.6 }, 
  { name: "China Eastern", fleetAge: 7.8 }, 
  { name: "China Southern", fleetAge: 7.5 }, 
  { name: "Condor", fleetAge: 16.1 }, 
  { name: "Copa Airlines", fleetAge: 6.9 }, 
  { name: "Croatia Airlines", fleetAge: 13.9 }, 
  { name: "Czech Airlines", fleetAge: 15.0 }, 
  { name: "Delta Air Lines", fleetAge: 14.8 }, 
  { name: "EasyJet", fleetAge: 8.3 }, 
  { name: "EgyptAir", fleetAge: 10.7 }, 
  { name: "El Al", fleetAge: 13.2 }, 
  { name: "Emirates", fleetAge: 6.5 }, 
  { name: "Ethiopian Airlines", fleetAge: 6.8 }, 
  { name: "Etihad Airways", fleetAge: 5.9 }, 
  { name: "EVA Air", fleetAge: 7.2 }, 
  { name: "Finnair", fleetAge: 11.4 }, 
  { name: "Garuda Indonesia", fleetAge: 8.1 }, 
  { name: "Gulf Air", fleetAge: 6.6 }, 
  { name: "Hainan Airlines", fleetAge: 7.0 }, 
  { name: "Hawaiian Airlines", fleetAge: 9.0 }, 
  { name: "Iberia", fleetAge: 12.5 }, 
  { name: "Icelandair", fleetAge: 15.6 }, 
  { name: "IndiGo", fleetAge: 4.2 }, 
  { name: "Japan Airlines", fleetAge: 9.8 }, 
  { name: "JetBlue Airways", fleetAge: 10.1 }, 
  { name: "Kenya Airways", fleetAge: 11.7 }, 
  { name: "KLM", fleetAge: 13.3 }, 
  { name: "Korean Air", fleetAge: 10.6 }, 
  { name: "LATAM Airlines", fleetAge: 9.4 }, 
  { name: "LOT Polish Airlines", fleetAge: 10.2 }, 
  { name: "Lufthansa", fleetAge: 14.1 }, 
  { name: "Luxair", fleetAge: 12.0 }, 
  { name: "Malaysia Airlines", fleetAge: 12.7 }, 
  { name: "Middle East Airlines", fleetAge: 8.8 }, 
  { name: "Norwegian Air Shuttle", fleetAge: 6.3 }, 
  { name: "Oman Air", fleetAge: 7.6 }, 
  { name: "Pakistan International Airlines", fleetAge: 16.4 }, 
  { name: "Philippine Airlines", fleetAge: 9.5 }, 
  { name: "Qantas", fleetAge: 14.9 }, 
  { name: "Qatar Airways", fleetAge: 5.4 }, 
  { name: "Ryanair", fleetAge: 8.0 }, 
  { name: "SAS Scandinavian Airlines", fleetAge: 8.7 }, 
  { name: "Saudia", fleetAge: 10.9 }, 
  { name: "Scoot", fleetAge: 6 },
  { name: "Singapore Airlines", fleetAge: 8.6 }, 
  { name: "Southwest Airlines", fleetAge: 11.2 }, 
  { name: "Sky Airline", fleetAge: 5.2 },
  { name: "Smartwings", fleetAge: 11.6 },
  { name: "Spirit Airlines", fleetAge: 8.2 },
  { name: "Sun-air of Scandinavia", fleetAge: 25.3 },
  { name: "SunExpress", fleetAge: 9.6 }, 
  { name: "Swiss", fleetAge: 11.2 }, 
  { name: "Tailwind Airlines", fleetAge: 25.6 },
  { name: "TAP Air Portugal", fleetAge: 10.9 },
  { name: "TAROM", fleetAge: 13.2 }, 
  { name: "Thai Airways", fleetAge: 10.7 },
  { name: "Transavia", fleetAge: 10 },
  { name: "TUI Airways", fleetAge: 9.6 }, 
  { name: "TUI fly Belgium", fleetAge: 8.8 },
  { name: "TUI fly Netherlands", fleetAge: 8.1 },
  { name: "Turkish Airlines", fleetAge: 9.6 }, 
  { name: "United Airlines", fleetAge: 15.2 }, 
  { name: "Vietnam Airlines", fleetAge: 10.4 },  
  { name: "Volotea", fleetAge: 18.9 }, 
  { name: "WestJet", fleetAge: 11.2 }, 
  { name: "Wizz Air", fleetAge: 6.3 },
  { name: "Wizz Air Malta", fleetAge: 3.3 }
];

const form = document.getElementById("co2-form");
const departureInput = document.getElementById("departureInput");
const arrivalInput = document.getElementById("arrivalInput");
const departureSuggestions = document.getElementById("departureSuggestions");
const arrivalSuggestions = document.getElementById("arrivalSuggestions");
const airlineSuggestions = document.getElementById("airlineSuggestions");
const aircraftInput = document.getElementById("aircraftInput");
const airlineInput = document.getElementById("airlineInput");

const resultPanel = document.getElementById("resultPanel");
const distanceOut = document.getElementById("distanceOut");
const co2Out = document.getElementById("co2Out");
const co2TotalAircraftOut = document.getElementById("co2TotalAircraftOut");
const seatsOut = document.getElementById("seatsOut");
const treesOut = document.getElementById("treesOut");
const treeCompareOut = document.getElementById("treeCompareOut");
const fleetAgeOut = document.getElementById("fleetAgeOut");
const ageFactorOut = document.getElementById("ageFactorOut");
const yearlyShareOut = document.getElementById("yearlyShareOut");
const routeOut = document.getElementById("routeOut");
const airlineOut = document.getElementById("airlineOut");
const aircraftOut = document.getElementById("aircraftOut");
const durationOut = document.getElementById("durationOut");
const sustainabilityBadge = document.getElementById("sustainabilityBadge");

const airlineList = document.getElementById("airlineList");
const themeToggle = document.getElementById("themeToggle");

let yearlyChart = null;

init();

async function init() {
  restoreTheme();
  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);

  airports = await loadAirports();
  topAirports = pickTopAirports(airports, 120);
  aircrafts = await loadAircrafts();
  airlines = await loadAirlines();

  renderAircraftList();
  renderAirlineList();
  bindTypeAhead();

  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculate();
  });
  form.addEventListener("reset", () => {
    setTimeout(() => {
      resultPanel.hidden = true;
      hideSuggestions(departureSuggestions);
      hideSuggestions(arrivalSuggestions);
      if (yearlyChart) yearlyChart.destroy();
    }, 0);
  });
}

async function loadAirports() {
  const raw = await fetchText("excel bestanden/airports.csv");
  if (!raw) return [...EMBEDDED_TOP_AIRPORTS];
  const all = parseAirportCsvFast(raw);
  if (all.length >= 120) return all;
  return [...EMBEDDED_TOP_AIRPORTS];
}

async function loadAircrafts() {
  const defaults = [
    { model: "Airbus A320neo", co2PerKm: 6.2, seats: 180, category: "small" },
    { model: "Airbus A321neo", co2PerKm: 6.9, seats: 220, category: "small" },
    { model: "Boeing 737-800", co2PerKm: 6.8, seats: 189, category: "small" },
    { model: "Boeing 737 MAX 8", co2PerKm: 6.4, seats: 178, category: "small" },
    { model: "Airbus A330-300", co2PerKm: 10.8, seats: 300, category: "wide" },
    { model: "Airbus A350-900", co2PerKm: 9.9, seats: 325, category: "wide" },
    { model: "Boeing 777-300ER", co2PerKm: 12.7, seats: 368, category: "wide" },
    { model: "Boeing 787-9", co2PerKm: 10.2, seats: 290, category: "wide" },
    { model: "Airbus A380-800", co2PerKm: 15.2, seats: 500, category: "jumbo" },
    { model: "Boeing 747-8", co2PerKm: 16.1, seats: 467, category: "jumbo" },
    { model: "Boeing 747-400", co2PerKm: 17.0, seats: 416, category: "jumbo" },
  ];

  const csv = await fetchText("excel bestanden/verbruik.csv");
  if (csv) {
    const parsed = parseAircraftCsv(csv);
    if (parsed.length) return parsed.slice(0, 11);
  }
  const txt = await fetchText("excel bestanden/verbruik.txt");
  if (txt) {
    const parsed = parseAircraftText(txt);
    if (parsed.length) return parsed.slice(0, 11);
  }
  const docx = await parseAircraftDocx("excel bestanden/verbruik.docx");
  if (docx.length) return docx.slice(0, 11);

  return defaults;
}

async function loadAirlines() {
  // Vast in code, zodat het nooit meer "breekt".
  // Als je later wil uitbreiden: voeg entries toe in EMBEDDED_AIRLINES hierboven.
  return [...EMBEDDED_AIRLINES];
}

function bindTypeAhead() {
  bindOneTypeAhead(departureInput, departureSuggestions);
  bindOneTypeAhead(arrivalInput, arrivalSuggestions);
  bindAirlineTypeAhead();
  document.addEventListener("click", (event) => {
    if (!departureSuggestions.contains(event.target) && event.target !== departureInput) hideSuggestions(departureSuggestions);
    if (!arrivalSuggestions.contains(event.target) && event.target !== arrivalInput) hideSuggestions(arrivalSuggestions);
    if (airlineSuggestions && !airlineSuggestions.contains(event.target) && event.target !== airlineInput) hideSuggestions(airlineSuggestions);
  });
}

function bindOneTypeAhead(inputEl, boxEl) {
  const render = () => {
    const query = inputEl.value.trim().toLowerCase();
    const source = query.length >= 2
      ? topAirports.filter((a) => `${a.code} ${a.name} ${a.city}`.toLowerCase().includes(query))
      : topAirports;
    const shown = source.slice(0, 12);
    if (!shown.length) {
      hideSuggestions(boxEl);
      return;
    }
    boxEl.innerHTML = shown
      .map((a) => `<div class="suggestion-item" data-value="${a.code} - ${a.name} (${a.city})">${a.code} - ${a.name} (${a.city})</div>`)
      .join("");
    boxEl.classList.add("visible");
    boxEl.querySelectorAll(".suggestion-item").forEach((item) => {
      item.addEventListener("click", () => {
        inputEl.value = item.getAttribute("data-value") || "";
        hideSuggestions(boxEl);
      });
    });
  };
  inputEl.addEventListener("focus", render);
  inputEl.addEventListener("input", render);
}

function hideSuggestions(boxEl) {
  boxEl.classList.remove("visible");
}

function calculate() {
  const dep = findAirport(departureInput.value);
  const arr = findAirport(arrivalInput.value);
  if (!dep || !arr) {
    alert("Selecteer geldige vertrek- en eindluchthaven.");
    return;
  }

  const aircraft = findAircraft(aircraftInput.value);
  const category = inferCategoryFromModel(aircraftInput.value);
  const isAverageChoice = isAverageAircraftChoice(aircraftInput.value);
  const co2PerKm = aircraft && !isAverageChoice ? aircraft.co2PerKm : averageByCategory(category);
  const seats = aircraft && aircraft.seats && !isAverageChoice ? aircraft.seats : averageSeatsByCategory(category);
  const airline = findAirline(airlineInput.value);
  const age = airline ? airline.fleetAge : 0;
  const ageFactor = 1 + age * 0.0025;

  const km = haversineKm(dep.lat, dep.lon, arr.lat, arr.lon);
  const totalAircraftCo2 = km * co2PerKm * ageFactor;
  const perSeatCo2 = aircraft && aircraft.co2PerSeatKm ? km * aircraft.co2PerSeatKm * ageFactor : totalAircraftCo2 / seats;
  // Disclaimer: 1 boom capteert ongeveer 25 kg CO2 per jaar.
  const averageTrees = Math.ceil(perSeatCo2 / 25);
  const yearlyShare = (perSeatCo2 / BASELINE_ANNUAL_KG) * 100;
  const flightHours = km / 850 + 0.6;

  distanceOut.textContent = km.toFixed(1);
  co2Out.textContent = perSeatCo2.toFixed(1);
  co2TotalAircraftOut.textContent = totalAircraftCo2.toFixed(1);
  seatsOut.textContent = String(Math.round(seats));
  treesOut.textContent = String(averageTrees);
  treeCompareOut.textContent = `${averageTrees} gemiddelde bomen`;
  fleetAgeOut.textContent = age.toFixed(1);
  ageFactorOut.textContent = `${((ageFactor - 1) * 100).toFixed(2)}% extra`;
  yearlyShareOut.textContent = `${yearlyShare.toFixed(1)}%`;
  routeOut.textContent = `${dep.city} (${dep.code}) -> ${arr.city} (${arr.code})`;
  airlineOut.textContent = airline ? airline.name : airlineInput.value || "Onbekend";
  aircraftOut.textContent = aircraft ? aircraft.model : `Gemiddelde ${category}`;
  durationOut.textContent = flightHours.toFixed(1);
  sustainabilityBadge.textContent = sustainabilityLabel(perSeatCo2);

  renderChart(yearlyShare);
  resultPanel.hidden = false;
}

function renderAircraftList() {
  const byCategory = {
    small: aircrafts.filter((a) => (a.category || inferCategoryFromModel(a.model)) === "small"),
    wide: aircrafts.filter((a) => (a.category || inferCategoryFromModel(a.model)) === "wide"),
    jumbo: aircrafts.filter((a) => (a.category || inferCategoryFromModel(a.model)) === "jumbo"),
  };
  aircraftInput.innerHTML = [
    '<option value="">Kies vliegtuigtype...</option>',
    '<optgroup label="Narrowbody (korte/middellange afstand)">',
    ...byCategory.small.map((a) => `<option value="${a.model}">${a.model} (${Math.round(a.seats || 180)} passagiers)</option>`),
    "</optgroup>",
    '<optgroup label="Widebody (lange afstand)">',
    ...byCategory.wide.map((a) => `<option value="${a.model}">${a.model} (${Math.round(a.seats || 300)} passagiers)</option>`),
    "</optgroup>",
    '<optgroup label="Jumbojet (zeer grote capaciteit)">',
    ...byCategory.jumbo.map((a) => `<option value="${a.model}">${a.model} (${Math.round(a.seats || 420)} passagiers)</option>`),
    "</optgroup>",
    '<optgroup label="Gemiddelde per categorie (geschat)">',
    '<option value="Gemiddelde Narrowbody">Gemiddelde Narrowbody</option>',
    '<option value="Gemiddelde Widebody">Gemiddelde Widebody</option>',
    '<option value="Gemiddelde Jumbojet">Gemiddelde Jumbojet</option>',
    "</optgroup>",
  ].join("");
}

function renderAirlineList() {
  airlineList.innerHTML = airlines.map((a) => `<option value="${a.name}"></option>`).join("");
}

function findAirport(inputValue) {
  const value = (inputValue || "").toLowerCase().trim();
  const exact = topAirports.find((a) => `${a.code} - ${a.name} (${a.city})`.toLowerCase() === value);
  if (exact) return exact;
  return topAirports.find((a) => `${a.code} ${a.name} ${a.city}`.toLowerCase().includes(value));
}

function findAircraft(inputValue) {
  const value = (inputValue || "").toLowerCase().trim();
  return aircrafts.find((a) => a.model.toLowerCase() === value) || aircrafts.find((a) => a.model.toLowerCase().includes(value));
}

function findAirline(inputValue) {
  const value = (inputValue || "").toLowerCase().trim();
  return airlines.find((a) => a.name.toLowerCase() === value) || airlines.find((a) => a.name.toLowerCase().includes(value));
}

function averageByCategory(category) {
  const inClass = aircrafts.filter((a) => (a.category || inferCategoryFromModel(a.model)) === category);
  if (!inClass.length) {
    const allAvg = aircrafts.reduce((sum, a) => sum + a.co2PerKm, 0) / aircrafts.length;
    return Number.isFinite(allAvg) ? allAvg : 10;
  }
  return inClass.reduce((sum, a) => sum + a.co2PerKm, 0) / inClass.length;
}

function averageSeatsByCategory(category) {
  const inClass = aircrafts.filter((a) => (a.category || inferCategoryFromModel(a.model)) === category);
  const seats = inClass.map((a) => Number(a.seats)).filter((n) => Number.isFinite(n) && n > 0);
  if (!seats.length) return category === "jumbo" ? 420 : category === "small" ? 180 : 300;
  return seats.reduce((sum, n) => sum + n, 0) / seats.length;
}

function normalizeCategory(raw) {
  const value = (raw || "").toLowerCase();
  if (value.includes("jumbo") || value.includes("380") || value.includes("747")) return "jumbo";
  if (value.includes("wide") || value.includes("330") || value.includes("350") || value.includes("777") || value.includes("787")) return "wide";
  if (value.includes("small") || value.includes("320") || value.includes("321") || value.includes("737")) return "small";
  return "";
}

function inferCategoryFromModel(modelName) {
  return normalizeCategory(modelName) || "wide";
}

function isAverageAircraftChoice(value) {
  return (value || "").toLowerCase().includes("gemiddelde");
}

function sustainabilityLabel(perSeatKg) {
  if (perSeatKg < 200) return "🟢 Zeer duurzaam";
  if (perSeatKg < 500) return "🟡 Gemiddelde impact";
  if (perSeatKg < 900) return "🟠 Hoge impact";
  return "🔴 Zeer hoge impact";
}

function bindAirlineTypeAhead() {
  if (!airlineInput || !airlineSuggestions) return;
  const render = () => {
    const query = airlineInput.value.trim().toLowerCase();
    const source = query.length < 1 ? airlines.slice(0, 12) : airlines.filter((a) => a.name.toLowerCase().includes(query)).slice(0, 12);
    if (!source.length) return hideSuggestions(airlineSuggestions);
    airlineSuggestions.innerHTML = source
      .map((a) => `<div class="suggestion-item" data-value="${a.name}">${a.name}</div>`)
      .join("");
    airlineSuggestions.classList.add("visible");
    airlineSuggestions.querySelectorAll(".suggestion-item").forEach((item) => {
      item.addEventListener("click", () => {
        airlineInput.value = item.getAttribute("data-value") || "";
        hideSuggestions(airlineSuggestions);
      });
    });
  };
  airlineInput.addEventListener("input", render);
  airlineInput.addEventListener("focus", render);
}

function renderChart(sharePercent) {
  const canvas = document.getElementById("yearlyChart");
  if (!canvas || typeof Chart === "undefined") return;
  if (yearlyChart) yearlyChart.destroy();

  const used = Math.max(0, Math.min(sharePercent, 100));
  const left = 100 - used;
  const isDark = document.body.classList.contains("dark");
  yearlyChart = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["Deze vlucht", "Overig op jaarbasis"],
      datasets: [
        {
          data: [used, left],
          backgroundColor: ["#2f88b2", isDark ? "#2c4558" : "#d6e4ef"],
          borderColor: isDark ? "#182836" : "#ffffff",
          borderWidth: 3,
          hoverOffset: 8,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "72%",
      plugins: { legend: { position: "bottom" } },
    },
  });
}

function parseAirportCsvFast(csv) {
  const lines = csv.replace(/\r/g, "").split("\n").filter(Boolean);
  if (lines.length < 2) return [];
  const header = splitCsvLine(lines[0]).map((h) => h.replace(/^"|"$/g, "").trim().toLowerCase());
  const idx = {
    type: header.indexOf("type"),
    name: header.indexOf("name"),
    lat: header.indexOf("latitude_deg"),
    lon: header.indexOf("longitude_deg"),
    city: header.indexOf("municipality"),
    iata: header.indexOf("iata_code"),
    scheduled: header.indexOf("scheduled_service"),
  };
  const out = [];
  for (let i = 1; i < lines.length; i += 1) {
    const values = splitCsvLine(lines[i]).map((v) => v.replace(/^"|"$/g, "").trim());
    const code = values[idx.iata];
    const type = (values[idx.type] || "").toLowerCase();
    const scheduled = (values[idx.scheduled] || "").toLowerCase();
    if (!code || scheduled !== "yes") continue;
    if (type !== "large_airport" && type !== "medium_airport") continue;
    out.push({
      code,
      name: values[idx.name] || "",
      city: values[idx.city] || "",
      lat: Number(values[idx.lat]),
      lon: Number(values[idx.lon]),
      type,
    });
  }
  const unique = [];
  const seen = new Set();
  for (const airport of out) {
    if (!Number.isFinite(airport.lat) || !Number.isFinite(airport.lon)) continue;
    if (seen.has(airport.code)) continue;
    seen.add(airport.code);
    unique.push(airport);
  }
  return unique;
}

function pickTopAirports(allAirports, limit) {
  if (EMBEDDED_TOP_AIRPORTS.length >= limit) return EMBEDDED_TOP_AIRPORTS.slice(0, limit);
  const large = allAirports.filter((a) => a.type === "large_airport");
  const medium = allAirports.filter((a) => a.type === "medium_airport");
  return [...large, ...medium].slice(0, limit);
}

function parseCsv(csv) {
  const lines = csv.replace(/\r/g, "").split("\n").filter(Boolean);
  if (!lines.length) return [];
  const headers = splitCsvLine(lines[0]).map((h) => h.replace(/^"|"$/g, "").trim().toLowerCase());
  const rows = [];
  for (let i = 1; i < lines.length; i += 1) {
    const values = splitCsvLine(lines[i]).map((v) => v.replace(/^"|"$/g, "").trim());
    const row = {};
    headers.forEach((h, idx) => {
      row[h] = values[idx] ?? "";
    });
    rows.push(row);
  }
  return rows;
}

function splitCsvLine(line) {
  const out = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === "," && !inQuotes) {
      out.push(current);
      current = "";
      continue;
    }
    current += char;
  }
  out.push(current);
  return out;
}

function parseAircraftCsv(csv) {
  return parseCsv(csv)
    .map((r) => {
      const model = String(r.model || r.vliegtuig || r.aircraft || r.aircraft_type || "").trim();
      const co2PerKm = Number(r.co2_per_km || r.co2 || r.kg_co2_per_km || r.verbruik || 0);
      const seats = Number(r.seats || r.aantal_stoelen || r.stoelen || 0);
      const co2PerSeatKm = Number(r.co2_per_seat_km || r.co2_stoel || r.co2_per_stoel || 0);
      const category = normalizeCategory(String(r.category || r.categorie || "")) || inferCategoryFromModel(model);
      return { model, co2PerKm, seats, co2PerSeatKm, category };
    })
    .filter((a) => a.model && Number.isFinite(a.co2PerKm));
}

function parseAircraftText(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter(Boolean);
  const out = [];
  for (const line of lines) {
    const match = line.match(/(.+?)\s*[:;-]\s*([0-9]+(?:[.,][0-9]+)?)/);
    if (!match) continue;
    const model = match[1].trim();
    out.push({
      model,
      co2PerKm: Number(match[2].replace(",", ".")),
      seats: extractSeatsFromTextLine(line),
      co2PerSeatKm: extractPerSeatFromTextLine(line),
      category: inferCategoryFromModel(model),
    });
  }
  return out;
}

async function parseAircraftDocx(path) {
  if (typeof mammoth === "undefined") return [];
  const buffer = await fetchArrayBuffer(path);
  if (!buffer) return [];
  try {
    const result = await mammoth.extractRawText({ arrayBuffer: buffer });
    return parseAircraftText(result.value || "");
  } catch {
    return [];
  }
}

async function parseAirlinesExcel(path) {
  if (typeof XLSX === "undefined") return [];
  const buffer = await fetchArrayBuffer(path);
  if (!buffer) return [];
  try {
    const wb = XLSX.read(buffer, { type: "array" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(ws, { defval: "" });
    return rows
      .map((r) => {
        const mapped = {};
        Object.keys(r).forEach((k) => {
          mapped[k.toLowerCase().trim()] = r[k];
        });
        return {
          name: String(mapped.name || mapped.airline || mapped.maatschappij || "").trim(),
          fleetAge: Number(mapped.fleet_age || mapped.age || mapped.vlootleeftijd || mapped.gemiddelde_leeftijd || 0),
        };
      })
      .filter((r) => r.name);
  } catch {
    return [];
  }
}

function extractSeatsFromTextLine(line) {
  const match = line.match(/(?:seats|stoelen)\s*[:=]?\s*([0-9]{2,4})/i);
  return match ? Number(match[1]) : 0;
}

function extractPerSeatFromTextLine(line) {
  const match = line.match(/(?:co2\s*per\s*seat|co2\s*per\s*stoel)\s*[:=]?\s*([0-9]+(?:[.,][0-9]+)?)/i);
  return match ? Number(match[1].replace(",", ".")) : 0;
}

async function fetchText(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) return "";
    return await response.text();
  } catch {
    return "";
  }
}

async function fetchArrayBuffer(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) return null;
    return await response.arrayBuffer();
  } catch {
    return null;
  }
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRad(value) {
  return (value * Math.PI) / 180;
}

function restoreTheme() {
  const saved = localStorage.getItem("skyclear-theme");
  if (saved === "dark") document.body.classList.add("dark");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("skyclear-theme", document.body.classList.contains("dark") ? "dark" : "light");
}
