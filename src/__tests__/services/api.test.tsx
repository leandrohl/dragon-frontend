import api from "../../services/api";

global.fetch = jest.fn() as jest.Mock;

describe("API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("GET: should fetch data successfully", async () => {
    const mockData = [{ id: 1, name: "Test Dragon" }];

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const result = await api.get("/dragons");

    expect(fetch).toHaveBeenCalledWith("https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragons", {
      headers: { "Content-Type": "application/json" },
    });
    expect(result).toEqual(mockData);
  });

  test("GET: should throw an error if response is not ok", async () => {
     (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: "Not Found",
    });

    await expect(api.get("/dragons")).rejects.toThrow("Error: Not Found");
  });

  test("POST: should send data and return response", async () => {
    const mockData = { id: 1, name: "New Dragon" };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const result = await api.post("/dragons", { name: "New Dragon" });

    expect(fetch).toHaveBeenCalledWith("https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "New Dragon" }),
    });
    expect(result).toEqual(mockData);
  });

  test("POST: should throw an error if response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: "Bad Request",
    });

    await expect(api.post("/dragons", { name: "Invalid" })).rejects.toThrow("Error: Bad Request");
  });

  test("PUT: should update data and return response", async () => {
    const mockData = { id: 1, name: "Updated Dragon" };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const result = await api.put("/dragons/1", { name: "Updated Dragon" });

    expect(fetch).toHaveBeenCalledWith("https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragons/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Updated Dragon" }),
    });
    expect(result).toEqual(mockData);
  });

  test("PUT: should throw an error if response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: "Forbidden",
    });

    await expect(api.put("/dragons/1", { name: "Invalid" })).rejects.toThrow("Error: Forbidden");
  });

  test("DELETE: should delete data and return response", async () => {
    const mockData = { message: "Deleted successfully" };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const result = await api.delete("/dragons/1");

    expect(fetch).toHaveBeenCalledWith("https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragons/1", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    expect(result).toEqual(mockData);
  });

  test("DELETE: should throw an error if response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: "Internal Server Error",
    });

    await expect(api.delete("/dragons/1")).rejects.toThrow("Error: Internal Server Error");
  });
});
