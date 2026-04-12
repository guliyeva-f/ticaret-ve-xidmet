'use client';;
import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const GlidingCardContext = createContext(undefined);
export function GlidingCard({
  children
}) {
  const [activeId, setActiveId] = useState(null);
  const [activeContent, setActiveContent] = useState(null);
  const [activeRect, setActiveRect] = useState(null);
  const [activeConfig, setActiveConfig] = useState({
    rotation: 0,
    offset: { x: 0, y: 0 },
  });

  const leaveTimer = useRef(null);

  const registerActivation = useCallback((id, rect, content, config) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveId(id);
    setActiveContent(content);
    setActiveRect(rect);
    setActiveConfig(config);
  }, []);

  const registerDeactivation = useCallback(() => {
    leaveTimer.current = setTimeout(() => {
      setActiveId(null);
    }, 50);
  }, []);

  return (
    <GlidingCardContext.Provider
      value={{
        activeId,
        activeContent,
        activeRect,
        activeConfig,
        registerActivation,
        registerDeactivation,
      }}>
      {children}
    </GlidingCardContext.Provider>
  );
}
export function GlidingCardItem({
  children,
  className,
  target,
  offset = { x: 0, y: 0 },
  rotation = 0,
  as,
  ...props
}) {
  const context = useContext(GlidingCardContext);
  if (!context)
    throw new Error('GlidingCardItem must be used within GlidingCard');
  const id = React.useId();
  const cardId = `gliding-card-${id}`;
  const Tag = (as || 'div');
  const handleActivate = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    context.registerActivation(id, rect, target, {
      rotation,
      offset: { x: offset.x ?? 0, y: offset.y ?? 0 },
    });
  };
  const handleDeactivate = () => {
    context.registerDeactivation();
  };

  return (
    <Tag
      id={id}
      role='button'
      tabIndex={0}
      aria-describedby={context.activeId === id ? cardId : undefined}
      aria-expanded={context.activeId === id}
      {...props}
      onMouseEnter={(e) => {
        handleActivate(e);
        props.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        handleDeactivate();
        props.onMouseLeave?.(e);
      }}
      onFocus={(e) => {
        handleActivate(e);
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        handleDeactivate();
        props.onBlur?.(e);
      }}
      className={cn(
        'cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ',
        className
      )}>
      {children}
    </Tag>
  );
}
export function GlidingCardContent({
  className
}) {
  const context = useContext(GlidingCardContext);
  if (!context)
    throw new Error('GlidingCardContent must be used within GlidingCard');
  const containerRef = useRef(null);
  const { activeId, activeContent, activeRect, activeConfig } = context;
  const getRelativePosition = () => {
    if (!activeRect || !containerRef.current) return { top: 0 };
    const containerRect = containerRef.current.getBoundingClientRect();
    const topOfItem = activeRect.top - containerRect.top;
    const centerOfItem = topOfItem + activeRect.height / 2;
    return { top: centerOfItem + (activeConfig.offset?.y || 0) };
  };

  const pos = getRelativePosition();
  const currentCardId = activeId ? `gliding-card-${activeId}` : undefined;

  return (
    <div
      ref={containerRef}
      className='relative w-full h-full pointer-events-none'>
      <AnimatePresence>
        {activeId && activeRect && (
          <motion.div
            id={currentCardId}
            role='tooltip'
            className={cn('absolute left-0 z-50 pointer-events-auto', className)}
            style={{ transformOrigin: 'center left' }}
            initial={{
              opacity: 0,
              scale: 0.9,
              x: (activeConfig.offset?.x || 0) - 20,
              top: pos.top,
              y: '-50%', // Anchor center of card to center of item
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: activeConfig.offset?.x || 0,
              top: pos.top,
              y: '-50%',
              rotateZ: activeConfig.rotation || 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              x: (activeConfig.offset?.x || 0) - 20,
              rotateZ: activeConfig.rotation || 0,
              y: '-50%',
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}>
            {activeContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
