export const getCategories = () => {
  return fetch("http://localhost:8000/categories", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json())
}

export const getCategoryById = (categoryId) => {
  return fetch(`http://localhost:8000/categories/${categoryId}`, {
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

export const updateCategory = (categoryId, category) => {
  return fetch(`http://localhost:8000/categories/${categoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(category)
  })
}

export const deleteCategory = (categoryId) => {
  return fetch(`http://localhost:8000/categories/${categoryId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Token ${localStorage.getItem("token")}`
    }
  })
}