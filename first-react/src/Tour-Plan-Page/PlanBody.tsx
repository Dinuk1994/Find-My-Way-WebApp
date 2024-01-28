import "./PlanBody.css";

function Plan() {
    return (
        <div className="container">

            <div id="DateRow">
                <label htmlFor="">SELECT TIME DURATION</label>
                <div className="btn-group col-2">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Starting Date
                    </button>
                    <ul className="dropdown-menu">
                        { /* Dropdown menu content */}
                    </ul>
                </div>

                <div className="btn-group col-2">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Ending Date
                    </button>
                    <ul className="dropdown-menu">
                        { /* Dropdown menu content */}
                    </ul>
                </div>
            </div>

            <br /><br />

            <div>
                <table className="table table-striped table-hover">
                    {"TRIP SHEDULE"}
                    <tbody>
                        <tr>
                            <th scope="userId">User Id</th>
                            <th scope="userName">User Name</th>
                            <th scope="plan">Plan</th>
                            <th scope="option">Option</th>

                        </tr>
                        <tr>
                            <td> Data 1</td>
                            <td> Data 2</td>
                            <td> Data 3</td>
                            <td>

                                <button type="button" className="btn btn-danger">Remove</button>

                            </td>

                        </tr>

                        <tr>
                            <td> Data 1</td>
                            <td> Data 2</td>
                            <td> Data 3</td>
                            <td>

                                <button type="button" className="btn btn-danger">Remove</button>

                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="ButtonRow">
                <button type="button" className="btn btn-info">Update</button>
                <button type="button" className="btn btn-success">Confirm</button>
            </div>
        </div>
    );
}

export default Plan;