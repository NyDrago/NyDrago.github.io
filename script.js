function startSite() {
      if (siteStarted) return;
      siteStarted = true;
      const enter = document.getElementById('enter-screen');
      enter.style.opacity = '0';
      setTimeout(() => enter.style.display = 'none', 1000);

      //made by nydrago do not copy
      const audio = document.getElementById('bg-audio');
      audio.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

      document.getElementById('speaker-svg').style.opacity = "1";
      document.getElementById('speaker-wave').style.display = "block";
    }