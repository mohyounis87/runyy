const girl = document.getElementById('girl');
let isJumping = false;

// القفز عند الضغط على المسطرة في الحاسوب
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !isJumping) {
        jump();
    }
});

// القفز عند الضغط على الشاشة في الهاتف
document.getElementById('gameContainer').addEventListener('click', function() {
    if (!isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let jumpHeight = 150; // ارتفاع القفزة
    girl.style.bottom = jumpHeight + 'px';
    
    setTimeout(() => {
        girl.style.bottom = '0px';
        isJumping = false;
    }, 500); // زمن القفزة
}

// إضافة الحواجز العشوائية
const obstacle = document.getElementById('obstacle');
let obstaclePosition = obstacle.offsetLeft;

function moveObstacle() {
    if (obstaclePosition <= 0) {
        obstaclePosition = 1000; // إعادة تعيين الحاجز بعد تجاوزه
        obstacle.style.width = (Math.random() * 30 + 20) + 'px'; // حجم عشوائي للحاجز
    }
    obstaclePosition -= 5; // تحريك الحاجز
    obstacle.style.left = obstaclePosition + 'px';
    
    // التحقق من الاصطدام
    if (obstaclePosition < 100 && obstaclePosition > 50 && parseInt(girl.style.bottom) < 50) {
        alert('Game Over!');
        obstaclePosition = 1000; // إعادة تعيين اللعبة
    }
    
    requestAnimationFrame(moveObstacle);
}

moveObstacle();
