document.querySelector('#submit').addEventListener('click', function(){
    // rate값을 rateResult에 출력
    let value = document.querySelector('input[name="rate"]:checked').value;
    document.querySelector('#rateResult').innerHTML = value;
    // rating에서 show 클래스를 지우고 thankyou에 추가
    document.querySelector('#rating').classList.remove('show');
    document.querySelector('#thankyou').classList.add('show');
});