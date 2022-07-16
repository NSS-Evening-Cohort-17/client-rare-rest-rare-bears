const remoteURL = "http://localhost:8000"

export const getCategories = () => {
  return fetch("http://localhost:8000/categories", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json())
}

export const createCategory = (newCategory) => {
  return fetch("http://localhost:8000/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(newCategory)
  })
    .then(response => response.json())
}