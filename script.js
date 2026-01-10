// Get elements from your HTML
const video = document.getElementById('video');
const startButton = document.querySelector('.btn-primary'); // your "Start Scanning" button
const immiAppRoot = document.getElementById('immi-app-root');

let canvas;
let displaySize;

// Load face-api models
async function loadModels() {
  try {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceExpressionNet.loadFromUri('/models');
    console.log("✅ Models loaded successfully");
  } catch (err) {
    console.error("❌ Error loading models:", err);
  }
}

// Start webcam and detection
async function startScanning() {
  // Check if video element exists; if not, create it dynamically
  if (!video) {
    const vid = document.createElement('video');
    vid.id = 'video';
    vid.width = 720;
    vid.height = 560;
    vid.autoplay = true;
    vid.muted = true;
    vid.playsInline = true;
    immiAppRoot.appendChild(vid);
  }

  // Show video container
  video.style.display = 'block';

  // Start webcam
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.error("❌ Webcam error:", err);
    return;
  }

  // Wait for video to play
  video.addEventListener('play', () => {
    // Create canvas only once
    if (!canvas) {
      canvas = faceapi.createCanvasFromMedia(video);
      immiAppRoot.appendChild(canvas);
      displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);
    }

    // Start detection loop
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    }, 100);
  }, { once: true });
}

// Hook the existing Start Scanning button
startButton.addEventListener('click', startScanning);

// Load models on page load
loadModels();
