export const getTags = () => {
  return fetch("http://localhost:8000/tags", {
      headers:{
          "Authorization": `Token ${localStorage.getItem("token")}`
      }
  })
      .then(response => response.json())
}

export const getTagById = (tagId) => {
  return fetch(`http://localhost:8000/tags/${tagId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json())
}

export const createTag = (newTag) => {
  return fetch("http://localhost:8000/tags", {
    method: "POST",
    headers:{
      "Authorization": `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTag)
  })
    .then(response => response.json())
}

export const updateTag = (tagId, tag) => {
  return fetch(`http://localhost:8000/tags/${tagId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(tag)
  })
}