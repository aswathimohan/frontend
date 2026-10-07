import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL, PRODUCTS_URL, USERS_URL, ORDERS_URL, PAYPAL_URL } from '../constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'User', 'Order'],
    endpoints: (builder) => ({})
});