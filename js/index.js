var elPostWrapper = document.querySelector('.js-post')





function commentGenerator(comment) {
       return `
            <div class="card card-body border-0 border-bottom">
               <h5>${comment.name}</h5>
               <h6>${comment.email}</h6>
               <p>${comment.body}</p>
            </div>
`
}



function createCard(post, i) {
   var elLi = document.createElement('li');
   var card = `
   <div class="container">
      <div class="card mt-5 mb-3 p-2 ">
         <div class=" g-0">
            <div class="col-md-4 d-flex ">
               <img src="img//user.svg" class="img-fluid rounded-start w-25 mb-3" alt="user-pic">
               <div class="mx-0 my-auto">
                  <h3 class="card-title ">${post.user.name}</h3>
                  <h6 class="card-subtitle mx-0">@${post.user.username}</h6>
               </div>
            </div>
            <div class="col-md-8">
               <div class="card-body">
                  <h5 class="card-text">${post.title}</h5>
                  <p class="card-text">${post.body}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 minutes ago</small></p>
               </div>
            </div>
         </div>
         <p>
            <a class="text-decoration-underline text-black-50" data-bs-toggle="collapse" href="#collapseExample${i}"
               role="button" aria-expanded="false" aria-controls="collapseExample${i}">
               Comments
            </a>
         </p>
         <div class="collapse" id="collapseExample${i}">
            ${post.comments.map(e => commentGenerator(e))}
         </div>
      </div>
   </div>
   `
   elLi.innerHTML = card;
   elPostWrapper.appendChild(elLi);
   console.log(card);

}



function main(posts, length = posts.length) {
   for (let i = 0; i < length; i++){
      createCard(posts[i], i);
   }
}
main(posts, 10)