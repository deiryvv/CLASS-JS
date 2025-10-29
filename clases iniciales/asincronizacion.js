//*fetch("https://jsonplaceholder.typicode.com/posts")
  /*.then((response) => response.json())
  .then((data) => console.log(data));*/

/*
  async function fetchData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data = await response. json();
        console.log(data); {}
    } catch(error) {
      console.log(error);
    }
  }
   fetchData()
/*
   const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

async function fetchData() {
    try {
        for await (let url of urls) {
            let response = await fetch(url);
            let data = await response. json();
            console.log (data); {}
        }

    } catch (error) {
      console.log(error);
    }
}
*/



fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));


  function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

async function fecthPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
}
fecthPosts();




listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

async function fecthPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
  const listOfPosts = responseData;

  for (const post of listOfPosts) {
    const postContainer = document.createElement("article");
    postContainer.id = post.id;
    postContainer.classList.add("post-item");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const id = document.createElement("h4");
     id.textContent = post.id;



    const body = document.createElement("p");
    body.textContent = post.body;

    const button = document.createElement("button");
    button.textContent = "DELETE Content";

    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);
    postContainer.append(id);
    listElement.append(postContainer);
  }
}

fetchButton.addEventListener("click", fecthPosts)
function clearPosts(title, Content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: Content,
    userId: userId,
  };
}

sendHTTPRequest(
  "POST",
  "https://jsonplaceholder.typicode.com/posts",
  post
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value;
  const Content = event.currentTarget.querySelector("#content").value;

  createPost(title, Content);
});
 
postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("article").id;
    console.log("Deleting post with ID:", postId);
    
    sendHTTPRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    
    event.target.closest("article").remove();
  }
});
