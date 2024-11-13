import React from 'react'
import { Link } from 'react-router-dom'
import ReadMoreReact from 'read-more-react';


function ViewCategory() {
    return (
        <>
            <div class="container-xl px-4 mt-4">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card mb-4">
                            <div class="card-header fw-bold fs-3">View Sizes</div>
                            <div class="card-body">
                                <form className='mx-auto'>
                                    <div class="mx-auto">
                                        <table class="w-100 my-2">
                                            <thead>
                                                <tr class="text-left  border-bottom border-dark">
                                                    <th>Delete
                                                        <input type="checkbox" name="deleteAll" class="cursor-pointer input" />
                                                    </th>
                                                    <th>Sno</th>
                                                    <th>Category Name</th>
                                                    <th>Description</th>
                                                    <th>Action</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" name="delete" class=" cursor-pointer input" />
                                                    </td>
                                                    <td>1</td>
                                                    <td>name</td>
                                                    <td>
                                                        <div>

                                                            <ReadMoreReact text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione deleniti sed cum adipisci"}
                                                                lettersLimit={100}
                                                                readMoreText={'...read more'}
                                                                min={10}
                                                                ideal={15}
                                                                max={20} />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-danger cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                                                        </svg> |
                                                        <Link to={'/Dashboard/Size/Update_Size'}>
                                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-black cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Edit">
                                                                    <g>
                                                                        <path d="M3.548,20.938h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z"></path>
                                                                        <path d="M9.71,17.18a2.587,2.587,0,0,0,1.12-.65l9.54-9.54a1.75,1.75,0,0,0,0-2.47l-.94-.93a1.788,1.788,0,0,0-2.47,0L7.42,13.12a2.473,2.473,0,0,0-.64,1.12L6.04,17a.737.737,0,0,0,.19.72.767.767,0,0,0,.53.22Zm.41-1.36a1.468,1.468,0,0,1-.67.39l-.97.26-1-1,.26-.97a1.521,1.521,0,0,1,.39-.67l.38-.37,1.99,1.99Zm1.09-1.08L9.22,12.75l6.73-6.73,1.99,1.99Zm8.45-8.45L18.65,7.3,16.66,5.31l1.01-1.02a.748.748,0,0,1,1.06,0l.93.94A.754.754,0,0,1,19.66,6.29Z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </Link>
                                                    </td>
                                                    <td>Display</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewCategory