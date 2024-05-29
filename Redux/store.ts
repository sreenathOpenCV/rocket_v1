"use client";

import jobServices from '@/services/jobServices';
import paramServices from '@/services/paramServices';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
      [paramServices.reducerPath]: paramServices.reducer,
      [jobServices.reducerPath]: jobServices.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(paramServices.middleware, jobServices.middleware),
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;