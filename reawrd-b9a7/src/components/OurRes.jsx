
const OurRes = ({ recipe ,HandleCook}) => {
    // console.log(recipe)

    const { recipe_id, recipe_name, short_description, ingredients, preparing_time, calories, recipe_image } = recipe



    return (
        <div className="border rounded-md my-2 p-2">
            {/* -----Image---------- */}
            <div className="p-2">
                <img className="rounded-md h-[250px] w-full" src={recipe_image} />

            </div>
            <hr />
            {/* ----Information */}
            <h1 className="mt-4  text-2xl font-bold">{recipe_name}</h1>

            <p className="font-semibold text-gray-500 mt-2">{short_description}</p>

            <h2 className="mt-4  text-xl font-bold">Ingredients: {ingredients.length}</h2>

            <ul class="list-disc">
                {ingredients.map(ingredient => <div className="flex items-center gap-2">
                    <img className="w-3 border border-black rounded-full" src="https://pixy.org/src/424/thumbs350/4240766.jpg"></img>
                    <li> {ingredient}</li>
                </div>)}
            </ul>

            {/* ---------Time and buttons */}
            <div className="flex items-center gap-5 my-3 font-semibold">
                <div className="flex items-center gap-2">
                    <img className="w-4" src="https://static-00.iconduck.com/assets.00/timer-icon-512x512-vrl212i7.png" alt="" />
                    <p>{preparing_time} Minute</p>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-5 rounded-full" src="https://png.pngtree.com/png-vector/20190319/ourmid/pngtree-vector-fire-icon-png-image_845843.jpg" alt="" />
                    <p>{calories} Calories</p>
                </div>
            </div>

            <button onClick={()=>HandleCook(recipe)} className="btn btn-sm rounded-full btn-success my-4">Want to Cook</button>
        </div>

    );
};

export default OurRes;