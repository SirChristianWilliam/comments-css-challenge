$(document).ready(onReady)

function onReady() {
    console.log("Jquery and JS ready");
    getCurrent();
    $('#send').on('click',addComment);
    $('.replyBtn').on('click',openReplyBox);
    $('.delBtn').on('click',deletePost);
    $('.editBtn').on('click',openEditBox);
    $('.likeContainer').on('click','.plusBtn',addCount);
    $('.likeContainer').on('click','.minusBtn',minusCount);
}
function addComment() {
    console.log("Add comment button clicked");
}

function openReplyBox() {
    console.log("Reply button clicked");
}

function deletePost() {
    console.log("Delete button clicked");
}

function openEditBox() {
    console.log("Edit button clicked");
}

function getCurrent() {
    console.log("in getCurrent()");
    $.ajax({
        url:'/display',
        method: 'GET'
    })
    .then((response) => {
        console.log(response,"Response in GET from server");
        render(response);
    })
    .catch((err) => {
        console.log('GET error',err);
    })
}
function render(array) {
    console.log(array, "in Render function");
    $('.totalLikes').text(array);

}
function addCount() {
    console.log("Plus btn clicked");
    console.log($(this).parent().children().next().next().text());
    let currentNumber = Number($(this).parent().children().next().next().text())+1;
    console.log($(this),"HARRRRR");
   console.log($(this).data('id'),"THE IDIDDIDID");

    $.ajax({
        method: 'PUT',
        url: `/display`,
        data: {currentNumber: currentNumber},
    })
    .then(function (response) {
        getCurrent();
        console.log('err on PUT ready state',response);
    })  
}

function minusCount() {
    console.log("Plus btn clicked");
    console.log($(this).parent().children().next().next().text());
    let currentNumber = Number($(this).parent().children().next().next().text())-1;

    $.ajax({
        method: 'PUT',
        url: `/display`,
        data: {currentNumber: currentNumber},
    })
    .then(function (response) {
        getCurrent();
        console.log('err on PUT ready state',response);
    })  
}
