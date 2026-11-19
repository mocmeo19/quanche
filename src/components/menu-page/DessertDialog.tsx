'use client';

import { useEffect, useRef, type MouseEvent } from 'react';
import { DessertDialogContent } from '@/components/menu-page/DessertDialogContent';
import type { Dessert } from '@/types/dessert';

interface DessertDialogProps {
  dessert: Dessert | null;
  isOpen: boolean;
  onClose: () => void;
}

const TITLE_ID = 'dessert-dialog-title';

export function DessertDialog({
  dessert,
  isOpen,
  onClose,
}: DessertDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    if (isOpen && !dialog.open) {
      dialog.showModal();
    }
    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const closeDialog = () => dialogRef.current?.close();

  // Lớp nền mờ thuộc chính thẻ dialog, nên chỉ đóng khi bấm trúng thẻ đó chứ không phải nội dung bên trong.
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={TITLE_ID}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="bg-coconut text-ink ease-out-expo backdrop:bg-ink/0 open:backdrop:bg-ink/60 starting:open:backdrop:bg-ink/0 m-auto max-h-[calc(100dvh-2rem)] w-[min(64rem,calc(100vw-2rem))] max-w-none translate-y-6 scale-95 overflow-hidden rounded-[2rem] p-0 opacity-0 shadow-2xl transition-[opacity,translate,scale,overlay,display] transition-discrete duration-500 backdrop:transition-[background-color,backdrop-filter,overlay,display] backdrop:transition-discrete backdrop:duration-500 open:translate-y-0 open:scale-100 open:opacity-100 open:backdrop:backdrop-blur-sm starting:open:translate-y-6 starting:open:scale-95 starting:open:opacity-0"
    >
      {dessert && (
        <DessertDialogContent
          key={dessert.slug}
          dessert={dessert}
          titleId={TITLE_ID}
          onClose={closeDialog}
        />
      )}
    </dialog>
  );
}
