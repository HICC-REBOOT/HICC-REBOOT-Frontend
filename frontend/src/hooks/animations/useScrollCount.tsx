import { useCallback, useEffect, useRef, RefObject } from 'react';

/**
 * useScrollCount
 * scroll해 해당 element에 도착할 경우 숫자가 올라가는 애니메이션 효과
 * @param end 끝나는 숫자
 * @param start 시작하는 숫자
 * @param duration 실행할 시간
 * @param direction 숫자가 올라갈지(up) 내려갈지(down) 설정
 */
const useScrollCount = (
  end: number,
  start = 0,
  duration = 3000,
  direction = 'up',
) => {
  const dom = useRef<HTMLElement>();
  // const observer = useRef(null);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const onScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = dom;
      if (entry.isIntersecting && current) {
        let currentNumber = start;
        const counter = setInterval(() => {
          if (direction === 'up') {
            currentNumber += 1;
          } else {
            currentNumber -= 1;
          }
          current.innerHTML = currentNumber.toString();
          if (currentNumber === end) {
            clearInterval(counter);
          }
        }, stepTime);
      }
    },
    [end, start, stepTime, dom],
  );
  useEffect(() => {
    let observer: IntersectionObserver;
    if (dom.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(dom.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: dom as RefObject<HTMLDivElement>,
  };
};

export default useScrollCount;
