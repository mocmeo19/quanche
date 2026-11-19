export function ScrollHint() {
  return (
    <a
      href="#kham-pha"
      className="text-ink-soft hover:text-ink absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.7rem] font-semibold tracking-[0.3em] uppercase transition-colors lg:flex"
    >
      <span className="border-ink/25 flex h-11 w-7 justify-center rounded-full border-2 pt-2">
        <span className="animate-scroll-hint bg-ink/60 h-2.5 w-1 rounded-full" />
      </span>
      Cuộn xuống
    </a>
  );
}
