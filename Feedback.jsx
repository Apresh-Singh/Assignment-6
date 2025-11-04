import { useRef, useState } from "react"

export function Feedback(){
    const [name, setName ] = useState("")
    const [course, setCourse ] = useState("")
    const [message, setMessage ] = useState("")
    const nameRef = useRef("")
    const courseRef = useRef("")
    const messageRef = useRef("")

    function handle(e){
        
        console.log("Name : ", name);
        console.log("Course : ", course);
        console.log("Message : ", message);

        nameRef.current.value="";    
        courseRef.current.value="";
        messageRef.current.value="";
    }
    return(
        <div>
            
            <h2>Feedback Form</h2>
    
            <label> Name : 
                <input type="text"
                    ref={nameRef }
                    onChange={ (e) => { setName(e.target.value);} } 
                    placeholder="Enter your name..."
                />
            </label>
            <br /><br />
            <label> Cource : 
                <input type="text"
                    ref={courseRef}
                    onChange={ (e) => { setCourse(e.target.value);} } 
                    placeholder="Enter your course..." 
                />
            </label>
            <br /><br />
            <label> Message : 
                <input type="text" 
                        ref={messageRef}
                        onChange={(e)=> {setMessage(e.target.value);} }
                        placeholder="message" 
                    />
            </label>
            <br /><br />
            <button onClick={ handle } > Print</button>

        </div>
    )
}