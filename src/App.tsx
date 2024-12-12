import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import AddPet from './pages/AddPet';
import EditPet from './pages/EditPet';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/new-pet" element={<AddPet />} />
        <Route path="/mypage/edit-pet/:id" element={<EditPet />} />
      </Route>
    </Routes>
  );
}

export default App;
