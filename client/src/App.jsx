import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<h1>Inicio</h1>}></Route>
        <Route path='/login' element= {<h1>Login</h1>}></Route>
        <Route path='/register' element= {<h1>Registro</h1>}></Route>
        <Route path='tasks/' element= {<h1>Tareas</h1>}></Route>
        <Route path='/add-task' element= {<h1>Nueva Tarea</h1>}></Route>
        <Route path='/tasks/:id' element= {<h1>Actualizar Tarea</h1>}></Route>
        <Route path='/profile' element= {<h1>Perfil</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
