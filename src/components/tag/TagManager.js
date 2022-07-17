export const getTags = () => {
  return fetch("http://localhost:8000/tags", {
      headers:{
          "Authorization": `Token ${localStorage.getItem("token")}`
      }
  })
      .then(response => response.json())
}

export const createTag = (game) => {
  return fetch("", { })
    .then
}