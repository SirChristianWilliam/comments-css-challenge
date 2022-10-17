$(document).ready(onReady)

function onReady() {
    console.log("Jquery and JS ready");
    showNewVotes();
    $('#send').on('click',addComment);
    $('.replyBtn').on('click',openReplyBox);
    $('.delBtn').on('click',deletePost);
    $('.editBtn').on('click',openEditBox);
    $('.plusBtn').on('click',addCount);
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
function render(array) {
    console.log("in render");
    console.log(array);
    console.log(array[0],"HHHHH")
    $('#comOneVote').text(array[array.length-1].vote1);
    $('#comTwoVote').text(array[array.length-1].vote2);
    $('#comThreeVote').text(array[array.length-1].vote3);
    $('#comFourVote').text(array[array.length-1].vote4);
}
function showNewVotes() {
    console.log("in loadOn");
    $.ajax({
        url: 'display',
        method: 'GET'
    })
    .then((response) => {
        console.log("in get response,",response);
        render(response);
    })
    .catch((err) => {
        console.log('GET error,',err)
    })
}
function addCount(evt) {
    evt.preventDefault();
    let comOne = Number($(this).parent().children().next().next().text());
    let addit = (comOne+=1);
    Number($(this).parent().children().next().next().text(addit));
    let newObj = {
        voteOne: $('#comOneVote').text(),
        voteTwo: $('#comTwoVote').text(),
        voteThree: $('#comThreeVote').text(),
        voteFour: $('#comFourVote').text()
    }
    $.ajax({
        url: '/display',
        method: 'POST',
        data:newObj
    })
    .then((response) => {
        console.log('In POST');
        showNewVotes();
    })
 }
function minusCount(evt) {
    evt.preventDefault();
    let comOne = Number($(this).parent().children().next().next().text());
    let addit = (comOne-=1);
    Number($(this).parent().children().next().next().text(addit));
    let newObj = {
        voteOne: $('#comOneVote').text(),
        voteTwo: $('#comTwoVote').text(),
        voteThree: $('#comThreeVote').text(),
        voteFour: $('#comFourVote').text()
    }
    $.ajax({
        url: '/display',
        method: 'POST',
        data:newObj
    })
    .then((response) => {
        console.log('In POST');
        showNewVotes();
    })
}
