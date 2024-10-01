export default function TodoList(){
    const today= new Date()
    const targetDate= new Date(today.getFullYear(), today.getMonth()+5, today.getDay())

    const todos= [{id:1, descp: "Learn FullStack development", isDone: false, targetDate:targetDate},
                    {id:2, descp: "Learn Critical Thinking", isDone: false, targetDate:targetDate},
                    {id:3, descp: "Learn GenAI", isDone: false, targetDate:targetDate}
    ]
    return(
        <>
            <div className="container">
                <h1>Todo List</h1>
                <p>Here is the list of tasks, you have to do.</p>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Description</td>
                                <td>Is Done?</td>
                                <td>Target Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(
                                    todo => (
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.descp}</td>
                                            <td>{todo.isDone.toString()}</td>
                                            <td>{todo.targetDate.toDateString()}</td>
                                        </tr>
                                    )
                                )

                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}