import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const AddUserForm = (props) => {
    const [user, setUser] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: props.currentUser
    });

    const onSubmit = (data, e) => {
        //console.log(data)
        props.addUser(data)
        e.target.reset()
    }

    return (        
        <form>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input
                type="text"
                className='form-control'
                name="name"
                    {...register("name",{
                        required: {value: true, message: "Campo Obligatorio"}
                        })          
                    }
                />
            </div>                
            <div>
                {errors.name?.message} 
            </div>
            <div className='mb-3'>
                <label className='form-label'>Username</label>
                <input
                type="text"
                className='form-control'
                name="username"
                    {...register("username",{
                        required: {value: true, message: "Campo Obligatorio"}
                        })          
                    }  
                />
            </div> 
            <div>
                {errors.username?.message} 
            </div>
            <div>
                <button className="btn btn-secondary" onSubmit={handleSubmit(onSubmit)}>Add new user</button>
            </div>                
        </form>
        
    );
}
 
export default AddUserForm;