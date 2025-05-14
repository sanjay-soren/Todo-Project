function TodoItem2(){
    let todoname="Go to collge";
    let date ="4/10/2023";
    return <>
    <div className="row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
            <button type="button" className="btn btn-danger">Delete</button>
        </div>

    </div>
    </>
}
export default TodoItem2;