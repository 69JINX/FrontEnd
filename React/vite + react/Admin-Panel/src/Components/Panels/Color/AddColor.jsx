import React, { useState } from 'react'

function AddColor() {
    const [color, setColor] = useState('#000000');
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    return (
        <>
            <div class="container-xl px-4 mt-4">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card mb-4">
                            <div class="card-header fw-bold fs-3">Add Color</div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-5">
                                        <label class="small mb-1 fs-6" for="inputUsername">Color Name</label>
                                        <input class="form-control mb-5" id="inputUsername" type="text" placeholder="Size Name" />
                                        <label class="small mb-1  fs-6" for="inputFirstName">Color Code</label>
                                        <input class="form-control" id="inputFirstName" type="text" placeholder="Size Order" />
                                    </div>
                                    <div className='mb-5'>
                                        <span>Color Picker</span>
                                        <div className='mt-3'>
                                            <input class="form-check-input me-2" type="color" onChange={handleColorChange} style={{ width: '50px' }} name="flexRadioDefault" id="flexRadioDefault1" />
                                            <span>{color}</span>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary" type="button">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddColor