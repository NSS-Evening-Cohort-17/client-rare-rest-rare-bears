const remoteURL = "http://localhost:8000"

// export const getComments = () => {
//     return fetch(`${remoteURL}/comments`)
//     .then(res => res.json())
// }

// export const getCommentsById = (id) => {
//     return fetch(`${remoteURL}/comments/${id}`)
//     .then(res => res.json())
//     .then(setPostComments)
// }

export const getCommentsByUser = () => {
    return fetch(`${remoteURL}/posts/my_comments`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const addComment = (newComment) => {
    return fetch(`${remoteURL}/comments`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
    }).then(response => response.json())
}

export const deleteComment = (id) => {
    return fetch(`${remoteURL}/comments/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
}
// updateComment = comment => {
//     return fetch(`${remoteURL}/comments/${comment.id}`, {
//       method: "PUT",
//       headers: headers,
//       body: JSON.stringify(comment)
//     })
//       .then(getComments)
//   }