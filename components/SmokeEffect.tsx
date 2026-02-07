import { useRef, useEffect } from 'react';
import { 
  WebGLRenderer, 
  Scene, 
  PerspectiveCamera, 
  TextureLoader, 
  MeshLambertMaterial, 
  PlaneGeometry, 
  Mesh, 
  DirectionalLight, 
  AmbientLight, 
  Clock, 
  Color,
  Material 
} from 'three';

interface SmokeEffectProps {
  className?: string;
  isHovered?: boolean;
}

const SmokeEffect: React.FC<SmokeEffectProps> = ({ className, isHovered = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const speedMultiplierRef = useRef(1);
  const targetSpeedRef = useRef(1);

  // Update speed based on hover state
  useEffect(() => {
    targetSpeedRef.current = isHovered ? 6 : 2; // 2x base speed (6x when hovered)
  }, [isHovered]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.offsetWidth || 500;
    const height = container.offsetHeight || 400;

    const clock = new Clock();
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, width / height, 1, 10000);

    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    const light = new DirectionalLight(0xffffff, 0.8);
    light.position.set(-1, 0, 1);
    scene.add(light);

    const ambientLight = new AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    camera.position.z = 1000;
    scene.add(camera);

    // Smoke texture
    const smokeTexture = new TextureLoader().load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
    );
    
    const smokeMaterial = new MeshLambertMaterial({
      color: new Color("rgb(255, 255, 255)"),
      map: smokeTexture,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    });

    const smokeGeo = new PlaneGeometry(300, 300);
    
    interface SmokeParticle {
      mesh: Mesh;
      velocity: { x: number; y: number; rotationSpeed: number };
      initialY: number;
      initialOpacity: number;
    }
    
    const smokeParticles: SmokeParticle[] = [];

    // Create smoke particles with individual velocities
    for (let p = 0; p < 50; p++) {
      const particle = new Mesh(smokeGeo, smokeMaterial.clone());
      // Stagger initial Y positions so particles are distributed throughout the animation cycle
      // Range from -400 (very low, already rising) to 200 (mid-animation)
      const startY = (p / 50) * 600 - 400;
      
      particle.position.set(
        Math.random() * 500 - 250,
        startY,
        Math.random() * 300 + 100  // Push particles forward in Z axis
      );
      particle.rotation.z = Math.random() * Math.PI * 2;
      
      // Individual material for each particle so opacity can vary
      (particle.material as MeshLambertMaterial).opacity = 0.05 + Math.random() * 0.1;
      
      scene.add(particle);
      
      smokeParticles.push({
        mesh: particle,
        velocity: {
          x: (Math.random() - 0.5) * 0.5, // Slight horizontal drift
          y: 0.3 + Math.random() * 0.5,   // Rising speed
          rotationSpeed: (Math.random() - 0.5) * 0.002
        },
        initialY: startY,
        initialOpacity: (particle.material as MeshLambertMaterial).opacity
      });
    }

    container.appendChild(renderer.domElement);

    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      
      // Smooth transition of speed multiplier
      speedMultiplierRef.current += (targetSpeedRef.current - speedMultiplierRef.current) * 0.05;
      
      evolveSmoke();
      renderer.render(scene, camera);
    }

    function evolveSmoke() {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();
      const speedMultiplier = speedMultiplierRef.current;
      
      for (let i = 0; i < smokeParticles.length; i++) {
        const particle = smokeParticles[i];
        const mesh = particle.mesh;
        const material = mesh.material as MeshLambertMaterial;
        
        // Rotate (faster when hovered)
        mesh.rotation.z += (particle.velocity.rotationSpeed + delta * 0.1) * speedMultiplier;
        
        // Rise upward (faster when hovered)
        mesh.position.y += particle.velocity.y * speedMultiplier;
        
        // Drift horizontally with some sine wave motion
        mesh.position.x += (particle.velocity.x + Math.sin(elapsedTime + i) * 0.2) * speedMultiplier;
        
        // Scale up slightly as it rises
        const scale = 1 + (mesh.position.y - particle.initialY) * 0.001;
        mesh.scale.set(scale, scale, 1);
        
        // Fade out as it rises
        const heightProgress = (mesh.position.y - particle.initialY) / 400;
        material.opacity = particle.initialOpacity * (1 - Math.min(heightProgress, 1));
        
        // Reset particle when it goes too high or fades out
        if (mesh.position.y > 400 || material.opacity < 0.01) {
          mesh.position.y = particle.initialY - 100;
          mesh.position.x = Math.random() * 500 - 250;
          mesh.scale.set(1, 1, 1);
          material.opacity = particle.initialOpacity;
          mesh.rotation.z = Math.random() * Math.PI * 2;
        }
      }
    }

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.offsetWidth;
      const newHeight = containerRef.current.offsetHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
      smokeGeo.dispose();
      smokeMaterial.dispose();
      smokeTexture.dispose();
      smokeParticles.forEach(p => {
        (p.mesh.material as Material).dispose();
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ 
        position: 'absolute',
        top: '-40%',
        left: '-10%',
        width: '120%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 30,
      }}
    />
  );
};

export default SmokeEffect;
