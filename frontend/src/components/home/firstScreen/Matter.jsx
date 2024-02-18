/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import helloworld from '@assets/image/icon/home/helloworld.svg';
import include from '@assets/image/icon/home/include.svg';
import blank from '@assets/image/icon/home/blackblank.svg';
import and from '@assets/image/icon/home/and.svg';
import bracket from '@assets/image/icon/home/().svg';
import andand from '@assets/image/icon/home/&&.svg';
import semicolon from '@assets/image/icon/home/;.svg';
import component from '@assets/image/icon/home/div.svg';
import arrow from '@assets/image/icon/home/arrow.svg';
import wave from '@assets/image/icon/home/pink.svg';

export default function MatterDisplay(props) {
  const containerRef = useRef();
  const canvasRef = useRef();
  useEffect(() => {
    const { Engine } = Matter;
    const { Render } = Matter;
    const { World } = Matter;
    const { Bodies } = Matter;

    const engine = Engine.create();
    engine.gravity.y = 1;

    const render = Render.create({
      element: containerRef.current,
      engine,
      canvas: canvasRef.current,
      options: {
        width: props.width,
        height: props.height,
        background: '',
        wireframes: false,
      },
    });
    const rate = props.width / 1920 || 1;
    const SizeRate = Math.min(props.width / 1920 + 0.18, 1) || 1;

    // eslint-disable-next-line react/prop-types
    const floor = Bodies.rectangle(props.width / 2, props.height + 10, props.width, 20, {
      isStatic: true,
      render: { fillStyle: '#0A0A0A' },
    });
    const leftWall = Bodies.rectangle(-40, props.height, 20, 200, {
      isStatic: true,
      render: { fillStyle: '#0A0A0A' },
    });
    const rightWall = Bodies.rectangle(props.width + 40, props.height, 20, 200, {
      isStatic: true,
      render: { fillStyle: '#0A0A0A' },
    });

    const HelloWorld = Bodies.rectangle(800 * rate, 0, 608, 144, {
      chamfer: {
        radius: [72 * rate, 72 * rate],
      },
      render: {
        sprite: {
          texture: helloworld,
          xScale: SizeRate,
          yScale: SizeRate,
        },
      },
      restitution: 0.1,
    });

    const Include = Bodies.rectangle(1600 * rate, 200 * rate, 496, 144, {
      chamfer: {
        radius: [72 * rate, 72 * rate],
      },
      render: {
        sprite: {
          texture: include,
          xScale: SizeRate,
          yScale: SizeRate,
        },
      },
      restitution: 0.1,
    });

    const Blank = Bodies.rectangle(250 * rate, 200 * rate, 300, 144, {
      chamfer: {
        radius: [40 * rate, 40 * rate],
      },
      render: {
        sprite: {
          texture: blank,
          xScale: SizeRate,
          yScale: SizeRate,
        },
      },
      restitution: 0.1,
    });

    const And = Bodies.rectangle(1000 * rate, 200 * rate, 112, 86, {
      chamfer: {},
      render: {
        sprite: {
          texture: and,
          xScale: SizeRate,
          yScale: SizeRate,
        },
      },
      restitution: 0.1,
    });

    const Bracket = Bodies.rectangle(1080 * rate, 200 * rate, 352, 108, {
      chamfer: {},
      render: {
        sprite: {
          texture: bracket,
          xScale: SizeRate,
          yScale: SizeRate,
        },
      },
      restitution: 0.1,
    });

    const AndAnd = Bodies.circle(300 * rate, 100, 100, {
      chamfer: {},
      render: {
        sprite: {
          texture: andand,
          xScale: SizeRate,
          yScale: SizeRate,
        },
      },
      restitution: 0.1,
    });

    const createSvgBody = (x, y, texture, scale, fill) => {
      const body = Bodies.fromVertices(
        x,
        y,
        texture,
        {
          render: {
            fillStyle: fill,
          },
        },
        true,
      );
      Matter.Body.scale(body, scale, scale);
      return body;
    };
    const rectVertices = [
      { x: 40, y: 0 },
      { x: 260, y: 0 },
      { x: 300, y: 72 },
      { x: 260, y: 144 },
      { x: 40, y: 144 },
      { x: 0, y: 72 },
    ];
    const Rect = createSvgBody(800 * rate, 200 * rate, rectVertices, SizeRate, '#5B4EF5');

    const Semicolon = Bodies.rectangle(1280 * rate, 200 * rate, 24.8, 95, {
      chamfer: {},
      render: {
        sprite: {
          texture: semicolon,
          xScale: SizeRate,
          yScale: SizeRate,
        },
      },
      restitution: 0.1,
    });

    const Component = Bodies.rectangle(1280 * rate, 200 * rate, 189, 116, {
      chamfer: {},
      render: {
        sprite: {
          texture: component,
          xScale: SizeRate,
          yScale: SizeRate,
        },
      },
      restitution: 0.1,
    });

    const Arrow = Bodies.rectangle(1280 * rate, 200 * rate, 184, 126, {
      chamfer: {},
      render: {
        sprite: {
          texture: arrow,
          xScale: SizeRate,
          yScale: SizeRate,
        },
      },
      restitution: 0.1,
    });

    const Wave = Bodies.rectangle(1480 * rate, 200 * rate, 300, 160, {
      chamfer: {},
      render: {
        sprite: {
          texture: wave,
          xScale: SizeRate,
          yScale: SizeRate,
        },
      },
      restitution: 0.1,
    });

    Matter.Body.scale(HelloWorld, SizeRate, SizeRate);
    Matter.Body.scale(Include, SizeRate, SizeRate);
    Matter.Body.scale(Blank, SizeRate, SizeRate);
    Matter.Body.scale(And, SizeRate, SizeRate);
    Matter.Body.scale(Bracket, SizeRate, SizeRate);
    Matter.Body.scale(AndAnd, SizeRate, SizeRate);
    Matter.Body.scale(Semicolon, SizeRate, SizeRate);
    Matter.Body.scale(Component, SizeRate, SizeRate);
    Matter.Body.scale(Arrow, SizeRate, SizeRate);
    Matter.Body.scale(Wave, SizeRate, SizeRate);

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      HelloWorld,
      Include,
      And,
      Bracket,
      AndAnd,
      Semicolon,
      Component,
      Arrow,
      Blank,
      Wave,
      Rect,
    ]);

    Matter.Runner.run(engine);
    Render.run(render);
  }, [props]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        width: '100%',
        height: props.height,
        display: 'inline-block',
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
