import React from 'react'
import { Form as BTForm, FormGroup, Input, Label, Col, Button} from 'reactstrap';



const TaskForm = ({date,inputTask,handleDate,handleInputTask,handleSave}) => {
 
  return (
    <div className='mb-3 row d-flex justify-content-center'>
      <h1 className='text-center'>Task for the Day</h1>
      <BTForm className='form p-3 bg-info color-white rounded-3 was-validated' onSubmit={handleSave} style={{width: "500px", color: "black", fontWeight: "bold"}}>
      <FormGroup>
          <Label for='date'>Date:</Label>
          <Col sm="4">
              <Input
                  style={{width: "200px"}}
                  type='date' 
                  name='date' 
                  id='date' 
                  placeholder={date} 
                  value={date} 
                  onChange={handleDate}
                  required>
              </Input>
              <div class="invalid-feedback">Please set Date Today.</div>
          </Col>
      </FormGroup>

      <FormGroup className='row'>
          <Label for='inputTask'>Input Task:</Label>
          <Col sm="4"  style={{width: "100%", color: "white", fontWeight: "bold"}}>
              <textarea 
                  rows="4"
                  className='w-100'
                  type='text' 
                  name='inputTask' 
                  id='inputTask' 
                  placeholder='Input fields for Task' 
                  value={inputTask} 
                  onChange={handleInputTask}
                  required>
              </textarea>
              <div class="invalid-feedback">Please input Task of Today.</div>
          </Col>
      </FormGroup>

      <Button style={{width: "100%", color: "white", fontWeight: "bold"}} className='border-white' type='save'color='primary'>Save</Button>
    </BTForm>
    </div>
  )
}

export default TaskForm
