import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

    //console.log(props.currentUser)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        //console.log(data)
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
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
                <button className="btn btn-secondary" onSubmit={handleSubmit(onSubmit)}>Edit new user</button>
            </div>            
        </form>
    );
}
 
export default EditUserForm;

