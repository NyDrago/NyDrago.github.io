function startSite() {
      if (siteStarted) return;
      siteStarted = true;
      console.log("MADEEE BY TEMPERANCE");
      const enter = document.getElementById('enter-screen');
      enter.style.opacity = '0';
      setTimeout(() => enter.style.display = 'none', 1000);

        const audio = document.getElementById('bg-audio');
      audio.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

      document.getElementById('speaker-svg').style.opacity = "1";
      document.getElementById('speaker-wave').style.display = "block";
    }

       const eyes = [
      { eye: document.getElementById('eye1'), pupil: document.getElementById('pupil1') },
      { eye: document.getElementById('eye2'), pupil: document.getElementById('pupil2') }
    ];

       const EYE_MAX_OFFSET = 20;

    function updateEyes(mouseX, mouseY) {
      eyes.forEach(({ eye, pupil }) => {
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const distance = Math.min(Math.hypot(dx, dy), EYE_MAX_OFFSET);
        const angle = Math.atan2(dy, dx);

        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
      });
    }

    window.addEventListener('mousemove', (e) => updateEyes(e.clientX, e.clientY));
