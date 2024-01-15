import { useRef, useEffect, useCallback, RefObject, CSSProperties } from 'react';

interface ScrollFadeInProps {
  ref: RefObject<HTMLDivElement>;
  style: CSSProperties;
}

/**
 * useScrollFadeIn
 * Fade-in 애니메이션 효과
 * <div {...useScrollFadeIn('up', 1, 0, false)}> 이런 식으로 사용
 * @param direction 효과 방향
 * @param duration 효과 지속간
 * @param delay 효과 딜레이
 * @param infinite 효과 지속 여부
 * @returns
 */

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0, infinite = true): ScrollFadeInProps => {
  const dom = useRef<HTMLDivElement>(null);

  const handleDirection = (name: string) => {
    switch (name) {
      case 'down':
        return ['translate3d(0, -50%, 0)', 'translate3d(0, 50%, 0)'];
      case 'left':
        return ['translate3d(50%, 0, 0)', 'translate3d(-50%, 0, 0)'];
      case 'right':
        return ['translate3d(-50%, 0, 0)', 'translate3d(50%, 0, 0)'];
      default:
        return ['translate3d(0, 50%, 0)', 'translate3d(0, -50%, 0)'];
    }
  };

  const handleScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = dom;
      if (entry.isIntersecting && current) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = '1';
        current.style.transform = 'translate3d(0, 0, 0)';
      } else if (current && infinite) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = '0';
        current.style.transform = `${handleDirection(direction)[1]}`;
      }
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.9 });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction)[0],
    },
  };
};

export default useScrollFadeIn;
