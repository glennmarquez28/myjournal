import React from 'react'
import { Form as BTForm, FormGroup, Input, Label, Col, Button} from 'reactstrap';



const ThoughtsForm = ({date,inputThoughts,handleDate,handleInputThoughts,handleSave}) => {
 
  
  
  return (
    <div className='mb-3 row d-flex justify-content-center'>
      <h1 className='text-center'>Thoughts for the Day</h1>
      <BTForm className='form p-3 bg-info color-white rounded-3 was-validated' style={{width: "500px", color: "black", fontWeight: "bold"}} onSubmit={handleSave}>
        <FormGroup className='row'>
            <Label for='date'>Date:</Label>
            <Col sm="4">
                <Input
                    style={{width: "200px"}}
                    type='text' 
                    name='date' 
                    id='date' 
                    placeholder={date}
                    value={date}
                    onChange={handleDate}
                    readOnly>
                </Input>
            </Col>
        </FormGroup>

        <FormGroup className='row'>
            <Label for='inputThoughts'>Input Thoughts:</Label>
            <Col sm="4" style={{width: "100%"}}>
                <textarea 
                    className='w-100  is-valid'
                    rows="5"
                    type='text' 
                    name='inputThoughts' 
                    id='inputThoughts' 
                    value={inputThoughts} 
                    onChange={handleInputThoughts}
                    required>
                </textarea>
                <div class="invalid-feedback">Please input Thoughts of Today.</div>
            </Col>
        </FormGroup>

        <Button style={{width: "100%", color: "white", fontWeight: "bold"}} className='border-white' type='save'color='primary'>Save</Button>
      </BTForm>
    </div>
  )
}

export default ThoughtsForm