"use client";

import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";
import { type Station } from "@/lib/stations";

type AudioPlayerProps = {
  station: Station | null;
};

export function AudioPlayer({ station }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [status, setStatus] = useState("Select a station to begin listening.");

  useEffect(() => {
    return () => {
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !station) {
      return;
    }

    hlsRef.current?.destroy();
    hlsRef.current = null;
    audio.pause();
    audio.removeAttribute("src");
    audio.load();

    const onPlaying = () => setStatus("Playing live");
    const onWaiting = () => setStatus("Buffering live stream...");
    const onError = () => setStatus("Playback failed. Try another station.");

    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("error", onError);

    if (station.streamType === "hls") {
      if (audio.canPlayType("application/vnd.apple.mpegurl")) {
        audio.src = station.streamUrl;
      } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(station.streamUrl);
        hls.attachMedia(audio);
        hls.on(Hls.Events.MANIFEST_PARSED, () => setStatus("Ready to play"));
        hls.on(Hls.Events.ERROR, (_, data) => {
          if (data.fatal) {
            setStatus("This live stream is currently unavailable.");
          }
        });
        hlsRef.current = hls;
      } else {
        setStatus("Your browser does not support this stream format.");
      }
    } else {
      audio.src = station.streamUrl;
    }

    void audio.play().catch(() => {
      setStatus("Tap play to start audio. Some browsers block autoplay.");
    });

    return () => {
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("error", onError);
    };
  }, [station]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Live Player</p>
            <h3 className="mt-1 truncate text-lg font-semibold text-ink">
              {station ? station.name : "No station selected"}
            </h3>
            <p className="text-sm text-slate-600">{station ? station.tagline : status}</p>
          </div>

          <div className="w-full max-w-2xl">
            <audio ref={audioRef} controls playsInline preload="none" className="w-full" />
            <p className="mt-2 text-xs text-slate-500">{station ? status : "Choose a station card to load the stream."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
