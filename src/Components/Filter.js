import * as React from "react";
import classnames from "classnames";

import styles from "./styles.module.css";

class Filter extends React.Component {
  render() {
    const containerClasses = classnames("container", "mb-1", styles.container);
    const formClasses = classnames("form-horizontal", styles.form);

    return (
      <div className={containerClasses}>
        <form className={formClasses} noValidate>
          <h3 className="container-fluid">Refine your results</h3>
          <hr></hr>
          <div class="container">
            <div className="columns text-left">
              <div class="row">
                <div class="col-md">
                  
                    <div className="form-group">
                      <div className="col-3 col-sm-12">
                        <label className="form-label" htmlFor="price-from">
                          Price from
                        </label>
                      </div>
                      <div className="col-9 col-sm-12">
                        <input
                          className="form-input shadow p-1 mb-1 bg-white rounded"
                          min="0"
                          max="10000000"
                          type="number"
                          id="price-from"
                          placeholder="₹1,000,000"
                        />
                      </div>
                    </div>
                  
                </div>
                <div class="col-md">
                 
                    <div className="form-group">
                      <div className="col-3 col-sm-12">
                        <label className="form-label" htmlFor="postcode">
                          Area Code
                        </label>
                      </div>
                      <div className="col-9 col-sm-6">
                      <input
                          className="form-input shadow p-1 mb-1 bg-white rounded"
                          min="100000"
                          max="999999"
                          type="number"
                          style={{width:"300px"}}
                          id="area-code"
                          placeholder="Enter pincode"
                        />
                      </div>
                    </div>
                  
                </div>
              </div>

              <div class="row">
                <div class="col-md">
                  
                    <div className="form-group">
                      <div className="col-3 col-sm-12">
                        <label className="form-label" htmlFor="sortorder">
                          What are looking for ?
                        </label>
                      </div>
                      <div className="col-9 col-sm-6">
                        <select className="form-select shadow p-1 mb-1 bg-white rounded" id="sortorder">
                        
                          <option value="ob">1 BHK</option>
                          <option value="tb">2 BHK</option>
                          <option value="thb">3 BHK</option>
                          <option value="pg">PG</option>
                          <option value="fm">Flatmate</option>
                        </select>
                      </div>
                    </div>
                
                </div>

                <div class="col-md">
                  
                    <div className="form-group">
                      <div className="col-3 col-sm-12">
                        <label className="form-label" htmlFor="postcode">
                          Gender
                        </label>
                      </div>
                      <div className="col-9 col-sm-6">
                        <select className="form-select" id="postcode">
                          <option value="m">Male</option>
                          <option value="f">Female</option>
                        </select>
                      </div>
                    </div>
                 
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
