import type { Version } from "..";

export const events: Version[] = [
  {
    title: "Game bought by Microsoft",
    type: "event",
    date: "2014-11-06",
    icon: "/event_microsoft.png",
    learnMore: "https://web.archive.org/web/20140915195135/https://mojang.com/2014/09/yes-were-being-bought-by-microsoft/",
    longDescription: [
      "On November of 2014, all of Mojang was acquired by Microsoft for $2.5 billion. This included Minecraft, of course.",
      "The process began a few months earlier. Many suspected this acquisition was happening, but Mojang only confirmed it on September.",
      "According to Notch, he sold Mojang because he didn't want the responsibility of owning a company of such global significance.",
      "As soon as Mojang was sold, Notch and the other two founders (Carl and Jakob) left the company."
    ]
  }
] as const;