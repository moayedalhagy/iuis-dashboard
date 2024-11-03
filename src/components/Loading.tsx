export default function Loading() {
  return (
    <div className="fixed inset-0   flex items-center justify-center bg-secondary/50 z-[210]">
      <img
        className="w-20 h-20 animate-spin"
        src="/images/loading.svg"
        alt="Loading icon"
      />
    </div>
  );
}
