import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form/immutable';
import SegmentButton from './inputform/segmentButton';
import StarInput from './inputform/starInput';
import HasTag from './inputform/hasTag';
import ImgForm from './imgform/imgForm';

const arrayTest=[{name:'Number 1',id:1},{name:'Number 2',id:2},{name:'Number 3',id:3}]


// const validate= values =>{
//     const errors = {};
//     const regeEmail=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
//     const regePhone=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
//     if (!values.firstname)
//     {
//         errors.firstname = 'Required first name'
//     }
//     else if (!values.lastname)
//     {
//         errors.lastname= 'Required last name'
//     }
//     else if(!regeEmail.test(values.email))
//     {
//         errors.email= 'Email must be abc@123.com'
//     }
//     else if(!regePhone.test(values.phone))
//     {
//         errors.phone= 'Phone must be number'
//     }
// }
 class MyForm extends Component {
     render() {
        const {handleSubmit}=this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className='input-test'>
                    <label>First Name</label>
                    <Field name='firstname' component='input'></Field>
                </div>
                <div className='input-test'>
                    <label>Last Name</label>
                    <Field name='lastname' component='input'></Field>
                </div>
                <div className='input-test'>
                    <label>Phone</label>
                    <Field name='phone' component='input'></Field>
                </div>
                <div className='input-test'>
                    <label>Email</label>
                    <Field name='email' component='input'></Field>
                </div>
                <div className='input-test'>
                    <Field name='numnum' arrayTest={arrayTest} component={SegmentButton}></Field>
                </div>
                <div className='input-test'>
                    <label>Star</label>
                    <Field name='star' component={StarInput}></Field>
                </div>
                <div className='input-test'>
                    <label>HasTag</label>
                    <Field name='tag' component={HasTag}></Field>
                </div>
                <div className='input-test'>
                    <label>Avatar</label>
                    <Field name='imgsrc' component={ImgForm}></Field>
                </div>
                <button type='submit'>Click to submit</button>
            </form>
        )
    }
}
export default reduxForm({
    form:'myform'
})(MyForm);