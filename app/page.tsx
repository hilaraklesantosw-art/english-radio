"use client";

import { useMemo, useState } from "react";
import { AudioPlayer } from "@/components/AudioPlayer";
import { RadioCard } from "@/components/RadioCard";
import { stations, type Station } from "@/lib/stations";

export default function HomePage() {
  const [activeStation, setActiveStation] = useState<Station | null>(stations[0]);

  const groupedStations = useMemo(() => stations, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_40%),linear-gradient(180deg,_#f8fafc_0%,_#e2e8f0_100%)] pb-44">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 max-w-3xl">
          <span className="inline-flex rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 backdrop-blur">
            Global English Radio
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Listen to English news, talk, and culture from one clean radio hub.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Tap any station card to start playback. The player stays pinned at the bottom so browsing the catalog
            never interrupts listening.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {groupedStations.map((station) => (
            <RadioCard
              key={station.id}
              station={station}
              isActive={activeStation?.id === station.id}
              onSelect={() => setActiveStation(station)}
            />
          ))}
        </div>
      </section>

      <AudioPlayer station={activeStation} />
    </main>
  );
}
