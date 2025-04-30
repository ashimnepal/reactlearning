import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {TextInputComponent, InputLabelComponent, SelectOptionComponent, SelectRadioComponent, TextAreaComponent} from "../../components/form/input.component";

function RegisterPage() {
   const {control, handleSubmit, formState:{errors}} = useForm();

   const submitEvent = (data) => {
    console.log("Data",data);
   }
    return (
        <React.Fragment>

            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>

                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(submitEvent)}>
                                <div>
                                    <InputLabelComponent htmlFor="fullName" label="Full Name" />
                                    <TextInputComponent name={"fullName"} placeholder={"Enter Your Full Name"} id="fullName" control={control} />             
                                </div>
                                
                                <div>
                                   <InputLabelComponent htmlFor="email" label="Email" />
                                   <TextInputComponent name= {"email"} placeholder={"Enter your email"} id="email" control={control} />
                                </div>

                                <div className="grid grid-cols-6 md:grid-cols-2 gap-4">
                                    <div>
                                        <InputLabelComponent htmlFor="password" label="Password" />
                                        <TextInputComponent type="password" control={control} name="password" id="password" placeholder="••••••••" />
                                    </div>
                                    <div>
                                        <InputLabelComponent htmlFor="confirm-password" label="Confirm password" />
                                        <TextInputComponent type="password" control={control} name="confirm-password" id="confirm-password" placeholder="••••••••" />
                                    </div>
                                </div>
                                
                                <div>
                                    <InputLabelComponent htmlFor="role" label="Role" />
                                    <SelectOptionComponent 
                                    control = {control}
                                    name = {'role'}
                                    options = {[
                                        {label: "Buyer", value: "Customer"},
                                        {label: "Seller", value: "Seller"}
                                    ]}
                                    />
                                </div>

                                <div>
                                        <InputLabelComponent htmlFor="gender" label="Gender" />
                                        <SelectRadioComponent
                                        control = {control}
                                        name = {"gender"}
                                        options = {[
                                            {label: "Male", value: "Male"},
                                            {label: "Female", value: "Female"},
                                            {label: "Others", value: "Others"}
                                        ]}
                                        />
                                </div>




                                <div>
                                    <InputLabelComponent htmlFor="tel" label="Telephone" />
                                    <TextInputComponent type="tel" control={control} name="tel" id="tel" placeholder="Enter your telephone" />
                                </div>
                                    <InputLabelComponent htmlFor="address" label="Address" />
                                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <TextAreaComponent control={control} name="address" type="text" placeholder="Enter your address"/>
                                </div>
                                <div>
                                    <InputLabelComponent htmlFor="Image" label="Upload Profile Picture" />
                                    <input type="file" name="Image" id="Image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-teal-600 hover:underline dark:text-teal-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#" className="font-medium text-teal-600 hover:underline dark:text-teal-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default RegisterPage;