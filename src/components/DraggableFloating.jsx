import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';
import { Lock, Unlock } from 'lucide-react';

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

  const pendingRef = useRef(null);
  const START_THRESHOLD = 6; // px
  const [locked, setLocked] = useState(false);

  const onDoubleClick = (e) => {
    e.stopPropagation();
    // Recenter to default position
    setDefaultPos();
    // Persist
    const left = Math.max(12, window.innerWidth - SIZE - 24);
    const top = Math.max(12, window.innerHeight - SIZE - 24);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ left, top }));
  };

  const onPointerDown = (e) => {
    if (locked) return;
    const el = ref.current;
    if (!el) return;
    // Save initial pointer to detect move vs click
    pendingRef.current = { startX: e.clientX, startY: e.clientY, pointerId: e.pointerId };
    // compute offset relative to element so that when dragging starts we can keep cursor position
    const rect = el.getBoundingClientRect();
    offsetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerMove = (e) => {
    if (locked) return;
    // If a pending pointer exists but actual drag hasn't started, check threshold
    if (pendingRef.current && !draggingRef.current) {
      const dx = e.clientX - pendingRef.current.startX;
      const dy = e.clientY - pendingRef.current.startY;
      if (Math.sqrt(dx * dx + dy * dy) >= START_THRESHOLD) {
        // start dragging
        const el = ref.current;
        draggingRef.current = true;
        setIsDragging(true);
        try { el.setPointerCapture(pendingRef.current.pointerId); } catch (err) {}
      } else {
        return; // not enough movement
      }
    }

    if (!draggingRef.current) return;

    const newLeft = e.clientX - offsetRef.current.x;
    const newTop = e.clientY - offsetRef.current.y;
    const clampedLeft = Math.min(Math.max(8, newLeft), Math.max(8, window.innerWidth - SIZE - 8));
    const clampedTop = Math.min(Math.max(8, newTop), Math.max(8, window.innerHeight - SIZE - 8));
    setPos({ left: clampedLeft, top: clampedTop });
  };

  const onPointerUp = (e) => {
    if (locked) { pendingRef.current = null; return; }
    // If we were dragging, finalize
    if (draggingRef.current) {
      draggingRef.current = false;
      setIsDragging(false);
      const el = ref.current;
      try { el.releasePointerCapture(e.pointerId); } catch (err) {}
      if (pos.left != null && pos.top != null) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ left: pos.left, top: pos.top }));
      }
    }
    // Clean pending state
    pendingRef.current = null;
  };

  return (
    <div
      ref={ref}
      onPointerDownCapture={onPointerDown}
      onPointerMoveCapture={onPointerMove}
      onPointerUpCapture={onPointerUp}
      onPointerCancelCapture={onPointerUp}
      style={{
        position: 'fixed',
        left: pos.left != null ? pos.left + 'px' : undefined,
        top: pos.top != null ? pos.top + 'px' : undefined,
        zIndex: 60,
        width: SIZE + 'px',
        height: SIZE + 'px',
        touchAction: 'none',
        cursor: isDragging ? 'grabbing' : 'grab'
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
