//all array combind
const ages = [12, 13, 14, 15, 16];
const ages2 = [17, 18, 19, 20];
const ages3 = [21, 22, 23, 24,25];
const allAges = [...ages, ...ages2, ...ages3];
console.log(allAges);

//maximum value finding
const business = 650;
const minister = 450;
const sochib = 250;
const max = Math.max(business, minister, sochib);
console.log(max);

const highest = [650, 450, 250, 850]; 
const maximum = Math.max(...highest);
console.log(maximum);