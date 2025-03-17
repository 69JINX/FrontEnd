'use client'
import React, { useState } from 'react'

function WithoutuseActionState() {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false); // no need to create two seperate states(data and loading) when using useActionState

    const handleSubmit = async (e) => { // no need for this function when using useActionState
        e.preventDefault();
        setLoading(true);
        const received_data = await setUser(e.target.user_name.value);
        setData(received_data);
        setLoading(false);
    }

    return (
        <>
            <form className="w-[20vw] relative" onSubmit={handleSubmit} >

                <div className='text-lg font-bold my-4 text-blue-600'>Without useActionState</div>

                <div>
                    <input type="text" id="name" name="user_name" className="p-2 border rounded-xl" placeholder="Enter Your Name" />
                </div>

                <button disabled={loading} type="submit"
                    className={`p-3 my-3 rounded-xl bg-blue-600 ${loading ? 'bg-blue-200' : 'bg-blue-600 cursor-pointer'} text-white`}>
                    {loading ? 'Loading...' : 'Register New Account'}
                </button>

                <div className='absolute top-full left-0'>
                    {data?.error && <div className='text-red-500'>{data?.error}</div>}
                    {data?.message && <div className='text-green-500'>{data?.message}</div>}
                </div>
            </form>
        </>
    )
}

async function setUser(name) {
    await wait(1000); // wait function to replicate the scenario of database connection
    if (name == '') {
        return { error: 'ERROR : Please Enter a Name!' }
    }
    return { message: 'User Saved' }
}

function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

export default WithoutuseActionState