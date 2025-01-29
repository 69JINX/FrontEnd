'use client'
import React, { useActionState, useEffect, useState } from 'react'

function WithuseActionState() {

    const [data, action, isPending] = useActionState(setUser, null); // useActionState automatically empty the form after submission 
    // in useActionState, the 1st argument is the function which should run after form submission 
    // and 2nd argument is the initial Value of 'data' State. 
    // In this case we don't want any initial value so it is null

    return (
        <>
            <form className="w-[20vw] relative" action={action}> {/* action ==> https://react.dev/reference/react-dom/components/form#handle-form-submission-on-the-client */}

                <div className='text-lg font-bold my-4 text-green-600'>With useActionState</div>

                <div>
                    <input type="text" id="name" name="user_name" className="p-2 border rounded-xl" placeholder="Enter Your Name" />
                </div>

                <button disabled={isPending} type="submit"
                    className={`p-3 my-3 rounded-xl bg-blue-600 ${isPending ? 'bg-blue-200' : 'bg-blue-600 cursor-pointer'} text-white`}>
                    {isPending ? 'Loading...' : 'Register New Account'}
                </button>

                <div className='absolute top-full left-0'>
                    {data?.error && <div className='text-red-500'>{data?.error}</div>}
                    {data?.message && <div className='text-green-500'>{data?.message}</div>}
                </div>
            </form>
        </>
    )
}

async function setUser(previousState, formData) {
    const name = formData.get("user_name");
    await wait(1000); // wait function to replicate the scenario of database connection
    if (name == '') {
        return { error: 'ERROR : Please Enter a Name!' }
    }
    return { message: 'User Saved' }
}

function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

export default WithuseActionState