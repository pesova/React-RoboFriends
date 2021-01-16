import Card from './Card';

function CardList({robots}) {
    const looped = robots.map((user, i) => {
        return(
            <Card key= {robots[i].id} id= {robots[i].id} name= {robots[i].name} email= {robots[i].email}/>
        )
    });
    return(
        <div>
            {looped}
            
        </div>
        
    )
}

export default CardList;