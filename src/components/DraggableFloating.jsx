import React, { useState, useEffect, useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const STORAGE_KEY = 'floatingThemePos_v1';
const SIZE = 64; // approximate size of the floating container

const DraggableFloating = () => {
  const ref = useRef(null);
  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const [pos, setPos] = useState({ left: null, top: null });

  useEffect(() => {
    // initialize position from storage or default bottom-right
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPos({ left: parsed.left, top: parsed.top });
      } catch (e) {
        setDefaultPos();
      }
    } else {
      setDefaultPos();
    }

    function onResize() {
      clampPosition();
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const setDefaultPos = () => {
    const left = Math.max(12, window.innerWidth - SIZE - 24);
    const top = Math.max(12, window.innerHeight - SIZE - 24);
    setPos({ left, top });
  };

  const clampPosition = () => {
    setPos((p) => {
      const maxLeft = Math.max(12, window.innerWidth - SIZE - 12);
      const maxTop = Math.max(12, window.innerHeight - SIZE - 12);
      let left = p.left == null ? maxLeft : Math.min(Math.max(12, p.left), maxLeft);
      let top = p.top == null ? maxTop : Math.min(Math.max(12, p.top), maxTop);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ left, top }));
      return { left, top };
    });
  };

  const onPointerDown = (e) => {
    const el = ref.current;
    if (!el) return;
    draggingRef.current = true;
    setIsDragging(true);
    try { el.setPointerCapture(e.pointerId); } catch (err) {}
    const rect = el.getBoundingClientRect();
    offsetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const newLeft = e.clientX - offsetRef.current.x;
    const newTop = e.clientY - offsetRef.current.y;
    const clampedLeft = Math.min(Math.max(8, newLeft), Math.max(8, window.innerWidth - SIZE - 8));
    const clampedTop = Math.min(Math.max(8, newTop), Math.max(8, window.innerHeight - SIZE - 8));
    setPos({ left: clampedLeft, top: clampedTop });
  };

  const onPointerUp = (e) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    const el = ref.current;
    try { el.releasePointerCapture(e.pointerId); } catch (err) {}
    // save position
    if (pos.left != null && pos.top != null) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ left: pos.left, top: pos.top }));
    }
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        position: 'fixed',
        left: pos.left != null ? pos.left + 'px' : undefined,
        top: pos.top != null ? pos.top + 'px' : undefined,
        zIndex: 60,
        width: SIZE + 'px',
        height: SIZE + 'px',
        touchAction: 'none',
        cursor: 'grab'
      }}
      className="rounded-full"
    >
      <div className="glass p-2 rounded-full shadow-neon w-full h-full flex items-center justify-center">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DraggableFloating;
