import { useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiCheck } from 'react-icons/hi2';

/* Styled single-select (ARIA listbox pattern). Replaces the native <select>,
   whose open menu can't be styled. Keyboard: ↑ ↓ Home End Enter Space Esc Tab, plus type-to-jump. */
export default function Select({ id, value, onChange, options, placeholder, labelledBy }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const listRef = useRef(null);
  const listId = useId();
  const optionId = (i) => `${listId}-opt-${i}`;
  const selectedIndex = options.findIndex((o) => o.value === value);

  const openList = () => {
    setActive(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  };

  const close = (refocus = true) => {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  };

  const choose = (i) => {
    onChange(options[i].value);
    close();
  };

  // Focus the list when it opens so arrow keys work immediately
  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (!rootRef.current?.contains(e.target)) close(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  // Keep the highlighted option visible
  useEffect(() => {
    if (open) document.getElementById(optionId(active))?.scrollIntoView({ block: 'nearest' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, open]);

  const onButtonKey = (e) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault();
      openList();
    }
  };

  const onListKey = (e) => {
    const last = options.length - 1;
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); setActive((i) => Math.min(i + 1, last)); break;
      case 'ArrowUp': e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); break;
      case 'Home': e.preventDefault(); setActive(0); break;
      case 'End': e.preventDefault(); setActive(last); break;
      case 'Enter':
      case ' ': e.preventDefault(); choose(active); break;
      case 'Escape': e.preventDefault(); close(); break;
      case 'Tab': close(false); break;
      default:
        if (e.key.length === 1) {
          const ch = e.key.toLowerCase();
          const next = options.findIndex((o, i) => i > active && o.label.toLowerCase().startsWith(ch));
          const wrap = options.findIndex((o) => o.label.toLowerCase().startsWith(ch));
          const hit = next >= 0 ? next : wrap;
          if (hit >= 0) setActive(hit);
        }
    }
  };

  const selected = options[selectedIndex];

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={labelledBy ? `${labelledBy} ${id}` : undefined}
        onClick={() => (open ? close() : openList())}
        onKeyDown={onButtonKey}
        className={`field flex items-center justify-between gap-3 text-left ${open ? 'border-accent ring-2 ring-accent/25' : ''}`}
      >
        <span className={selected ? 'text-fg' : 'text-fg-subtle'}>{selected ? selected.label : placeholder}</span>
        <HiChevronDown
          className={`h-4 w-4 shrink-0 text-fg-subtle transition-transform duration-200 ${open ? 'rotate-180 text-accent' : ''}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            id={listId}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={labelledBy}
            aria-activedescendant={optionId(active)}
            onKeyDown={onListKey}
            data-lenis-prevent
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98, transition: { duration: 0.12 } }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute inset-x-0 top-full z-30 mt-2 max-h-72 overflow-auto rounded-xl border border-ink-700 bg-ink-900 p-1.5 shadow-2xl shadow-black/60 outline-none"
          >
            {options.map((o, i) => {
              const isSelected = o.value === value;
              const isActive = i === active;
              return (
                <li
                  key={o.value}
                  id={optionId(i)}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActive(i)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => choose(i)}
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[15px] transition-colors ${
                    isActive ? 'bg-white/[0.06] text-fg' : 'text-fg-muted'
                  }`}
                >
                  {o.label}
                  {isSelected && <HiCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
