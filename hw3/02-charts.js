const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
  'rgba(50, 162, 235, 0.8)',
  'rgba(255, 150, 86, 0.8)',
  'rgba(255, 50, 132, 0.8)',
  'rgba(75, 100, 192, 0.8)',
  'rgba(153, 102, 200, 0.8)',
  'rgba(255, 59, 164, 0.8)',
  'rgba(199, 99, 99, 0.8)',
  'rgba(83, 102, 55, 0.8)',
  'rgba(40, 59, 64, 0.8)',
  'rgba(110, 109, 199, 0.8)',
  'rgba(78, 152, 199, 0.8)',
  'rgba(100, 100, 99, 0.8)',
  'rgba(183, 70, 155, 0.8)',
  'rgba(140, 59, 64, 0.8)',
  'rgba(110, 89, 199, 0.8)',
  'rgba(112, 152, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
  'rgba(50, 162, 235, 1)',
  'rgba(255, 150, 86, 1)',
  'rgba(255, 50, 132, 1)',
  'rgba(75, 100, 192, 1)',
  'rgba(153, 102, 200, 1)',
  'rgba(255, 59, 164, 1)',
  'rgba(199, 99, 99, 1)',
  'rgba(83, 102, 55, 1)',
  'rgba(40, 59, 64, 1)',
  'rgba(110, 109, 199, 1)',
  'rgba(78, 152, 199, 1)',
  'rgba(100, 100, 99, 1)',
  'rgba(183, 70, 155, 1)',
  'rgba(140, 59, 64, 1)',
  'rgba(110, 89, 199, 1)',
  'rgba(112, 152, 199, 1)',
];


// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
let groupedValue = [];
let groupedKey = [];
let groupedCharacter;




//source-of-help: https://www.programiz.com/javascript/library/array/reduce
function groupByFamily(objectArray) { 
let countObject = objectArray.reduce(function (
  count,
  currentValue
) {
  return (
      count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
      count
  );
},
{});
return countObject;
}


const fetchAllCharacters = async (url) =>{
    try {
      const response = await fetch(url);
      const  characters = await response.json();
      let characterArray = [];
      Object.values(characters).forEach(element => {
        characterArray.push(element) 
      });
       
      let correctedFamily = characterArray.map((character) => {

          let family = (character.family);

          if (family === "" || family === "unknown" || family === "Unkown" ){
               family  ="Unknown";
          }
          else if (family === "House Stark" || family === "Stark"){
               family = "House Stark";
          }

          else if (family === "Greyjoy" || family ===  "House Greyjoy"){
               family =  "House Greyjoy";
          }
          else if (family === "House Lannister" || family ===  "Lannister"  ||  family === "House Lanister"){
               family =  "House Lannister";
          }

          else if (family === "Lorath" || family ===  "Lorathi"){
            family =  "Lorathi";
       }

       else if (family === "House Targaryen" || family ===  "Targaryan"){
        family =  "House Targaryen";
       }

          return family;
 
         });
        
        let groupedFamily= groupByFamily(correctedFamily);
        Object.values(groupedFamily).forEach(value => {
          groupedValue.push(value)
        });
        
        console.log(groupedValue);
      
        
        Object.keys(groupedFamily).forEach(key => {
          groupedKey.push(key)
        });
        console.log(groupedKey);
      

              
    }
    catch (error){
       
        console.log(`An error occurred. Please try again`);
        
        
    }
};
fetchAllCharacters(url);



const renderChart = () => {
  const donutChart = document.querySelector('.donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
     labels: ['House Targaryen', 'House Tarly', 'House Stark', 'House Baratheon', 'House Lannister', 'House Greyjoy', 'House Clegane', 'House Baelish', 'House Seaworth', 'Unknown', 'House Tyrell', 'Free Folk', 'Tarth', 'Naathi', 'None', 'Bolton', 'Naharis', 'Lorathi', 'Baratheon', 'Mormont', 'Sparrow', 'Viper', 'Sand', 'Worm', 'Tyrell', 'Qyburn', 'Bronn'],
      datasets: [
        {
          label: "Family",
          data: [3, 1, 10, 2, 5, 3, 1, 1, 1, 3, 1, 2, 1, 1, 1, 2, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1],
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();





