
const personsList=[
    {id:1, name:'taoufik',skill:'React'},
    {id:2, name:'ahmed',skill:'Angular'},
    {id:3, name:'fatima',skill:'Vue'},
]

let persons= personsList.map((person)=><h1>{person.name}</h1>)


const PersonList = () => {
      
    return ( 
        <div>
            {persons}
        </div>
     );
}

export default PersonList;