
function Greeting({name,course,message }){
    return(
        <div className = "card">
         <h2 className="card-text">  { name } </h2> 
         <h3 className="card-text"> Course : { course } </h3>
         <h3 className="card-text"> Message : { message }  </h3>
    </div>

    )
}

export function Card(){
    return(
        <div>
          <Greeting name={"ABC"} course={"B.Tech"} message={"Good"}/>
        </div>
    )
}

