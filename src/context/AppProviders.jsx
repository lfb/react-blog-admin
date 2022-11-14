import React  from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { AuthProvider } from "./AuthContext";

import { QueryClient, QueryClientProvider } from "react-query";

export const AppProviders = ({ children }) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={new QueryClient()}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </QueryClientProvider>
        </Provider>

    )
}
