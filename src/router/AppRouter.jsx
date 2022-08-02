import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {

    const authStatus = 'authenticated'; //'authenticated';

    return (
        <Routes>
            {
                (authStatus === 'not-authenticated')
                ? <Route path="/auth/*" element={<LoginPage />} />
                : <Route path="/*" element={<CalendarPage />} />
            }
            {/* cambia el url a esta ruta sin importar lo que escriba */}
            <Route path="/*" element={<Navigate to="/auth/login" />} />

        </Routes>
    )
}
