

const Cook = ({ cook, Handlerunning, runnings, tTiCal, tTime, tCal }) => {




    return (
        <div>

            <div >
                <h1 className="font-bold text-xl pb-3">Wants to cook: {cook.length} item.</h1>
                <hr />

                <div className="overflow-x-auto">
                    <table className="table text-center ">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th>S. No.</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {cook.map((cok, i) => <tr key={i} className="hover text-xs">
                                <th>{i + 1}</th>
                                <td>{cok.recipe_name}</td>
                                <td>{cok.preparing_time}</td>
                                <td>{cok.calories} Calories</td>
                                <td><button onClick={() => {
                                    Handlerunning(cok.recipe_id)
                                    tTiCal(parseFloat(cok.preparing_time), parseFloat(cok.calories))
                                }} className="btn btn-xs rounded-full btn-success my-4">Preparing</button></td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-52">
                <h1 className="font-bold text-xl pb-3">Currently cooking: {runnings.length} item.</h1>
                <hr />

                <div className="overflow-x-auto">
                    <table className="table text-center ">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th>S. No.</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>

                            {runnings.map((cok, i) => <tr key={i} className="hover text-xs">
                                <th>{i + 1}</th>
                                <td>{cok.recipe_name}</td>
                                <td>{cok.preparing_time}</td>
                                <td>{cok.calories} Calories</td>
                            </tr>)}

                            <tr className="hover text-xs">
                                <th></th>
                                <td></td>
                                <td>Total time: {tTime}</td>
                                <td>Total calories: {tCal}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default Cook;