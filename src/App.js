import './App.css'
import UserFunctional from './Hook/UserFunctional'
// import { useState } from 'react'

function App() {
  // const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      {/* <button onClick={() => setVisible(false)}>Hide</button>
      <button onClick={() => setVisible(true)}>Show</button> */}
      {/* {visible && <Clock />} */}
      {/* <Layout>
        <h1>Hello Tee</h1>
        <BareInput
          type='password'
          value='100'
          autoFocus
          className=''
          onChange={() => {}}
        />
        <BareButton />
      </Layout> */}
      {/* <LoginControl></LoginControl> */}
      {/* <RecommendState /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UnControlledComponent /> */}
      {/* <Temperature /> */}
      {/* <Composition /> */}
      {/* <FilterableProductTable /> */}
      {/* <Cart />
      <ProductList /> */}
      {/* <UserClass /> */}
      <UserFunctional />
    </div>
  )
}

export default App
