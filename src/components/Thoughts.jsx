import React, {useState, useEffect, useRef} from 'react';

function Thoughts() {
  const [thoughtsJournal, setThoughtsJournal] = useState(
    localStorage.getItem("MyThoughts")
    ? JSON.parse(localStorage.getItem("MyThoughts"))
    : []
  );

  const dateRef = useRef(null);
  const myThoughtsRef = useRef(null);

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  function handleSubmit(event) {
    event.preventDefault();



    const thoughtsData = {
      date: dateRef.current.value,
      thoughts: myThoughtsRef.current.value,
    };
    setThoughtsJournal([...thoughtsJournal, thoughtsData])
    console.log(thoughtsData)
  }

  useEffect(() => {
    localStorage.setItem(
      "MyThoughts",
      JSON.stringify(thoughtsJournal)
    );
  }, [thoughtsJournal]); 



  return (
    <div>
    <form className="was-validated" onSubmit={handleSubmit}>
      <div style={{width: "500px", borderRadius: '5px', color: "white" }} className="container mt-5 bg-info form-outline mb-4">
        <div className="form-outline">
          <label className="form-label" htmlFor="dateRef">Date</label>
          <input style={{width: "130px"}} type={date} id="dateRef" className="form-control is-valid"  defaultValue={date} ref={dateRef} required/>
          <div className="invalid-feedback">Please input current date.</div>
        </div >
        <div className="form-outline">
          <label className="form-label" htmlFor="myThoughtsRef">Thoughtfor the Day</label>
          <textarea className="form-control is-valid" id="myThoughtsRef" rows="8" ref={myThoughtsRef} required></textarea>
          <div className="invalid-feedback">Please input your thoughts.</div>
        </div>
        <button type="submit" style={{width: "100%"}} className="btn btn-warning mt-3 mb-2" >Save</button>
      </div>
    </form>
    <div style={{width: "500px", borderRadius: '5px', color: "white" }} className="container mt-5 p-1 bg-success form-outline mb-4">
       <div className="card ">
            <div className="card-body ">
                <h5 className="card-title "></h5>
                <p className="card-text "></p>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Thoughts
