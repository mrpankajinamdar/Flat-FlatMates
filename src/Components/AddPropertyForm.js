import React from "react";
import Form from 'react-bootstrap/Form'
function AddPropertyForm() {


    return (
        <div className="container">
            <div className="row justify-content-center box-height">
                <div className="col-6 align-self-center shadow-lg">
                    <div class="w3-container w3-padding-32" >
                        <form class="row g-3 justify-content-center">
                            <div class="col-12">
                                <label for="inputEmail4" class="form-label">Flat No</label>
                                <input type="text" class="form-control" id="flatno" placeholder="A3" style={{ maxWidth: "600px" }} />
                            </div>
                            <div class="col-12">
                                <label for="inputEmail4" class="form-label">Type</label>
                                <input type="text" class="form-control" placeholder="2BHK" id="inputType" style={{ maxWidth: "600px" }} />
                            </div>
                            <div class="col-12">
                                <label for="inputPassword4" class="form-label">Apartment</label>
                                <input type="text" class="form-control" id="apartment" placeholder="Oberoi Heights" style={{ maxWidth: "600px" }} />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Near Vithal Mandir,Taroda Kh" style={{ maxWidth: "600px" }} />
                            </div>
                            <div class="col-12">
                                <label for="inputCity" class="form-label">City</label>
                                <select id="inputCity" class="form-select form-control" style={{ maxWidth: "600px" }}>
                                    <option selected>Pune</option>
                                    <option>Mumbai</option>
                                    <option>Hyderabad</option>
                                    <option>Bangalore</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="inputState" class="form-label">State</label>
                                <input type="text" class="form-control" id="inputState" placeholder="Maharashtra" style={{ maxWidth: "600px" }} />
                            </div>

                            <div class="col-12">
                                <label for="inputPincode" class="form-label">Pincode</label>
                                <input type="number" class="form-control" id="inputPincode" placeholder="411002" style={{ maxWidth: "600px" }} />
                            </div>
                            {/* <div class="col-12">
                            <div class="form-check">
                                <label for="inputPG" class="form-label">PG</label>
                                <input class="form-check-input" type="checkbox" id="gridCheck" value="Yes" style={{ maxWidth: "600px" }} />
                                <input class="form-check-input" type="checkbox" id="gridCheck" value="No" />
                                <label class="form-check-label" for="gridCheck">
                                </label>
                            </div>
                        </div>
                        <div>
                            if PG selected show other details like details of ppl living there
                        </div> */}
                            <div class="col-12">
                                <Form.Group controlId="formFileMultiple" className="mb-3" />
                                <Form.Label>Upload property photos</Form.Label>
                                <Form.Control type="file" style={{ maxWidth: "600px" }} multiple />
                            </div>
                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-primary text-center">Add a property</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddPropertyForm;