// Matter.js Tags Simulation (Pure JS version)
// -------------------------------------------

(function () {
  // Run only in the browser
  if (typeof window === 'undefined') return;

  let Matter, Engine, Render, World, Bodies, Events, Mouse, MouseConstraint;

  async function initSimulation() {
    // Dynamically import Matter.js
    Matter = await import('https://cdn.jsdelivr.net/npm/matter-js@0.19.0/build/matter.min.js');
    Engine = Matter.Engine;
    Render = Matter.Render;
    World = Matter.World;
    Bodies = Matter.Bodies;
    Events = Matter.Events;
    Mouse = Matter.Mouse;
    MouseConstraint = Matter.MouseConstraint;

    // Select container
    const containerElement =
      document.querySelector('.tags-container, .tags-container2');
    if (!containerElement) return;

    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;

    // Create engine and world
    const engine = Engine.create();
    const world = engine.world;

    // Create renderer
    const render = Render.create({
      element: containerElement,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        pixelRatio: 2,
        background: '',
        wireframes: false,
      },
    });

    // Boundaries
    const ground = Bodies.rectangle(containerWidth / 2, containerHeight + 80, containerWidth + 200, 160, {
      isStatic: true,
    });
    const wallLeft = Bodies.rectangle(-80, containerHeight / 2, 160, containerHeight, { isStatic: true });
    const wallRight = Bodies.rectangle(containerWidth + 80, containerHeight / 2, 160, containerHeight, {
      isStatic: true,
    });
    const roof = Bodies.rectangle(containerWidth / 2, -80, containerWidth + 200, 160, { isStatic: true });

    // Tag textures (t1.png … t19.png)
    const tagTextures = Array.from({ length: 19 }, (_, i) => `/assets/img/mattericon/t${i + 1}.png`);

    const tags = tagTextures.map((texture, i) =>
      Bodies.rectangle(containerWidth / 2 + Math.random() * 200 - 100, 300 + i * 20, 180, 56, {
        chamfer: { radius: 20 },
        render: {
          sprite: {
            texture: texture,
            xScale: 1,
            yScale: 1,
          },
        },
      })
    );

    // Add all bodies
    World.add(world, [ground, wallLeft, wallRight, roof, ...tags]);

    // Mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    World.add(world, mouseConstraint);
    render.mouse = mouse;

    // Allow scroll on canvas
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    // Detect clicks vs drags
    let click = false;
    document.addEventListener('mousedown', () => (click = true));
    document.addEventListener('mousemove', () => (click = false));

    Events.on(mouseConstraint, 'mouseup', function (event) {
      if (click && event.mouse.position) {
        const pos = event.mouse.position;
        for (const body of world.bodies) {
          if (Matter.Bounds.contains(body.bounds, pos) && body.url) {
            window.open(body.url, '_blank');
          }
        }
      }
    });

    Engine.run(engine);
    Render.run(render);
  }

  // Intersection Observer — start only when visible
  const containerElement =
    document.querySelector('.tags-container, .tags-container2');
  if (!containerElement) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        initSimulation();
        observer.disconnect();
      }
    });
  });

  observer.observe(containerElement);
})();
