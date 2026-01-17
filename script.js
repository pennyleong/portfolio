const projectData = {
  "puzzle": {
    title: "Mechanical Flower & Linkage System",
    summary: "Designed a 3D-printed flower puzzle with a fully functional gear and rod mechanism.",
    bullets: [
      "Engineered mechanical linkages for synchronized petal movement.",
      "Calculated clearances to account for PLA material expansion.",
      "Optimized gear meshing for a compact housing design."
    ],
    tools: "SOLIDWORKS, Parametric Modeling, 3D Printing",
    images: ["images/puzzle.png"],
    video: "flower_assembly.mp4"
  },
  "catan": {
    title: "Inclusive Catan Redesign",
    summary: "Accessibility project utilizing magnetic connectors to assist users with tremors.",
    bullets: [
      "Conducted quantitative force-based testing using calibrated gauges.",
      "Optimized part geometry for FDM 3D printing.",
      "Designed magnetic interlocking systems for secure component placement."
    ],
    tools: "SOLIDWORKS, 3D Printing, Force Analysis",
    images: ["images/catan.png"]

  },
  "cad-vehicle": {
    title: "Constrained Vehicle Assembly",
    summary: "Modeled a complex vehicle assembly with advanced mechanical constraints.",
    bullets: [
      "Applied concentric and width mates for realistic mechanical movement.",
      "Performed motion studies to validate part clearances.",
      "Managed a complex Bill of Materials (BOM) within SOLIDWORKS."
    ],
    tools: "SOLIDWORKS, Assembly Design",
    images: [] // Empty = Will be hidden
  },
  "biomechatronics": {
    title: "Exoskeleton Digital Twin & PID Control",
    summary: "Developed hardware-software communication layers for wearable robotics.",
    bullets: [
      "Mapped joint interfaces using URDF and Xacro for digital twin accuracy.",
      "Created a custom PID control library in a modular ROS environment.",
      "Improved trajectory tracking accuracy by 20% in realistic simulations."
    ],
    tools: "C++, ROS, URDF, Git",
    images: [] // Empty = Will be hidden
  },
  "bmesociety": {
    title: "Smart Knee Brace Design",
    summary: "Engineered a mechanical strap system for universal fit (24\" +/- 3\" variability).",
    bullets: [
      "Integrated EMG sensors into the mechanical prototype housing.",
      "Ensured design compliance with Health Canada and FDA standards.",
      "Balanced ergonomic user requirements with structural stability."
    ],
    tools: "SOLIDWORKS, FDA Standards, Rapid Prototyping",
    images: [] // Empty = Will be hidden
  }
};

function openDetail(projectId) {
  const data = projectData[projectId];
  const detailPanel = document.getElementById('project-detail');
  const imageContainer = document.getElementById('detail-image-container');
  const videoContainer = document.getElementById('detail-video-container'); // NEW
  const bulletContainer = document.getElementById('detail-bullets');

  // 1. Clear everything
  imageContainer.innerHTML = ''; 
  videoContainer.innerHTML = ''; // NEW
  bulletContainer.innerHTML = '';

  // 2. Set Text
  document.getElementById('detail-title').innerText = data.title;
  document.getElementById('detail-summary').innerText = data.summary;
  document.getElementById('detail-tools').innerText = data.tools;

  // 3. NEW: Video Logic
  if (data.video) {
    videoContainer.style.display = "block";
    const video = document.createElement('video');
    video.src = data.video;
    video.controls = true; // Adds play/pause buttons
    video.autoplay = true;
    video.muted = true;    // Autoplay usually requires muting
    video.loop = true;
    video.className = "detail-img"; // Reuses your aesthetic image styling
    videoContainer.appendChild(video);
  } else {
    videoContainer.style.display = "none";
  }

  // 4. Image Logic (Keep your existing code)
  if (data.images && data.images.length > 0) {
    imageContainer.style.display = "flex"; 
    data.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = "detail-img"; 
      imageContainer.appendChild(img);
    });
  } else {
    imageContainer.style.display = "none"; 
  }

  // 5. Bullets Logic (Keep your existing code)
  data.bullets.forEach(text => {
    const li = document.createElement('li');
    li.innerText = text;
    bulletContainer.appendChild(li);
  });

  detailPanel.classList.remove('hidden');
}

function closeDetail() {
  document.getElementById('project-detail').classList.add('hidden');
}

