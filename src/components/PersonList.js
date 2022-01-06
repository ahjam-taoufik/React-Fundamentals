import Person from "./Person";

const persons=[
    {id:1, name:'taoufik',skill:'React'},
    {id:2, name:'ahmed',skill:'Angular'},
    {id:3, name:'fatima',skill:'Vue'},
]

// let persons= personsList.map((person)=><h1>{person.name}</h1>)


const PersonList = () => {
      
    const personList=  persons.map( person => <Person key={person.id} person={person}  />)
    return ( <ul> {personList} </ul>);
}

export default PersonList;
