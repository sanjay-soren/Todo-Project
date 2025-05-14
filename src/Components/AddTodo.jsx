function AddTodo(){
    return <>
        <div className="row">
            <div className="col-6">
            <input type="text" placeholder="Enter TOdo here" />
        </div>
        <div className="col-4">
            <input type="date" />
        </div>
        <div className="col-2">
            <button type="button" class="btn btn-success add-btn">Add</button>
        </div>
        </div>
    </>
}
export default AddTodo;