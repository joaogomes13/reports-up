import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './pages/Form';
import Stands from './pages/Stands';

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Stands />} />
                    <Route path='/form' element={<Form />} />
                </Routes>
            </main>
        </Router>
    );
}