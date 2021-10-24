import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const user=useAuth();
    // console.log('user' ,user)
    const onSubmit = data => {
        // console.log(data)
    };
  
    return (
        <div >
           <h2> Your shipping cost: $10000</h2>
           <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input  defaultValue={user.user.displayName} {...register("name")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue={user.user.email} {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span className="error">This field is required</span>}

      <input placeholder="Addres"  {...register("address")} />
      <input placeholder="City" {...register("city")} />
      <input placeholder="Phone" {...register("phone")} />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;