
import { useEffect, useState } from 'react'
import './App.css'
import OurRes from './components/OurRes'
import Cook from './components/Cook'

function App() {

  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    fetch('res.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  const [cooks, setCooks] = useState([])

  const HandleCook = (cook) => {
    const isExist = cooks.find(preres => preres.recipe_id === cook.recipe_id)
    if (!isExist) {
      setCooks([...cooks, cook])
    }
    else (alert('Recipe already exists.'))

  }


  const [runnings, setRunnigs] = useState([])
  const Handlerunning = (id) => {

    const DeletRes = cooks.find(preres => preres.recipe_id === id)

    const updatRes = cooks.filter(preres => preres.recipe_id !== id)

    setCooks(updatRes)

    setRunnigs([...runnings, DeletRes])
  }

  const [tTime, setTTime] = useState(0)
  const [tCal, setCal] = useState(0)

  const tTiCal=(t,c)=>{
    setTTime(parseFloat(tTime)+t)
    setCal(parseFloat(tCal)+c)
  }

  // console.log(runnings)
  // console.log(cooks)

  return (
    <>

      <div className='grid grid-cols-3 gap-3'>

        <div className='col-span-2 px-2 grid lg:grid-cols-2 gap-2'>
          {
            recipes.map(recipe => <OurRes
              key={recipe.id}
              recipe={recipe}
              HandleCook={HandleCook}
            ></OurRes>)
          } </div>



        <div className='col-span-1 text-center border p-5 rounded-lg mt-2'>
          <Cook
            key={cooks}
            cook={cooks}
            Handlerunning={Handlerunning}
            runnings={runnings}
            tTiCal={tTiCal}
            tTime={tTime}
            tCal={tCal}
          ></Cook>
        </div>


      </div>


    </>
  )
}

export default App
