import { baseApi } from "../../api/baseApi";

const ProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `/products`,
        };
      },
      providesTags: ["product,categories"],
    }),
    getSingleProducts: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/products/${id}`,
        };
      },
      providesTags: ["product,categories"],
    }),
    getProductsSearch: builder.query({
      query: ({ search }) => {
        return {
          method: "GET",
          // url: `/products?search=${search}&category=${filter}`,
          url: `/products?search=${search}`,
        };
      },
      providesTags: ["product,categories"],
    }),
    getCategorySearch: builder.query({
      query: ({ category }) => {
        return {
          method: "GET",
          // url: `/products?search=${search}&category=${filter}`,
          url: `/products?category=${category}`,
        };
      },
      providesTags: ["product,categories"],
    }),
    getFilterSearch: builder.query({
      query: ({ minPrice, maxPrice }) => {
        return {
          method: "GET",
          url: `/products?minPrice=${minPrice}&maxPrice=${maxPrice}`,
        };
      },
      providesTags: ["product,categories"],
    }),

    //   queryFn: async ({ search, filter }): Promise<any> => {
    //     try {
    //       const [searchResponse, categoryResponse] = await Promise.all([
    //         fetch(`http://localhost:4000/api/products?search=${search}`),
    //         fetch(`http://localhost:4000/api/products?category=${filter}`),
    //       ]);

    //       if (!searchResponse.ok || !categoryResponse.ok) {
    //         throw new Error("Network response was not ok.");
    //       }
    //       const [searchData, categoryData] = await Promise.all([
    //         searchResponse.json(),
    //         categoryResponse.json(),
    //       ]);
    //       return {
    //         data: {
    //           search: searchData,
    //           category: categoryData,
    //         },
    //       };
    //     } catch (error) {
    //       return error;
    //     }
    //   },
    // }),
    createProduct: builder.mutation({
      query: (data) => {
        return { method: "POST", url: "/products/create-product", body: data };
      },
      invalidatesTags: ["product,categories"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => {
        console.log(id, data);
        return {
          method: "PATCH",
          url: `/products/${id}`,
          body: data,
        };
      },
      invalidatesTags: ["product,categories"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          method: "DELETE",
          url: `/products/${id}`,
        };
      },
      invalidatesTags: ["product,categories"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductsSearchQuery,
  useGetSingleProductsQuery,
  useGetCategorySearchQuery,
  useGetFilterSearchQuery,
} = ProductApi;
