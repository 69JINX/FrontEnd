import React from 'react'

function SizeDetails() {
    return (
        <>
            <div class="container-xl px-4 mt-4">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card mb-4">
                            <div class="card-header fw-bold fs-3">Add Details</div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-5">
                                        <label class="small mb-1 fs-6" for="inputUsername">Size Name</label>
                                        <input class="form-control mb-5" id="inputUsername" type="text" placeholder="Size Name" />
                                        <label class="small mb-1  fs-6" for="inputFirstName">Size Order</label>
                                        <input class="form-control" id="inputFirstName" type="text" placeholder="Size Order" />
                                    </div>
                                    <div className='d-flex justify-content-between w-25 mb-4'>
                                        <span>Display</span>
                                        <div>
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label mx-3" for="flexRadioDefault1" >Display</label>
                                        </div>
                                        <div>
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label mx-3" for="flexRadioDefault2" >Hide</label>
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

export default SizeDetails