import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Photo from "./Photo";

export default function Lightbox({ images, index, onClose, onChange }) {
  const dialogRef = useRef(null);
  const isOpen = index !== null;
  const total = images.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();

    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const go = (step) => onChange((index + step + total) % total);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") go(1);
    if (event.key === "ArrowLeft") go(-1);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  const current = isOpen ? images[index] : null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      aria-label="Galería de imágenes"
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-carbon-950 p-0 text-paper backdrop:bg-carbon-950"
    >
      {current && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-carbon-300">
              <span className="text-seproc">
                {String(index + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(total).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar galería"
              className="flex size-11 items-center justify-center transition-colors hover:text-seproc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seproc"
            >
              <X className="size-6" />
            </button>
          </div>

          <div
            onClick={handleBackdropClick}
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-24"
          >
            {total > 1 && (
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Imagen anterior"
                className="absolute left-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center transition-colors hover:text-seproc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seproc sm:left-6"
              >
                <ChevronLeft className="size-8" />
              </button>
            )}

            <figure className="flex max-h-full max-w-full flex-col items-center gap-4">
              {current.src ? (
                <img
                  src={current.src}
                  alt={current.alt}
                  className="max-h-[75vh] max-w-full object-contain"
                />
              ) : (
                <div className="aspect-[3/2] w-[min(88vw,64rem)]">
                  <Photo alt={current.alt} />
                </div>
              )}
              <figcaption className="text-center font-mono text-xs uppercase tracking-[0.15em] text-carbon-300">
                {current.alt}
              </figcaption>
            </figure>

            {total > 1 && (
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Imagen siguiente"
                className="absolute right-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center transition-colors hover:text-seproc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seproc sm:right-6"
              >
                <ChevronRight className="size-8" />
              </button>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
