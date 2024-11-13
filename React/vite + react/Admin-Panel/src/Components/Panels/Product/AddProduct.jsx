import React from 'react'

function AddProduct() {
    return (
        <>
            <div class="container-xl px-4 mt-4">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card mb-4">
                            <div class="card-header fw-bold fs-3">Product Details</div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-5">
                                        <label class="mb-1 fs-6">Product Name</label>
                                        <input class="form-control mb-4" id="inputUsername" type="text" placeholder="Size Name" />
                                        <label class="small mb-1  fs-6" for="inputFirstName">Product description</label>
                                        <textarea class="form-control" placeholder='Description' style={{ borderRadius: '10px', borderColor: '#dee2e6' }}></textarea>
                                        <label class="small mb-1 mt-3  fs-6" for="inputFirstName">Short description</label>
                                        <textarea class="form-control mb-3" placeholder='Description' style={{ borderRadius: '10px', borderColor: '#dee2e6' }}></textarea>
                                        <label class="small mb-1  fs-6" for="InputProductImage">Product Image</label>
                                        <input class="form-control mb-4" id="InputProductImage" type="file" placeholder="Size Name" />
                                        <label class="small mb-1  fs-6" for="InputImageAnimation">Image Animation</label>
                                        <input class="form-control mb-4" id="InputImageAnimation" type="file" placeholder="Size Name" />
                                        <label class="small mb-1  fs-6" for="InputProductGallery">Product Gallery</label>
                                        <input class="form-control mb-4" id="InputProductGallery" type="file" placeholder="Size Name" />
                                        <div class="row gx-3 mb-3">
                                            <div class="col-md-6">
                                                <label class="mb-1" for="inputPrice">Price</label>
                                                <input class="form-control" id="inputPrice" type="text" placeholder="Product Price" />
                                            </div>
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputLocation">MRP</label>
                                                <input class="form-control" id="inputLocation" type="text" placeholder="Product MRP" />
                                            </div>
                                        </div>
                                        <label class="small mb-1  fs-6" for="InputProductGallery">Select Parent Category</label>
                                        <select class="form-control mb-4">
                                            <option>--Select Parent Category--</option>
                                            <option>Men</option>
                                            <option>Women</option>
                                        </select>
                                        <label class="small mb-1  fs-6" for="InputProductGallery">Select Product Category</label>
                                        <select class="form-control mb-4">
                                            <option>--Select Parent Category--</option>
                                            <option>T-Shirt</option>
                                            <option>Shirt</option>
                                        </select>
                                        <div class="row gx-3 mb-3">
                                            <div class="col-md-6">
                                                <label class="mb-1" for="inputPrice">Manage Stock</label>
                                                <select class="form-control mb-4">
                                                    <option>--Select Stock--</option>
                                                    <option>In Stock</option>
                                                    <option>Out of Stock</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputLocation">Brand Name</label>
                                                <input class="form-control" id="inputLocation" type="text" placeholder="Product MRP" />
                                            </div>
                                        </div>
                                        <div class="row gx-3 mb-3">
                                            <div class="col-md-6">
                                                <label class="mb-1" for="inputPrice">Size</label>
                                                <select class="form-control mb-4">
                                                    <option>--Select Size--</option>
                                                    <option>S</option>
                                                    <option>L</option>
                                                    <option>M</option>
                                                    <option>XL</option>
                                                    <option>XXL</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                            <label class="mb-1" for="inputPrice">Color</label>
                                                <select class="form-control mb-4">
                                                    <option>--Select Color--</option>
                                                    <option>Red</option>
                                                    <option>Orange</option>
                                                    <option>Yellow</option>
                                                    <option>White</option>
                                                </select>
                                            </div>
                                        </div>
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

export default AddProduct