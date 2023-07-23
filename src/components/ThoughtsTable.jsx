import * as React from 'react';
import Paper from '@mui/material/Paper';

function ThoughtsTable ({journalArray, setJournalArray}) {
    const handleDelete =(journalId)=>{

        //Filter out the product with the specified productId from the array
        const newArr = journalArray.filter((journal)=>journal.journalId !== journalId);
        
        //update the state to reflect the changes
        setJournalArray(newArr);

        //update the localStorage with the  modified Array
        localStorage.setItem('journalDetails', JSON.stringify(newArr));
    };
  
  return (
    <div className='mb-5 container' style={{width: "100%"}}>
        {journalArray.map((journalArray) => (
        <div component={Paper} class="card text-white bg-secondary mb-3" style={{width: "100%"}}
        key={journalArray.journalId}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <div class="card-header">Thoughts for the Day</div>
            <div class="card-body">
                <h5 class="card-title">{journalArray.date}</h5>
                <p class="card-text">{journalArray.inputThoughts}</p>
            </div>
            <button  className='btn btn-danger'onClick={()=>handleDelete(journalArray.journalId)}>Delete</button>   
        </div>
        ))}
    </div>
  )
}

export default ThoughtsTable