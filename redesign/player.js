let activeCleanup = null;

export function destroyVideo() {
  if (activeCleanup) activeCleanup();
  activeCleanup = null;
}

const icons = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4.5 20 12 8 19.5Z" fill="currentColor" stroke="none"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',
  sound: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Zm12-.5a5 5 0 0 1 0 7m2-10a9 9 0 0 1 0 13"/></svg>',
  muted: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Zm12 1 4 4m0-4-4 4"/></svg>',
  fullscreen: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5m6 0h5v5M20 15v5h-5M9 20H4v-5"/></svg>',
  exitFullscreen: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4v5H4m16 0h-5V4m0 16v-5h5M4 15h5v5"/></svg>'
};

function iconButton(label, icon) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'stream-icon';
  button.setAttribute('aria-label', label);
  button.innerHTML = icons[icon];
  return button;
}

function clock(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const whole = Math.floor(seconds);
  const hours = Math.floor(whole / 3600);
  const minutes = Math.floor((whole % 3600) / 60);
  const secs = String(whole % 60).padStart(2, '0');
  return hours ? `${hours}:${String(minutes).padStart(2, '0')}:${secs}` : `${minutes}:${secs}`;
}

export function mountVideo(container, stream, title, poster) {
  let disposed = false;
  let engine = null;
  let hideTimer = null;
  let fullscreenListener = null;
  const host = document.createElement('div');
  host.className = 'stream-player';
  const start = document.createElement('button');
  start.className = 'stream-poster';
  start.type = 'button';
  start.setAttribute('aria-label', `Play video: ${title}`);
  if (poster) {
    const image = document.createElement('img');
    image.src = poster;
    image.alt = '';
    image.onerror = () => image.remove();
    start.append(image);
  }
  const cue = document.createElement('span');
  cue.className = 'stream-play';
  cue.setAttribute('aria-hidden', 'true');
  cue.innerHTML = icons.play;
  start.append(cue);
  host.append(start);
  container.append(host);

  activeCleanup = () => {
    disposed = true;
    clearTimeout(hideTimer);
    if (fullscreenListener) document.removeEventListener('fullscreenchange', fullscreenListener);
    if (engine) engine.destroy();
    const video = host.querySelector('video');
    if (video) { video.pause(); video.removeAttribute('src'); video.load(); }
  };

  start.addEventListener('click', () => {
    const video = document.createElement('video');
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', title);
    const controls = document.createElement('div');
    controls.className = 'stream-controls';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', `Playback controls: ${title}`);
    const play = iconButton('Play', 'play');
    const elapsed = document.createElement('span');
    elapsed.className = 'stream-time';
    elapsed.textContent = '0:00';
    const seek = document.createElement('input');
    seek.type = 'range';
    seek.className = 'stream-seek';
    seek.min = '0'; seek.max = '0'; seek.step = '0.1'; seek.value = '0';
    seek.setAttribute('aria-label', 'Playback position');
    seek.setAttribute('aria-valuetext', '0:00');
    seek.disabled = true;
    const duration = document.createElement('span');
    duration.className = 'stream-time';
    duration.textContent = '0:00';
    const mute = iconButton('Mute', 'sound');
    const volume = document.createElement('input');
    volume.type = 'range'; volume.className = 'stream-volume';
    volume.min = '0'; volume.max = '1'; volume.step = '0.05'; volume.value = '1';
    volume.setAttribute('aria-label', 'Volume');
    const select = document.createElement('select');
    select.className = 'stream-quality';
    select.setAttribute('aria-label', 'Video quality');
    select.add(new Option('Auto', 'auto'));
    select.disabled = true;
    const fullscreen = iconButton('Enter fullscreen', 'fullscreen');
    const status = document.createElement('div');
    status.className = 'stream-status';
    status.setAttribute('role', 'status');
    controls.append(play, elapsed, seek, duration, mute, volume, select, fullscreen);
    host.replaceChildren(video, controls, status);
    host.classList.add('stream-ready');
    const local = ['localhost', '127.0.0.1'].includes(location.hostname);
    const url = local ? `/stream/${stream.slug}/master.m3u8` : stream.manifest;
    const showControls = () => {
      host.classList.remove('controls-hidden');
      clearTimeout(hideTimer);
      if (!video.paused && !host.matches(':focus-within')) {
        hideTimer = setTimeout(() => {
          if (!video.paused && !host.matches(':focus-within')) host.classList.add('controls-hidden');
        }, 3500);
      }
    };
    const tryPlay = () => video.play().catch(() => { if (!disposed) showControls(); });
    const fail = () => {
      if (disposed) return;
      status.textContent = 'Video could not be loaded. Please try again later.';
      host.classList.add('stream-error');
      showControls();
    };
    const updateTime = () => {
      elapsed.textContent = clock(video.currentTime);
      duration.textContent = clock(video.duration);
      if (Number.isFinite(video.duration)) {
        seek.max = String(video.duration);
        seek.value = String(video.currentTime);
        seek.disabled = false;
        seek.setAttribute('aria-valuetext', `${clock(video.currentTime)} of ${clock(video.duration)}`);
        seek.style.setProperty('--progress', `${video.currentTime / video.duration * 100 || 0}%`);
      }
    };
    video.addEventListener('loadedmetadata', updateTime);
    video.addEventListener('durationchange', updateTime);
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('play', () => { play.innerHTML = icons.pause; play.setAttribute('aria-label', 'Pause'); showControls(); });
    video.addEventListener('pause', () => { play.innerHTML = icons.play; play.setAttribute('aria-label', 'Play'); showControls(); });
    video.addEventListener('error', fail);
    video.addEventListener('click', () => { if (video.paused) tryPlay(); else video.pause(); });
    play.addEventListener('click', () => { if (video.paused) tryPlay(); else video.pause(); });
    seek.addEventListener('input', () => { video.currentTime = Number(seek.value); updateTime(); });
    mute.addEventListener('click', () => {
      if (video.muted || video.volume === 0) { if (video.volume === 0) video.volume = 0.5; video.muted = false; }
      else video.muted = true;
    });
    volume.addEventListener('input', () => { video.volume = Number(volume.value); video.muted = video.volume === 0; });
    video.addEventListener('volumechange', () => {
      const isMuted = video.muted || video.volume === 0;
      mute.innerHTML = isMuted ? icons.muted : icons.sound;
      mute.setAttribute('aria-label', isMuted ? 'Unmute' : 'Mute');
      volume.value = String(isMuted ? 0 : video.volume);
    });
    host.addEventListener('pointermove', showControls);
    host.addEventListener('pointerdown', showControls);
    host.addEventListener('focusin', showControls);
    host.addEventListener('focusout', () => { setTimeout(() => { if (!disposed) showControls(); }, 0); });
    fullscreenListener = () => {
      const on = document.fullscreenElement === host;
      fullscreen.innerHTML = on ? icons.exitFullscreen : icons.fullscreen;
      fullscreen.setAttribute('aria-label', on ? 'Exit fullscreen' : 'Enter fullscreen');
    };
    document.addEventListener('fullscreenchange', fullscreenListener);
    fullscreen.addEventListener('click', async () => {
      try {
        if (document.fullscreenElement === host) await document.exitFullscreen();
        else if (host.requestFullscreen) await host.requestFullscreen();
        else if (video.webkitEnterFullscreen) {
          video.controls = true;
          video.addEventListener('webkitendfullscreen', () => { video.controls = false; }, { once: true });
          video.webkitEnterFullscreen();
        }
      } catch {
        if (video.webkitEnterFullscreen) {
          video.controls = true;
          video.addEventListener('webkitendfullscreen', () => { video.controls = false; }, { once: true });
          video.webkitEnterFullscreen();
        } else status.textContent = 'Fullscreen is unavailable on this device.';
      }
    });
    if (!host.requestFullscreen && !video.webkitEnterFullscreen) fullscreen.hidden = true;

    if (window.Hls && window.Hls.isSupported()) {
      engine = new window.Hls();
      engine.on(window.Hls.Events.MANIFEST_PARSED, () => {
        if (disposed) return;
        engine.levels.forEach((level, i) => select.add(new Option(`${level.height}p`, String(i))));
        select.disabled = false;
        tryPlay();
      });
      engine.on(window.Hls.Events.ERROR, (_, data) => { if (data.fatal) fail(); });
      select.addEventListener('change', () => { engine.currentLevel = select.value === 'auto' ? -1 : Number(select.value); });
      engine.loadSource(url);
      engine.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
      tryPlay();
      fetch(url).then(response => { if (!response.ok) throw new Error('manifest'); return response.text(); }).then(text => {
        if (disposed) return;
        const lines = text.split(/\r?\n/);
        for (let i = 0; i < lines.length; i++) {
          if (!lines[i].startsWith('#EXT-X-STREAM-INF:')) continue;
          const match = lines[i].match(/RESOLUTION=\d+x(\d+)/);
          const next = lines.slice(i + 1).find(line => line && !line.startsWith('#'));
          if (match && next) select.add(new Option(`${match[1]}p`, new URL(next, new URL(url, location.href)).href));
        }
        select.disabled = select.options.length === 1;
      }).catch(() => {});
      select.addEventListener('change', () => {
        const position = video.currentTime;
        const playing = !video.paused;
        video.src = select.value === 'auto' ? url : select.value;
        video.addEventListener('loadedmetadata', () => {
          video.currentTime = Math.min(position, video.duration || position);
          if (playing) tryPlay();
        }, { once: true });
        video.load();
      });
    } else {
      video.controls = true;
      controls.hidden = true;
      fail();
    }
  }, { once: true });
}
