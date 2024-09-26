import Props from "./components/Props"
import vinita from './assets/vinita.jpg'
import Greeting from "./components/Greeting"
import Profile from "./components/Profile"
import Status from "./components/Status"
import Counter from "./components/Counter"
import LikeButton from "./components/LikeButton"
import ProductCard from "./components/ProductCard"
import ProductCardList from "./components/ProductCardList"
import Timer from "./components/Timer"
import ColorPicker from "./components/ColorPicker"
import ToggleSwitch from "./components/ToggleSwitch"
import TextInput from "./components/TextInput"
import TodoList from "./components/TodoList"
function App() {

  const todos=['Live','Love','Laugh']

  return (
    <div className="container">
      {/* <Props name='Vinita' image={vinita} style={{borderRadius:"15px"}}/> */}

      {/* <Greeting name="VINITA"/> */}

      {/* <Profile name='VINITA MENARIA' age='20' location='Udaipur'/>
      <Profile name='MOHIT MENARIA' age='24' location='Udaipur'/>
      <Profile name='SHIKHA JOSHI' age='22' location='Banaras'/> */}

      {/* <Status status="success" />
      <Status status="error" />
      <Status status="loading" /> */}

      {/* <Counter/> */}

      {/* <LikeButton likeCount={0} />  */}

       {/* <ProductCard/>
      <ProductCardList/> */}

      {/* <Timer/> */}

      {/* <ColorPicker/> */}

      {/* <ToggleSwitch/> */}

      {/* <TextInput/> */}

      <TodoList todos ={todos}/>

    </div>

  )
}
export default App
