const particlesContainer = document.querySelector('.particles');
const stackContainer = document.createElement('div');
stackContainer.classList.add('stack');
document.body.appendChild(stackContainer);

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${Math.random() * 2 + 2}s`;

  particlesContainer.appendChild(particle);

  // Move particle to stack after animation ends
  particle.addEventListener('animationend', () => {
    particle.style.animation = 'none';
    particle.style.transform = `translateY(${window.innerHeight - 20}px)`;
    stackContainer.appendChild(particle);
  });

  setTimeout(() => {
    particle.remove();
  }, 5000);
}

// Create particles at intervals
setInterval(createParticle, 300);

document.querySelector('.letter').addEventListener('click', function () {
    this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
  });
  

  const letter = document.querySelector('.letter');
  const body = document.body;
  
  let isFront = true; // 앞면 상태를 추적
  
  letter.addEventListener('click', () => {
    if (isFront) {
      letter.style.transform = 'rotateY(-180deg)'; // 뒷면으로 회전
      body.style.background = '#000000'; // 배경 흰색
    } else {
      letter.style.transform = 'rotateY(0deg)'; // 앞면으로 회전
      body.style.background = '#000000'; // 배경 빨간색
    }
    isFront = !isFront; // 상태 변경
  });
  

  