export interface VideoData {
  id: string;
  title: string;
  subtitle: string;
  category: "Bridal" | "Styling" | "Hair";
  label: string;
}

export const homeVideos: VideoData[] = [
  {
    id: "v3",
    title: "Signature Bridal Glam",
    subtitle: "Behind the scenes bridal makeup & intricate hair styling",
    category: "Bridal",
    label: "KOKA Beauty Lounge signature bridal makeup video",
  },
  {
    id: "v1",
    title: "Wedding Day Transformation",
    subtitle: "Flawless HD bridal glow, draping & jewelry setting",
    category: "Bridal",
    label: "KOKA Beauty Lounge wedding day bridal transformation video",
  },
  {
    id: "v2",
    title: "Luxury Event & Hair Artistry",
    subtitle: "Party and cocktail glam crafted for special occasions",
    category: "Styling",
    label: "KOKA Beauty Lounge event styling and hair artistry video",
  },
];
