export const getTags = () => {
  return fetch("http://localhost:8000/tags", {
      headers:{
          "Authorization": `Token ${localStorage.getItem("token")}`
      }
  })
      .then(response => response.json())
}

