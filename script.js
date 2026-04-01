let airports = [];
let topAirports = [];
let aircrafts = [];
let airlines = [];

const BASELINE_ANNUAL_KG = 1500;
const EMBEDDED_TOP_AIRPORTS = [
  { code: "ATL", name: "Hartsfield-Jackson Atlanta Intl", city: "Atlanta", lat: 33.6407, lon: -84.4277 },
  { code: "LAX", name: "Los Angeles Intl", city: "Los Angeles", lat: 33.9416, lon: -118.4085 },
  { code: "ORD", name: "O'Hare Intl", city: "Chicago", lat: 41.9742, lon: -87.9073 },
  { code: "DFW", name: "Dallas/Fort Worth Intl", city: "Dallas", lat: 32.8998, lon: -97.0403 },
  { code: "DEN", name: "Denver Intl", city: "Denver", lat: 39.8561, lon: -104.6737 },
  { code: "JFK", name: "John F. Kennedy Intl", city: "New York", lat: 40.6413, lon: -73.7781 },
  { code: "SFO", name: "San Francisco Intl", city: "San Francisco", lat: 37.6213, lon: -122.379 },
  { code: "SEA", name: "Seattle-Tacoma Intl", city: "Seattle", lat: 47.4502, lon: -122.3088 },
  { code: "MIA", name: "Miami Intl", city: "Miami", lat: 25.7959, lon: -80.2871 },
  { code: "LAS", name: "Harry Reid Intl", city: "Las Vegas", lat: 36.084, lon: -115.1537 },
  { code: "MCO", name: "Orlando Intl", city: "Orlando", lat: 28.4312, lon: -81.3081 },
  { code: "PHX", name: "Phoenix Sky Harbor Intl", city: "Phoenix", lat: 33.4342, lon: -112.0116 },
  { code: "IAH", name: "George Bush Intercontinental", city: "Houston", lat: 29.99, lon: -95.3368 },
  { code: "BOS", name: "Logan Intl", city: "Boston", lat: 42.3656, lon: -71.0096 },
  { code: "EWR", name: "Newark Liberty Intl", city: "Newark", lat: 40.6895, lon: -74.1745 },
  { code: "CLT", name: "Charlotte Douglas Intl", city: "Charlotte", lat: 35.214, lon: -80.9431 },
  { code: "MSP", name: "Minneapolis-Saint Paul Intl", city: "Minneapolis", lat: 44.8848, lon: -93.2223 },
  { code: "DTW", name: "Detroit Metro", city: "Detroit", lat: 42.2162, lon: -83.3554 },
  { code: "PHL", name: "Philadelphia Intl", city: "Philadelphia", lat: 39.8744, lon: -75.2424 },
  { code: "LGA", name: "LaGuardia", city: "New York", lat: 40.7769, lon: -73.874 },
  { code: "DCA", name: "Ronald Reagan Washington National", city: "Washington", lat: 38.8512, lon: -77.0402 },
  { code: "BWI", name: "Baltimore/Washington Intl", city: "Baltimore", lat: 39.1774, lon: -76.6684 },
  { code: "SLC", name: "Salt Lake City Intl", city: "Salt Lake City", lat: 40.7899, lon: -111.9791 },
  { code: "YVR", name: "Vancouver Intl", city: "Vancouver", lat: 49.195, lon: -123.1779 },
  { code: "YYZ", name: "Toronto Pearson Intl", city: "Toronto", lat: 43.6777, lon: -79.6248 },
  { code: "YUL", name: "Montreal-Trudeau", city: "Montreal", lat: 45.4706, lon: -73.7408 },
  { code: "MEX", name: "Mexico City Intl", city: "Mexico City", lat: 19.4363, lon: -99.0721 },
  { code: "GRU", name: "Sao Paulo Guarulhos", city: "Sao Paulo", lat: -23.4356, lon: -46.4731 },
  { code: "GIG", name: "Rio de Janeiro Galeao", city: "Rio de Janeiro", lat: -22.809, lon: -43.2506 },
  { code: "EZE", name: "Ministro Pistarini Intl", city: "Buenos Aires", lat: -34.8222, lon: -58.5358 },
  { code: "SCL", name: "Arturo Merino Benitez", city: "Santiago", lat: -33.3929, lon: -70.7858 },
  { code: "LIM", name: "Jorge Chavez Intl", city: "Lima", lat: -12.0219, lon: -77.1143 },
  { code: "BOG", name: "El Dorado Intl", city: "Bogota", lat: 4.7016, lon: -74.1469 },
  { code: "PTY", name: "Tocumen Intl", city: "Panama City", lat: 9.0714, lon: -79.3835 },
  { code: "MAD", name: "Adolfo Suarez Madrid-Barajas", city: "Madrid", lat: 40.4719, lon: -3.5626 },
  { code: "BCN", name: "Barcelona El Prat", city: "Barcelona", lat: 41.2974, lon: 2.0833 },
  { code: "LHR", name: "Heathrow", city: "London", lat: 51.47, lon: -0.4543 },
  { code: "LGW", name: "Gatwick", city: "London", lat: 51.1537, lon: -0.1821 },
  { code: "CDG", name: "Charles de Gaulle", city: "Paris", lat: 49.0097, lon: 2.5479 },
  { code: "ORY", name: "Paris Orly", city: "Paris", lat: 48.7262, lon: 2.3652 },
  { code: "AMS", name: "Schiphol", city: "Amsterdam", lat: 52.31, lon: 4.7683 },
  { code: "FRA", name: "Frankfurt", city: "Frankfurt", lat: 50.0379, lon: 8.5622 },
  { code: "MUC", name: "Munich", city: "Munich", lat: 48.3538, lon: 11.7861 },
  { code: "ZRH", name: "Zurich", city: "Zurich", lat: 47.4581, lon: 8.5555 },
  { code: "VIE", name: "Vienna Intl", city: "Vienna", lat: 48.1103, lon: 16.5697 },
  { code: "BRU", name: "Brussels Airport", city: "Brussels", lat: 50.9014, lon: 4.4844 },
  { code: "CPH", name: "Copenhagen", city: "Copenhagen", lat: 55.6181, lon: 12.656 },
  { code: "ARN", name: "Stockholm Arlanda", city: "Stockholm", lat: 59.6498, lon: 17.9238 },
  { code: "OSL", name: "Oslo Gardermoen", city: "Oslo", lat: 60.1939, lon: 11.1004 },
  { code: "HEL", name: "Helsinki", city: "Helsinki", lat: 60.3172, lon: 24.9633 },
  { code: "DUB", name: "Dublin", city: "Dublin", lat: 53.4213, lon: -6.2701 },
  { code: "LIS", name: "Lisbon", city: "Lisbon", lat: 38.7742, lon: -9.1342 },
  { code: "OPO", name: "Porto", city: "Porto", lat: 41.2481, lon: -8.6814 },
  { code: "FCO", name: "Rome Fiumicino", city: "Rome", lat: 41.8003, lon: 12.2389 },
  { code: "MXP", name: "Milan Malpensa", city: "Milan", lat: 45.6306, lon: 8.7281 },
  { code: "ATH", name: "Athens Intl", city: "Athens", lat: 37.9364, lon: 23.9445 },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", lat: 41.2753, lon: 28.7519 },
  { code: "SAW", name: "Sabiha Gokcen", city: "Istanbul", lat: 40.8986, lon: 29.3092 },
  { code: "WAW", name: "Warsaw Chopin", city: "Warsaw", lat: 52.1657, lon: 20.9671 },
  { code: "PRG", name: "Vaclav Havel Airport Prague", city: "Prague", lat: 50.1008, lon: 14.26 },
  { code: "BUD", name: "Budapest Ferenc Liszt", city: "Budapest", lat: 47.4369, lon: 19.2556 },
  { code: "OTP", name: "Henri Coanda Intl", city: "Bucharest", lat: 44.5711, lon: 26.085 },
  { code: "TLV", name: "Ben Gurion", city: "Tel Aviv", lat: 32.0005, lon: 34.8708 },
  { code: "CAI", name: "Cairo Intl", city: "Cairo", lat: 30.1219, lon: 31.4056 },
  { code: "CMN", name: "Mohammed V Intl", city: "Casablanca", lat: 33.3675, lon: -7.5899 },
  { code: "ADD", name: "Addis Ababa Bole Intl", city: "Addis Ababa", lat: 8.9779, lon: 38.7993 },
  { code: "NBO", name: "Jomo Kenyatta Intl", city: "Nairobi", lat: -1.3192, lon: 36.9278 },
  { code: "JNB", name: "OR Tambo Intl", city: "Johannesburg", lat: -26.1337, lon: 28.242 },
  { code: "CPT", name: "Cape Town Intl", city: "Cape Town", lat: -33.97, lon: 18.6021 },
  { code: "DXB", name: "Dubai Intl", city: "Dubai", lat: 25.2532, lon: 55.3657 },
  { code: "DWC", name: "Al Maktoum Intl", city: "Dubai", lat: 24.8964, lon: 55.1614 },
  { code: "AUH", name: "Abu Dhabi Intl", city: "Abu Dhabi", lat: 24.4329, lon: 54.6511 },
  { code: "DOH", name: "Hamad Intl", city: "Doha", lat: 25.2731, lon: 51.6081 },
  { code: "RUH", name: "King Khalid Intl", city: "Riyadh", lat: 24.9576, lon: 46.6988 },
  { code: "JED", name: "King Abdulaziz Intl", city: "Jeddah", lat: 21.6796, lon: 39.1565 },
  { code: "DEL", name: "Indira Gandhi Intl", city: "Delhi", lat: 28.5562, lon: 77.1 },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj Intl", city: "Mumbai", lat: 19.0896, lon: 72.8656 },
  { code: "BLR", name: "Kempegowda Intl", city: "Bengaluru", lat: 13.1986, lon: 77.7066 },
  { code: "MAA", name: "Chennai Intl", city: "Chennai", lat: 12.99, lon: 80.1693 },
  { code: "HYD", name: "Rajiv Gandhi Intl", city: "Hyderabad", lat: 17.2313, lon: 78.4299 },
  { code: "CCU", name: "Netaji Subhas Chandra Bose Intl", city: "Kolkata", lat: 22.6547, lon: 88.4467 },
  { code: "KTM", name: "Tribhuvan Intl", city: "Kathmandu", lat: 27.6966, lon: 85.3591 },
  { code: "DAC", name: "Hazrat Shahjalal Intl", city: "Dhaka", lat: 23.8433, lon: 90.3978 },
  { code: "CMB", name: "Bandaranaike Intl", city: "Colombo", lat: 7.1808, lon: 79.8841 },
  { code: "BKK", name: "Suvarnabhumi", city: "Bangkok", lat: 13.69, lon: 100.7501 },
  { code: "DMK", name: "Don Mueang Intl", city: "Bangkok", lat: 13.9126, lon: 100.607 },
  { code: "SIN", name: "Changi", city: "Singapore", lat: 1.3644, lon: 103.9915 },
  { code: "KUL", name: "Kuala Lumpur Intl", city: "Kuala Lumpur", lat: 2.7456, lon: 101.7072 },
  { code: "CGK", name: "Soekarno-Hatta", city: "Jakarta", lat: -6.1256, lon: 106.6558 },
  { code: "DPS", name: "Ngurah Rai Intl", city: "Denpasar", lat: -8.7482, lon: 115.1672 },
  { code: "MNL", name: "Ninoy Aquino Intl", city: "Manila", lat: 14.5086, lon: 121.0198 },
  { code: "HAN", name: "Noi Bai Intl", city: "Hanoi", lat: 21.2212, lon: 105.8072 },
  { code: "SGN", name: "Tan Son Nhat Intl", city: "Ho Chi Minh City", lat: 10.8188, lon: 106.6519 },
  { code: "HKG", name: "Hong Kong Intl", city: "Hong Kong", lat: 22.308, lon: 113.9185 },
  { code: "TPE", name: "Taoyuan Intl", city: "Taipei", lat: 25.0797, lon: 121.2342 },
  { code: "ICN", name: "Incheon Intl", city: "Seoul", lat: 37.4602, lon: 126.4407 },
  { code: "GMP", name: "Gimpo Intl", city: "Seoul", lat: 37.5583, lon: 126.7906 },
  { code: "NRT", name: "Narita Intl", city: "Tokyo", lat: 35.7732, lon: 140.3874 },
  { code: "HND", name: "Haneda", city: "Tokyo", lat: 35.5494, lon: 139.7798 },
  { code: "KIX", name: "Kansai Intl", city: "Osaka", lat: 34.4347, lon: 135.2442 },
  { code: "ITM", name: "Osaka Intl", city: "Osaka", lat: 34.7855, lon: 135.4382 },
  { code: "NGO", name: "Chubu Centrair Intl", city: "Nagoya", lat: 34.8584, lon: 136.8054 },
  { code: "FUK", name: "Fukuoka", city: "Fukuoka", lat: 33.5859, lon: 130.4507 },
  { code: "PEK", name: "Beijing Capital Intl", city: "Beijing", lat: 40.0799, lon: 116.6031 },
  { code: "PKX", name: "Beijing Daxing Intl", city: "Beijing", lat: 39.5098, lon: 116.4105 },
  { code: "PVG", name: "Shanghai Pudong Intl", city: "Shanghai", lat: 31.1443, lon: 121.8083 },
  { code: "SHA", name: "Shanghai Hongqiao Intl", city: "Shanghai", lat: 31.1979, lon: 121.3363 },
  { code: "CAN", name: "Guangzhou Baiyun Intl", city: "Guangzhou", lat: 23.3924, lon: 113.2991 },
  { code: "SZX", name: "Shenzhen Bao'an Intl", city: "Shenzhen", lat: 22.6393, lon: 113.8107 },
  { code: "CTU", name: "Chengdu Shuangliu Intl", city: "Chengdu", lat: 30.5785, lon: 103.9471 },
  { code: "XIY", name: "Xi'an Xianyang Intl", city: "Xi'an", lat: 34.4471, lon: 108.7516 },
  { code: "HGH", name: "Hangzhou Xiaoshan Intl", city: "Hangzhou", lat: 30.2295, lon: 120.4345 },
  { code: "MEL", name: "Melbourne", city: "Melbourne", lat: -37.669, lon: 144.841 },
  { code: "SYD", name: "Sydney Kingsford Smith", city: "Sydney", lat: -33.9399, lon: 151.1753 },
  { code: "BNE", name: "Brisbane", city: "Brisbane", lat: -27.3842, lon: 153.1175 },
  { code: "PER", name: "Perth", city: "Perth", lat: -31.9403, lon: 115.9672 },
  { code: "AKL", name: "Auckland", city: "Auckland", lat: -37.0082, lon: 174.785 },
  { code: "CHC", name: "Christchurch", city: "Christchurch", lat: -43.4894, lon: 172.5322 },
  { code: "HNL", name: "Honolulu", city: "Honolulu", lat: 21.3187, lon: -157.9225 },
  { code: "GUM", name: "Antonio B. Won Pat Intl", city: "Guam", lat: 13.4839, lon: 144.796 },
  { code: "KEF", name: "Keflavik Intl", city: "Reykjavik", lat: 63.985, lon: -22.6056 },
  { code: "RKV", name: "Reykjavik Airport", city: "Reykjavik", lat: 64.13, lon: -21.9406 },
  { code: "GVA", name: "Geneva", city: "Geneva", lat: 46.2381, lon: 6.109 },
  { code: "NCE", name: "Nice Cote d'Azur", city: "Nice", lat: 43.6584, lon: 7.2159 },
  { code: "PMI", name: "Palma de Mallorca", city: "Palma", lat: 39.5517, lon: 2.7388 },
  { code: "VLC", name: "Valencia", city: "Valencia", lat: 39.4893, lon: -0.4816 },
  { code: "AGP", name: "Malaga-Costa del Sol", city: "Malaga", lat: 36.6749, lon: -4.4991 },
  { code: "NAP", name: "Naples Intl", city: "Naples", lat: 40.886, lon: 14.2908 },
  { code: "TRN", name: "Turin Airport", city: "Turin", lat: 45.2008, lon: 7.6496 },
  { code: "HAM", name: "Hamburg", city: "Hamburg", lat: 53.6304, lon: 9.9882 },
  { code: "DUS", name: "Dusseldorf", city: "Dusseldorf", lat: 51.2895, lon: 6.7668 },
  { code: "TXL", name: "Berlin Tegel", city: "Berlin", lat: 52.5597, lon: 13.2877 },
  { code: "AHO", name: "Alghero–Fertilia Airport", city: "Alghero", lat: 40.632100, lon: 8.290800 },
  { code: "ALC", name: "Alicante–Elche Airport", city: "Alicante", lat: 38.282200, lon: -0.558200 },
  { code: "ANR", name: "Antwerp International Airport", city: "Antwerp", lat: 51.189400, lon: 4.460300 },
  { code: "AOI", name: "Ancona Falconara Airport", city: "Ancona", lat: 43.616300, lon: 13.362300 },
  { code: "AUS", name: "Austin–Bergstrom Intl", city: "Austin", lat: 30.197500, lon: -97.666400 },
  { code: "BDS", name: "Brindisi Airport", city: "Brindisi", lat: 40.657600, lon: 17.947000 },
  { code: "BEG", name: "Belgrade Nikola Tesla", city: "Belgrade", lat: 44.818400, lon: 20.309100 },
  { code: "BER", name: "Berlin Brandenburg Airport", city: "Berlin", lat: 52.366700, lon: 13.503300 },
  { code: "BGO", name: "Bergen Airport", city: "Bergen", lat: 60.293400, lon: 5.218100 },
  { code: "BGY", name: "Milan Bergamo Airport", city: "Bergamo", lat: 45.673900, lon: 9.704200 },
  { code: "BHX", name: "Birmingham Airport", city: "Birmingham", lat: 52.453900, lon: -1.748000 },
  { code: "BIO", name: "Bilbao Airport", city: "Bilbao", lat: 43.301100, lon: -2.910600 },
  { code: "BJZ", name: "Badajoz Airport", city: "Badajoz", lat: 38.891300, lon: -6.821300 },
  { code: "BLQ", name: "Bologna Guglielmo Marconi", city: "Bologna", lat: 44.535400, lon: 11.288700 },
  { code: "BNA", name: "Nashville Intl", city: "Nashville", lat: 36.126300, lon: -86.677400 },
  { code: "BOD", name: "Bordeaux–Mérignac", city: "Bordeaux", lat: 44.828300, lon: -0.715600 },
  { code: "BOJ", name: "Burgas Airport", city: "Burgas", lat: 42.569600, lon: 27.515200 },
  { code: "BRE", name: "Bremen Airport", city: "Bremen", lat: 53.047500, lon: 8.786700 },
  { code: "BRI", name: "Bari Karol Wojty?a", city: "Bari", lat: 41.138900, lon: 16.760600 },
  { code: "BRQ", name: "Brno–Tu?any", city: "Brno", lat: 49.151300, lon: 16.694400 },
  { code: "BRS", name: "Bristol Airport", city: "Bristol", lat: 51.382700, lon: -2.719100 },
  { code: "BSL", name: "EuroAirport Basel–Mulhouse", city: "Basel", lat: 47.590000, lon: 7.529100 },
  { code: "BUR", name: "Hollywood Burbank", city: "Burbank", lat: 34.200700, lon: -118.358700 },
  { code: "BVA", name: "Paris Beauvais Airport", city: "Beauvais", lat: 49.454400, lon: 2.112800 },
  { code: "BZG", name: "Bydgoszcz Airport", city: "Bydgoszcz", lat: 53.096800, lon: 17.977700 },
  { code: "CGN", name: "Cologne Bonn Airport", city: "Cologne", lat: 50.865900, lon: 7.142700 },
  { code: "CHQ", name: "Chania International Airport", city: "Chania", lat: 35.531700, lon: 24.149700 },
  { code: "CLE", name: "Cleveland Hopkins Intl", city: "Cleveland", lat: 41.411700, lon: -81.849800 },
  { code: "CMH", name: "John Glenn Columbus Intl", city: "Columbus", lat: 39.998000, lon: -82.891900 },
  { code: "CRL", name: "Brussels South Charleroi", city: "Charleroi", lat: 50.459200, lon: 4.453800 },
  { code: "CTA", name: "Catania–Fontanarossa", city: "Catania", lat: 37.466800, lon: 15.066600 },
  { code: "CUN", name: "Cancún Intl", city: "Cancún", lat: 21.036500, lon: -86.877100 },
  { code: "CVG", name: "Cincinnati/Northern Kentucky Intl", city: "Cincinnati", lat: 39.048800, lon: -84.667800 },
  { code: "DBV", name: "Dubrovnik Airport", city: "Dubrovnik", lat: 42.561400, lon: 18.268200 },
  { code: "EDI", name: "Edinburgh Airport", city: "Edinburgh", lat: 55.950000, lon: -3.372500 },
  { code: "EIN", name: "Eindhoven Airport", city: "Eindhoven", lat: 51.450100, lon: 5.374500 },
  { code: "ERF", name: "Erfurt–Weimar Airport", city: "Erfurt", lat: 50.979800, lon: 10.958100 },
  { code: "FAO", name: "Faro Airport", city: "Faro", lat: 37.014400, lon: -7.965900 },
  { code: "FKB", name: "Karlsruhe/Baden-Baden Airport", city: "Karlsruhe", lat: 48.779300, lon: 8.080700 },
  { code: "FLL", name: "Fort Lauderdale-Hollywood Intl", city: "Fort Lauderdale", lat: 26.072600, lon: -80.152700 },
  { code: "FLR", name: "Florence Airport", city: "Florence", lat: 43.810000, lon: 11.205100 },
  { code: "FMM", name: "Memmingen Airport", city: "Memmingen", lat: 47.988800, lon: 10.239500 },
  { code: "FNC", name: "Madeira Cristiano Ronaldo Airport", city: "Funchal", lat: 32.697900, lon: -16.774500 },
  { code: "GDN", name: "Gdansk Lech Walesa Airport", city: "Gdansk", lat: 54.377600, lon: 18.466200 },
  { code: "GLA", name: "Glasgow Airport", city: "Glasgow", lat: 55.871900, lon: -4.433100 },
  { code: "GRO", name: "Girona–Costa Brava Airport", city: "Girona", lat: 41.901000, lon: 2.760600 },
  { code: "GRQ", name: "Groningen Airport Eelde", city: "Groningen", lat: 53.119700, lon: 6.579400 },
  { code: "HAJ", name: "Hannover Airport", city: "Hannover", lat: 52.461100, lon: 9.685100 },
  { code: "HAV", name: "Jose Marti Intl", city: "Havana", lat: 22.989200, lon: -82.409100 },
  { code: "HER", name: "Heraklion Intl", city: "Heraklion", lat: 35.339700, lon: 25.180300 },
  { code: "HHN", name: "Frankfurt-Hahn Airport", city: "Hahn", lat: 49.948700, lon: 7.263900 },
  { code: "IAD", name: "Washington Dulles Intl", city: "Washington", lat: 38.953100, lon: -77.456500 },
  { code: "IAS", name: "Iasi Intl", city: "Iasi", lat: 47.178500, lon: 27.620600 },
  { code: "IBZ", name: "Ibiza Airport", city: "Ibiza", lat: 38.872900, lon: 1.373100 },
  { code: "IND", name: "Indianapolis Intl", city: "Indianapolis", lat: 39.717300, lon: -86.294400 },
  { code: "INN", name: "Innsbruck Airport", city: "Innsbruck", lat: 47.260200, lon: 11.344000 },
  { code: "KRK", name: "Krakow John Paul II Intl", city: "Krakow", lat: 50.077700, lon: 19.784800 },
  { code: "KSC", name: "Kosice Intl", city: "Kosice", lat: 48.663100, lon: 21.241100 },
  { code: "KTW", name: "Katowice Intl", city: "Katowice", lat: 50.474300, lon: 19.080000 },
  { code: "KUN", name: "Kaunas Intl", city: "Kaunas", lat: 54.963900, lon: 24.084800 },
  { code: "LBA", name: "Leeds Bradford Airport", city: "Leeds", lat: 53.865900, lon: -1.660600 },
  { code: "LCA", name: "Larnaca Intl", city: "Larnaca", lat: 34.875100, lon: 33.624900 },
  { code: "LCY", name: "London City Airport", city: "London", lat: 51.505300, lon: 0.055300 },
  { code: "LEJ", name: "Leipzig/Halle Airport", city: "Leipzig", lat: 51.423900, lon: 12.236400 },
  { code: "LGB", name: "Long Beach Airport", city: "Long Beach", lat: 33.817700, lon: -118.151600 },
  { code: "LGG", name: "Liege Airport", city: "Liege", lat: 50.637400, lon: 5.443200 },
  { code: "LIL", name: "Lille Airport", city: "Lille", lat: 50.563500, lon: 3.086800 },
  { code: "LIN", name: "Milan Linate Airport", city: "Milan", lat: 45.445100, lon: 9.278300 },
  { code: "LJU", name: "Ljubljana Joze Pucnik Airport", city: "Ljubljana", lat: 46.223700, lon: 14.457600 },
  { code: "LPA", name: "Gran Canaria Airport", city: "Las Palmas", lat: 27.931900, lon: -15.386600 },
  { code: "LPL", name: "Liverpool John Lennon Airport", city: "Liverpool", lat: 53.333600, lon: -2.849700 },
  { code: "LPP", name: "Lappeenranta Airport", city: "Lappeenranta", lat: 61.044600, lon: 28.144700 },
  { code: "LTN", name: "London Luton Airport", city: "Luton", lat: 51.874700, lon: -0.368300 },
  { code: "LUX", name: "Luxembourg Airport", city: "Luxembourg", lat: 49.630600, lon: 6.211500 },
  { code: "LUZ", name: "Lublin Airport", city: "Lublin", lat: 51.239300, lon: 22.714600 },
  { code: "LYS", name: "Lyon–Saint-Exupéry Airport", city: "Lyon", lat: 45.725600, lon: 5.081100 },
  { code: "MAH", name: "Menorca Airport", city: "Menorca", lat: 39.862600, lon: 4.218600 },
  { code: "MAN", name: "Manchester Airport", city: "Manchester", lat: 53.365400, lon: -2.272000 },
  { code: "MCI", name: "Kansas City Intl", city: "Kansas City", lat: 39.297600, lon: -94.713900 },
  { code: "MKE", name: "Milwaukee Mitchell Intl", city: "Milwaukee", lat: 42.947200, lon: -87.896600 },
  { code: "MLA", name: "Malta Intl", city: "Luqa", lat: 35.857500, lon: 14.477500 },
  { code: "MPL", name: "Montpellier Airport", city: "Montpellier", lat: 43.576200, lon: 3.963000 },
  { code: "MRS", name: "Marseille Provence Airport", city: "Marseille", lat: 43.439300, lon: 5.221400 },
  { code: "MST", name: "Maastricht Aachen Airport", city: "Maastricht", lat: 50.911700, lon: 5.770100 },
  { code: "MSY", name: "Louis Armstrong New Orleans Intl", city: "New Orleans", lat: 29.993400, lon: -90.258000 },
  { code: "NCL", name: "Newcastle Intl", city: "Newcastle", lat: 55.037500, lon: -1.691700 },
  { code: "NOC", name: "Ireland West Airport Knock", city: "Knock", lat: 53.910300, lon: -8.818500 },
  { code: "NRN", name: "Weeze Airport", city: "Weeze", lat: 51.602400, lon: 6.142200 },
  { code: "NTE", name: "Nantes Atlantique Airport", city: "Nantes", lat: 47.153200, lon: -1.610700 },
  { code: "NUE", name: "Nuremberg Airport", city: "Nuremberg", lat: 49.498700, lon: 11.078000 },
  { code: "OAK", name: "Oakland Intl", city: "Oakland", lat: 37.712600, lon: -122.219700 },
  { code: "OMR", name: "Oradea Intl", city: "Oradea", lat: 47.025300, lon: 21.902500 },
  { code: "ORK", name: "Cork Airport", city: "Cork", lat: 51.841300, lon: -8.491100 },
  { code: "OSR", name: "Ostrava Leos Janacek", city: "Ostrava", lat: 49.696300, lon: 18.111100 },
  { code: "OST", name: "Ostend-Bruges Airport", city: "Ostend", lat: 51.198900, lon: 2.862200 },
  { code: "OVD", name: "Asturias Airport", city: "Oviedo", lat: 43.563600, lon: -6.034600 },
  { code: "PDL", name: "Joao Paulo II Airport", city: "Ponta Delgada", lat: 37.741200, lon: -25.697900 },
  { code: "PDV", name: "Plovdiv Intl", city: "Plovdiv", lat: 42.067800, lon: 24.850800 },
  { code: "PEG", name: "Perugia San Francesco d'Assisi", city: "Perugia", lat: 43.095900, lon: 12.513200 },
  { code: "PFO", name: "Paphos Intl", city: "Paphos", lat: 34.717900, lon: 32.485700 },
  { code: "PIT", name: "Pittsburgh Intl", city: "Pittsburgh", lat: 40.491500, lon: -80.232900 },
  { code: "PMO", name: "Palermo Falcone-Borsellino", city: "Palermo", lat: 38.175900, lon: 13.091000 },
  { code: "POZ", name: "Poznan-Lawica Airport", city: "Poznan", lat: 52.421000, lon: 16.826300 },
  { code: "PSA", name: "Pisa Intl Galileo Galilei", city: "Pisa", lat: 43.683900, lon: 10.392700 },
  { code: "PUJ", name: "Punta Cana Intl", city: "Punta Cana", lat: 18.567400, lon: -68.363400 },
  { code: "RAK", name: "Marrakesh Menara Airport", city: "Marrakesh", lat: 31.606900, lon: -8.036300 },
  { code: "RDU", name: "Raleigh-Durham Intl", city: "Raleigh-Durham", lat: 35.880100, lon: -78.788000 },
  { code: "REU", name: "Reus Airport", city: "Reus", lat: 41.148900, lon: 1.167200 },
  { code: "RIX", name: "Riga Intl", city: "Riga", lat: 56.923600, lon: 23.971100 },
  { code: "RJK", name: "Rijeka Airport", city: "Rijeka", lat: 45.216900, lon: 14.570300 },
  { code: "RTM", name: "Rotterdam The Hague Airport", city: "Rotterdam", lat: 51.956900, lon: 4.437200 },
  { code: "RZE", name: "Rzeszow-Jasionka Airport", city: "Rzeszow", lat: 50.109900, lon: 22.019000 },
  { code: "SAN", name: "San Diego Intl", city: "San Diego", lat: 32.733800, lon: -117.193300 },
  { code: "SAT", name: "San Antonio Intl", city: "San Antonio", lat: 29.533700, lon: -98.469800 },
  { code: "SCQ", name: "Santiago de Compostela Airport", city: "Santiago de Compostela", lat: 42.896300, lon: -8.415100 },
  { code: "SCV", name: "Suceava Stefan cel Mare Airport", city: "Suceava", lat: 47.687500, lon: 26.354100 },
  { code: "SDR", name: "Santander Airport", city: "Santander", lat: 43.427100, lon: -3.820000 },
  { code: "SJC", name: "San Jose Intl", city: "San Jose", lat: 37.363900, lon: -121.928900 },
  { code: "SJJ", name: "Sarajevo Intl", city: "Sarajevo", lat: 43.824600, lon: 18.331500 },
  { code: "SKG", name: "Thessaloniki Intl", city: "Thessaloniki", lat: 40.519700, lon: 22.970900 },
  { code: "SKP", name: "Skopje Intl", city: "Skopje", lat: 41.961600, lon: 21.621400 },
  { code: "SMF", name: "Sacramento Intl", city: "Sacramento", lat: 38.695400, lon: -121.590800 },
  { code: "SNA", name: "John Wayne Airport", city: "Santa Ana", lat: 33.675700, lon: -117.868200 },
  { code: "SNN", name: "Shannon Airport", city: "Shannon", lat: 52.702000, lon: -8.924800 },
  { code: "SPU", name: "Split Airport", city: "Split", lat: 43.538900, lon: 16.298000 },
  { code: "STL", name: "St. Louis Lambert Intl", city: "St. Louis", lat: 38.750000, lon: -90.370000 },
  { code: "STN", name: "London Stansted Airport", city: "London", lat: 51.885000, lon: 0.235000 },
  { code: "STR", name: "Stuttgart Airport", city: "Stuttgart", lat: 48.689900, lon: 9.221900 },
  { code: "SUF", name: "Lamezia Terme Airport", city: "Lamezia Terme", lat: 38.905400, lon: 16.242300 },
  { code: "SVG", name: "Stavanger Airport", city: "Stavanger", lat: 58.876700, lon: 5.637800 },
  { code: "SVQ", name: "Seville Airport", city: "Seville", lat: 37.418000, lon: -5.899400 },
  { code: "SZG", name: "Salzburg Airport", city: "Salzburg", lat: 47.793300, lon: 13.004300 },
  { code: "TFS", name: "Tenerife South Airport", city: "Tenerife", lat: 28.044500, lon: -16.572500 },
  { code: "TGD", name: "Podgorica Airport", city: "Podgorica", lat: 42.359400, lon: 19.251900 },
  { code: "TIA", name: "Tirana Intl", city: "Tirana", lat: 41.414700, lon: 19.720600 },
  { code: "TKU", name: "Turku Airport", city: "Turku", lat: 60.514100, lon: 22.262800 },
  { code: "TLL", name: "Tallinn Airport", city: "Tallinn", lat: 59.413300, lon: 24.832800 },
  { code: "TLS", name: "Toulouse Blagnac Airport", city: "Toulouse", lat: 43.629300, lon: 1.363800 },
  { code: "TNG", name: "Tangier Ibn Battouta Airport", city: "Tangier", lat: 35.726900, lon: -5.916900 },
  { code: "TPA", name: "Tampa Intl", city: "Tampa", lat: 27.975500, lon: -82.533200 },
  { code: "TPS", name: "Trapani Airport", city: "Trapani", lat: 37.911400, lon: 12.488000 },
  { code: "TRS", name: "Trieste Airport", city: "Trieste", lat: 45.827500, lon: 13.472200 },
  { code: "TSR", name: "Timisoara Traian Vuia", city: "Timisoara", lat: 45.809900, lon: 21.337900 },
  { code: "VAR", name: "Varna Airport", city: "Varna", lat: 43.232100, lon: 27.825000 },
  { code: "VCE", name: "Venice Marco Polo Airport", city: "Venice", lat: 45.505300, lon: 12.351800 },
  { code: "VLL", name: "Valladolid Airport", city: "Valladolid", lat: 41.706100, lon: -4.851900 },
  { code: "VNO", name: "Vilnius Airport", city: "Vilnius", lat: 54.634100, lon: 25.285800 },
  { code: "WRO", name: "Wroclaw Airport", city: "Wroclaw", lat: 51.102700, lon: 16.885800 },
  { code: "ZAD", name: "Zadar Airport", city: "Zadar", lat: 44.108300, lon: 15.346700 },
  { code: "ZAG", name: "Zagreb Franjo Tudman Airport", city: "Zagreb", lat: 45.742900, lon: 16.068800 }
];

const EMBEDDED_AIRLINES = [
  { name: "Aegean Airlines", fleetAge: 8.6 }, 
  { name: "Aer Lingus", fleetAge: 12.6 }, 
  { name: "Aeromexico", fleetAge: 7.4 }, 
  { name: "Air Baltic", fleetAge: 4.9 }, 
  { name: "Air Canada", fleetAge: 11.8 }, 
  { name: "Air Dolomiti", fleetAge: 15.7 }, 
  { name: "Air China", fleetAge: 9.9 }, 
  { name: "Air Europa", fleetAge: 7.9 }, 
  { name: "Air France", fleetAge: 11.8 }, 
  { name: "Air India", fleetAge: 8.7 }, 
  { name: "Air New Zealand", fleetAge: 11.3 }, 
  { name: "Air Serbia", fleetAge: 14.3 }, 
  { name: "Alaska Airlines", fleetAge: 9.3 }, 
  { name: "All Nippon Airways", fleetAge: 12 }, 
  { name: "American Airlines", fleetAge: 14.5 }, 
  { name: "Asiana Airlines", fleetAge: 10.7 }, 
  { name: "Austrian Airlines", fleetAge: 19.2 }, 
  { name: "Avianca", fleetAge: 10.5 }, 
  { name: "Azul", fleetAge: 8.2 },
  { name: "British Airways", fleetAge: 14.4 }, 
  { name: "Brussels Airlines", fleetAge: 17.1 }, 
  { name: "Bulgaria Air", fleetAge: 8.1 },
  { name: "Buzz", fleetAge: 9.5 },
  { name: "Cathay Pacific", fleetAge: 13.1 }, 
  { name: "China Eastern", fleetAge: 9.6 }, 
  { name: "China Southern", fleetAge: 9.3 }, 
  { name: "CityJet", fleetAge: 15.7 },
  { name: "Condor", fleetAge: 7.8 }, 
  { name: "Copa Airlines", fleetAge: 9.6 }, 
  { name: "Corendon Airlines", fleetAge: 11 },
  { name: "Croatia Airlines", fleetAge: 10.1 }, 
  { name: "Delta Air Lines", fleetAge: 15 }, 
  { name: "Discover Airlines", fleetAge: 13.3 },
  { name: "EasyJet", fleetAge: 11.6 }, 
  { name: "El Al Israel Airlines", fleetAge: 15.1 }, 
  { name: "Emirates", fleetAge: 11.2 }, 
  { name: "Enter Air", fleetAge: 16.7 },
  { name: "Etihad Airways", fleetAge: 8.3 }, 
  { name: "Eurowings", fleetAge: 13.6 },
  { name: "Finnair", fleetAge: 15.4 }, 
  { name: "Flydubai", fleetAge: 6 },
  { name: "Freebird Airlines", fleetAge: 16 },
  { name: "Frontier Airlines", fleetAge: 5.1 }, 
  { name: "Gol Transportes Aéreos", fleetAge: 11.6 },
  { name: "Gulf Air", fleetAge: 7.8 },
  { name: "HiSky", fleetAge: 21.4 }, 
  { name: "Iberia", fleetAge: 9.6 }, 
  { name: "Iberia Express", fleetAge: 11.3 },
  { name: "Icelandair", fleetAge: 14.4 }, 
  { name: "IndiGo", fleetAge: 4.8 }, 
  { name: "ITA Airways", fleetAge: 6.1 },
  { name: "Japan Airlines", fleetAge: 12.5 }, 
  { name: "JetBlue Airways", fleetAge: 12.2 }, 
  { name: "Jet2.com", fleetAge: 13.9 },
  { name: "Jetstar Airways", fleetAge: 10.8 },
  { name: "KLM", fleetAge: 13.1 }, 
  { name: "KM Malta Airlines", fleetAge: 4.5 },
  { name: "Korean Air", fleetAge: 10.7 }, 
  { name: "LATAM Airlines", fleetAge: 11.2 }, 
  { name: "Laude Europe", fleetAge: 18.5 },
  { name: "Level", fleetAge: 10.9 },
  { name: "LOT Polish Airlines", fleetAge: 11 }, 
  { name: "Lufthansa", fleetAge: 14.5 }, 
  { name: "Luxair", fleetAge: 10.8 }, 
  { name: "Malaysia Airlines", fleetAge: 9.9 }, 
  { name: "Neos", fleetAge: 7.7 }, 
  { name: "Norse Atlantic Airways", fleetAge: 7.8 },
  { name: "Norwegian", fleetAge: 14.1 }, 
  { name: "Oman Air", fleetAge: 6.9 }, 
  { name: "Pegasus", fleetAge: 5.4 }, 
  { name: "Philippine Airlines", fleetAge: 11.4 }, 
  { name: "Porter Airlines", fleetAge: 7.1 },
  { name: "Qantas", fleetAge: 16.2 }, 
  { name: "Qatar Airways", fleetAge: 10.1 }, 
  { name: "Ryanair", fleetAge: 10.6 }, 
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
