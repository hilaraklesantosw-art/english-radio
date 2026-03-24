import { type Station } from "@/lib/stations";

type RadioCardProps = {
  station: Station;
  isActive: boolean;
  onSelect: () => void;
};

export function RadioCard({ station, isActive, onSelect }: RadioCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-3xl border bg-white/90 p-5 text-left shadow-soft transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl ${
        isActive ? "border-sky-500 ring-2 ring-sky-200" : "border-white/80"
      }`}
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${station.accentColor}`} />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{station.country}</p>
          <h2 className="mt-2 text-xl font-semibold text-ink">{station.name}</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{station.category}</span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{station.tagline}</p>

      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-500">{station.streamType === "hls" ? "HLS stream" : "MP3/AAC stream"}</span>
        <span className={`font-semibold ${isActive ? "text-sky-600" : "text-slate-900"}`}>
          {isActive ? "Now selected" : "Tap to play"}
        </span>
      </div>
    </button>
  );
}
