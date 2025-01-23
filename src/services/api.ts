/* eslint-disable @typescript-eslint/no-explicit-any */

const baseUrl = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1";

const api = {
    get: async (endpoint: string) => {
      const response = await fetch(baseUrl + endpoint, {
        headers: {
          "Content-Type": "application/json"
        },
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    },

    post: async (endpoint: string, body: any) => {
      const response = await fetch(baseUrl + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    },

    put: async (endpoint: string, body: any) => {
      const response = await fetch(baseUrl + endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    },

    delete: async (endpoint: string) => {
      const response = await fetch(baseUrl + endpoint, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        })

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }
}

export default api;