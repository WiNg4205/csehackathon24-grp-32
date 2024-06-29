
function Dashboard () {

    return (
        <div className="container">
            <h1 style={{textAlign: "center"}}>Habits</h1>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div className="box">Box 1</div>
                <div className="box">Box 2</div>
                <div className="box">Box 3</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div className="box">Box 4</div>
                <div className="box">Box 5</div>
                <div className="box">Box 6</div>
            </div>
        </div>
    )
}

export default Dashboard;