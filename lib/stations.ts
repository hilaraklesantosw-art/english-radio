export type StreamType = "audio" | "hls";

export type Station = {
  id: string;
  name: string;
  tagline: string;
  country: string;
  category: string;
  streamUrl: string;
  streamType: StreamType;
  accentColor: string;
};

export const stations: Station[] = [
  {
    id: "voa-global-english",
    name: "VOA Global English",
    tagline: "International news and public affairs",
    country: "United States",
    category: "News",
    streamUrl: "https://voa-ingest.akamaized.net/hls/live/2035200/161_352R/master.m3u8",
    streamType: "hls",
    accentColor: "from-red-500 to-rose-500"
  },
  {
    id: "bbc-world-service",
    name: "BBC World Service",
    tagline: "Global reporting and live current affairs",
    country: "United Kingdom",
    category: "News",
    streamUrl: "http://a.files.bbci.co.uk/media/live/manifesto/audio/simulcast/hls/nonuk/sbr_low/ak/bbc_world_service.m3u8",
    streamType: "hls",
    accentColor: "from-blue-600 to-sky-500"
  },
  {
    id: "bbc-radio-1",
    name: "BBC Radio 1",
    tagline: "Live shows, interviews, and music culture",
    country: "United Kingdom",
    category: "Culture",
    streamUrl:
      "http://as-hls-ww-live.akamaized.net/pool_01505109/live/ww/bbc_radio_one/bbc_radio_one.isml/bbc_radio_one-audio%3d96000.norewind.m3u8",
    streamType: "hls",
    accentColor: "from-fuchsia-500 to-pink-500"
  },
  {
    id: "bbc-radio-2",
    name: "BBC Radio 2",
    tagline: "Popular music, conversation, and live presenters",
    country: "United Kingdom",
    category: "Entertainment",
    streamUrl:
      "http://as-hls-ww-live.akamaized.net/pool_74208725/live/ww/bbc_radio_two/bbc_radio_two.isml/bbc_radio_two-audio%3d96000.norewind.m3u8",
    streamType: "hls",
    accentColor: "from-amber-500 to-orange-500"
  },
  {
    id: "bbc-6-music",
    name: "BBC 6 Music",
    tagline: "Alternative music and intelligent talk segments",
    country: "United Kingdom",
    category: "Music",
    streamUrl:
      "http://as-hls-ww-live.akamaized.net/pool_81827798/live/ww/bbc_6music/bbc_6music.isml/bbc_6music-audio%3d96000.norewind.m3u8",
    streamType: "hls",
    accentColor: "from-violet-500 to-indigo-500"
  },
  {
    id: "npr-program-stream",
    name: "NPR Program Stream",
    tagline: "National Public Radio programming feed",
    country: "United States",
    category: "News",
    streamUrl: "https://npr-ice.streamguys1.com/live.mp3",
    streamType: "audio",
    accentColor: "from-slate-700 to-slate-500"
  },
  {
    id: "wnyc",
    name: "WNYC",
    tagline: "New York public radio and daily journalism",
    country: "United States",
    category: "Talk",
    streamUrl: "https://fm939.wnyc.org/wnycfm.aac",
    streamType: "audio",
    accentColor: "from-cyan-600 to-sky-500"
  },
  {
    id: "kqed",
    name: "KQED Radio",
    tagline: "Bay Area public radio with NPR programming",
    country: "United States",
    category: "News",
    streamUrl: "https://streams.kqed.org/kqedradio",
    streamType: "audio",
    accentColor: "from-emerald-600 to-teal-500"
  },
  {
    id: "kuow",
    name: "KUOW",
    tagline: "Seattle public radio with local and national news",
    country: "United States",
    category: "News",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/KUOWFM_HIGH_MP3.mp3",
    streamType: "audio",
    accentColor: "from-sky-700 to-blue-500"
  },
  {
    id: "knkx",
    name: "KNKX Public Radio",
    tagline: "Jazz, news, and Northwest reporting",
    country: "United States",
    category: "Talk",
    streamUrl: "https://knkx-live-a.edge.audiocdn.com/6284_128k/playlist.m3u8",
    streamType: "hls",
    accentColor: "from-yellow-500 to-amber-400"
  },
  {
    id: "abc-radio-national",
    name: "ABC Radio National",
    tagline: "Australian speech radio and documentary programs",
    country: "Australia",
    category: "Talk",
    streamUrl: "https://mediaserviceslive.akamaized.net/hls/live/2038316/audio/rnnsw/master.m3u8",
    streamType: "hls",
    accentColor: "from-blue-700 to-cyan-500"
  },
  {
    id: "dw-english",
    name: "DW English",
    tagline: "Germany-based world news in English",
    country: "Germany",
    category: "News",
    streamUrl: "https://dwamdstream103.akamaized.net/hls/live/2015526/dwstream103/index.m3u8",
    streamType: "hls",
    accentColor: "from-indigo-600 to-blue-400"
  },
  {
    id: "rnz-national",
    name: "RNZ National",
    tagline: "New Zealand current affairs and spoken-word radio",
    country: "New Zealand",
    category: "Talk",
    streamUrl: "https://stream-ice.radionz.co.nz/national.mp3",
    streamType: "audio",
    accentColor: "from-lime-600 to-emerald-500"
  }
];
