
import React, { Component } from 'react';
import Students from './Students'
// import AddNinja from './AddNinja'

class App extends Component {
  constructor(){
    super()
    this.state = {
      classmates:  [
      {
        name:"Kevin",
        from:"San Antonio",
        funFact:"Has lived in Argentina",
        cityOrCountry:"Country",
        indoorsOrOutdoors:"Indoors",
        travel: "Travel everyday",
        food: "Top's",
        dogOrCat:"Dog"
      },
      {
        name: "Sabrina",
        from: "NYC",
        funFact: "Born in Bangladesh",
        cityorCountry: "City",
        indoorsOrOutdoors: "Indoors",
        travel:"yes",
        food: "Subway",
        catsOrDogs: "Cats - can't have dogs"
      },
      {
        name: "Samuel",
        from: "Nigeria",
        funFact: "He has been away from home since 10 boarding school",
        cityOrCountry: "City",
        indoorsOrOutdoors: " Indoors",
        travel:"Everyday",
        food: null,
        dogOrCat:"Cat"
      }, 
      {
        name:"Yousef",
        from:"West Africa",
        funfact:"born in a village",
        cityOrCountry:"Lots of money in the city, otherwise country",
        indoorsOrOutdoors:"Outside but not working",
        travel: "yes",
        food: "subway",
        dogOrCat:"Cat"
      },
      {
        name: "Uriel",
        from: "Dallas, TX",
        funFact: "Plays Soccer",
        cityOrCountry: "Inbetween, rural",
        indoorsOrOutdoors: "Outdoors",
        travel: "Yes",
        food: "Subway",
        dogOrCat: null
      },
      {
        name: "Jon",
        from: "Washington State",
        funFact: "Can count in Finnish (lived in Finland)",
        cityOrCountry: "The midlands",
        indoorsOrOutdoors: "indoors",
        travel: "travel",
        food: null,
        dogOrCat: "cat"
      },
      {
        name: 'Harry',
        from: 'Denton',
        funFact: 'Degree in music education',
        cityOrCountry: 'Country but not too far from the city',
        indoorsOrOutdoors: 'Outdoors for sure, yes definitely outdoors',
        travel: 'Yes, for sure',
        food: 'Tops sounds cool, subway is lame',
        dogOrCat: '2 dogs'
      },
      {
        name: "Blake",
        from: "Springdale Arkansas",
        funFact: "Blackbelt",
        cityOrCountry: "Country",
        indoorsOutdoors: "outdoors",
        travel: "home",
        food: "tops",
        dogOrCat: "dog"
      },
      {
        name: "Alec",
        from: "Plano, TX",
        funFact: "He is a musician",
        cityOrCountry: "both",
        indoorsOrOutdoors: null,
        travel: "never leave home",
        food: "subway",
        dogOrCat: "dog"
      },
      {
        name : "Candace",
        from: "North Dallas",
        funFact: "She can weld",
        cityOrCountry: "Country",
        indoorsOrOutdoors : "Outdoors",
        travelOrStayHome: "travel every day",
        topsOrSubway: "subway",
        dogOrCat: "werewolf cat"
      },
      {
        name: "Zaid",
        from: "New Jersey",
        funFact: "Plans to get engaged soon",
        cityOrCountry: "City for now, country to retire",     indoorsOrOutdoors: "Both, depends on mood",
        travel: "new country everday",
        food:"subway",
        dogOrCat: "unfortunately, none at the moment" 
      },
      {
        name: 'Dylan',
        from: 'Round Rock',
        funFact: 'Has been in drumline for 4 years',
        cityOrCountry: 'Country',
        indoorsOrOutdoors: 'Indoors',
        travel: 'travel',
        food: 'subway',
        dogOrCat: 'both'
        },
      {
        name: "Caleb",
        from:"Wisconsin",
        funFact: "Has been to Asia",
        cityOrCountry:"City",
        indoorsOrOutdoors:"Indoors",
        travel:"yes",
        food:"subway",
        dogOrCat:"Neghter"
      },
      {
        name: "Sandra",
        from: "San Diego, CA",
        funFacts: "Moved to 5 Difference Countries",
        cityorCountry: "Both, depending on the weather",
        travel: "yes",
        food: "Subway",
        dogOrCat: "Dog"
      }
    ],
    index: 0
    // current:this.state.classmates[i]
  }
  }
  next = () => {
    this.setState({
      index: this.state.index + 1
    })
    
  }
  previous = () => {
    this.setState({
      index: this.state.index - 1
    })
  }
  render() {
  
     return(
      //  for(var i=0;i<this.state.classmates;i++){
       <div>
         <h3>{this.state.classmates[this.state.index].name}</h3>
         <h3>{this.state.classmates[this.state.index].from}</h3>
         <h3>{this.state.classmates[this.state.index].funFact}</h3>
         <h3>{this.state.classmates[this.state.index].cityorCountry}</h3>
         <h3>{this.state.classmates[this.state.index].travel}</h3>
         <h3>{this.state.classmates[this.state.index].food}</h3>
         <h3>{this.state.classmates[this.state.index].dogOrCat}</h3>

         <button onClick={ this.previous }>Previous</button>
         <button onClick={ this.next }>Next</button>
       </div>
       
       
     )
   }
  }


export default App;