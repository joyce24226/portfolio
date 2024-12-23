$(document).ready(function(){//시작
  
    AOS.init();
    $(window).on('load', function () {
        AOS.refresh();
    })
//scroll-move
$(".scroll_move").click(function(event){
    event.preventDefault();
    var targetOffset = Math.max($(this.hash).offset().top - 100, 0); // 최소값을 0으로 설정
    $('html, body').animate({scrollTop: targetOffset}, 500);
});


//커서 이름 만들기
const content = "이화영";
		const text = document.querySelector(".lee");
        const cursor = document.querySelector(".blink");
		text.textContent = "";
		let txtIdx = 0;
		function typingName(){
		      let txt = content[txtIdx++];
              if (txt === undefined) {
				// 타이핑이 끝나면 커서 숨김
				cursor.classList.add("hidden");
				return;
			}
			text.innerHTML += txt === "\n" ? "<br/>" : txt;
		        setTimeout(typingName, 300)
		      }
		
        const startDelay = 2500; // 3000ms = 3초
        setTimeout(() => {
			cursor.classList.remove("hidden"); // 커서를 보이게 하고 깜박임 활성화
			typingName(); // 타이핑 애니메이션 시작
		}, startDelay);



 // 이미지 태그 선택
 const image = document.querySelector(".name-box-img");
 
 // 3000ms = 3초 후에 visible 클래스 추가
 setTimeout(() => {
    image.classList.add("visible");
}, 3000);

 // 이미지 태그 선택
 const images = document.querySelector(".arrow11");
 
 // 3000ms = 3초 후에 visible 클래스 추가
 setTimeout(() => {
    images.classList.add("visible");
}, 3000);


// Swiper 초기화 코드
var swiper = new Swiper('.slider .sinner', { // .inner 클래스를 사용
    slidesPerView: 3, // 3개의 슬라이드만 보이게 설정
    spaceBetween: 30, // 슬라이드 간 간격
    centeredSlides: true, // 중앙 정렬
    loop: true, // 무한 루프
    navigation: {
        nextEl: '.slider .btn_next',
        prevEl: '.slider .btn_prev',
    },
    on: {
        slideChange: function() {
            console.log('현재 슬라이드 인덱스:', this.realIndex);
        }
    }
});

// 스크롤 시 footer가 보이면 애니메이션 시작
const footer = document.querySelector('.footer-wrap');
window.addEventListener('scroll', () => {
  const rect = footer.getBoundingClientRect();
  if (rect.top <= window.innerHeight) {
    footer.classList.add('visible');
  }
});




//about-me 스크롤시 active작동 
about = $('.about-me').position().top - 500;

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > about) 
        {
            $('.about-me').addClass("active");
        } 
        else{
            $('.about-me').removeClass("active");
        }

});


})