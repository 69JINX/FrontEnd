import React from 'react'

function AddProductCategory() {
    return (
        <>
            <div class="container-xl px-4 mt-4">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card mb-4">
                            <div class="card-header fw-bold fs-3">Add Category</div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-5">
                                        <label class="small mb-1 fs-6" for="inputUsername">Category Name</label>
                                        <input class="form-control mb-4" id="inputUsername" type="text" placeholder="Size Name" />
                                        <label class="small mb-1  fs-6" for="inputFirstName">Category Image</label>
                                        <input class="form-control mb-4" id="inputFirstName" type="file" placeholder="Size Order" />
                                        <label class="small mb-1  fs-6" for="inputParentCategory">Parent Category</label>
                                        <select class="form-control mb-4">
                                            <option>Men</option>
                                            <option>Women</option>
                                            <option>Kids</option>
                                        </select>
                                        <label class="small mb-1  fs-6" for="inputFirstName">Category description</label>
                                        <textarea class="form-control" style={{ borderRadius: '10px', borderColor: '#dee2e6' }}></textarea>
                                    </div>
                                    <div className='d-flex justify-content-between w-25 mb-4'>
                                        <span>Status</span>
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

export default AddProductCategory