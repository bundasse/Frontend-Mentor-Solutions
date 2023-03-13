const shareBtn = document.querySelector(".shareBtn");
shareBtn.addEventListener("click",function(){
    document.querySelector(".share").classList.toggle("on");
})

const url = encodeURI(window.location.href);
const text = 'Shift the overall look and feel by adding these wonderful touches to furniture in your home';
// Facebook
const shareFB = () => {
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
}
// Twitter
const shareTwitter = () => {
  window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" +  url)
}
const sharePint = () => {
    window.open("http://www.pinterest.com/pin/create/bookmarklet/?url=https%3A%2F%2F"+ url +"%2F"+text+"%2F&media=https%3A%2F%2Fyourwebsite.com%2Fthe-image.jpg&is_video=false&description="+ text)
}