import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Wired",
        "title": "The Science of Crypto Forensics Survives a Court Battle—for Now",
        "description": "A jury convicted Roman Sterlingov of money laundering this month. His defense team says it will appeal, saying the crypto-tracing technique at the heart of the case is “pseudoscience.”",
        "url": "https://www.wired.com/story/the-science-of-crypto-forensics-court-battle/",
        "urlToImage": "https://media.wired.com/photos/6603759fd3a75d0aa76d16ab/191:100/w_1280,c_limit/business_crypto_tracing_forensics_trial.jpg",
        "publishedAt": "2024-03-27T11:00:00Z",
        "content": "On March 12, Russian-Swedish national Roman Sterlingov was found guilty of money laundering conspiracy and other violations by a federal jury in Washington, DC, for having operated Bitcoin Fog, a ser… [+3654 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Science News | Today's Latest Science Headlines | Reuters",
        "description": "Find latest science news from every corner of the globe at Reuters.com, your online source for breaking international news coverage.",
        "url": "https://www.reuters.com/science/",
        "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=183",
        "publishedAt": "2024-03-25T11:22:24.5537024Z",
        "content": null
      },
      {
        "source": {
          "id": "business-insider-uk",
          "name": "Business Insider (UK)"
        },
        "author": "Hilary Brueck",
        "title": "Sam Altman's Retro Biosciences aims for longer lifespans by 10 years",
        "description": "Sam Altman started a $180 million side project called Retro Biosciences, hoping to add 10 healthy, enjoyable years onto the back end of our lifespans.",
        "url": "http://uk.businessinsider.com/retro-biosciences-sam-altman-longer-lifespan-2024-3",
        "urlToImage": "https://i.insider.com/65f084e490413ab8e1dbd092?width=1200&format=jpeg",
        "publishedAt": "2024-03-23T09:45:01Z",
        "content": "Sam Altman is already a tech titan. Somehow, at 38, he's been coding for three decades, and with the advent of ChatGPT and (more recently) Sora, he's quickly amassed nearly as much hype and influence… [+10452 chars]"
      },
      {
        "source": {
          "id": "hacker-news",
          "name": "Hacker News"
        },
        "author": null,
        "title": "bigscience/T0pp · Hugging Face",
        "description": "We’re on a journey to advance and democratize artificial intelligence through open source and open science.",
        "url": "https://huggingface.co/bigscience/T0pp",
        "urlToImage": "https://huggingface.co/front/thumbnails/v2-2.png",
        "publishedAt": "2021-10-18T16:37:20.4140551Z",
        "content": "Model Description\r\nT0* is a series of encoder-decoder models trained on a large set of different tasks specified in natural language prompts. We convert numerous English supervised datasets into prom… [+11344 chars]"
      },
      {
        "source": {
          "id": "hacker-news",
          "name": "Hacker News"
        },
        "author": null,
        "title": "Opening up a physics simulator for robotics",
        "description": "As part of DeepMind's mission of advancing science, we have acquired the MuJoCo physics simulator and are making it freely available for everyone, to support research everywhere.",
        "url": "https://deepmind.com/blog/announcements/mujoco",
        "urlToImage": "https://lh3.googleusercontent.com/jVZ3VN7wwx2dSowqLmhqm0qAzAmcb-1t7ks3HiNnoHknihF5sl9VDEwuCNTSxfx8jFIi7mBQkvHUdnSKXSPgYLNpvCuE4YajJeMnrYA",
        "publishedAt": "2021-10-18T16:07:20.4749314Z",
        "content": "Advancing research everywhere with the acquisition of MuJoCo\r\nWhen you walk, your feet make contact with the ground. When you write, your fingers make contact with the pen. Physical contacts are what… [+1849 chars]"
      },
      {
        "source": {
          "id": "national-geographic",
          "name": "National Geographic"
        },
        "author": "Nadia Drake",
        "title": "How these feuding map-makers shaped our fascination with Mars",
        "description": "One was an artist who loved space. His rival was a bold professional astronomer. Their race to map the red planet sparked decades of science and speculation.",
        "url": "https://www.nationalgeographic.com/science/2021/02/how-feuding-map-makers-shaped-our-fascination-with-mars.html",
        "urlToImage": "https://pmdvod.nationalgeographic.com/NG_Video/788/579/smpost_1612381336455.jpg",
        "publishedAt": "2021-02-17T14:37:21.3706142Z",
        "content": null
      },
      {
        "source": {
          "id": "national-geographic",
          "name": "National Geographic"
        },
        "author": null,
        "title": "Episode 3: Why War Zones Need Science Too",
        "description": "Undaunted by Yemen’s civil war, National Geographic explorer Ella Al-Shamahi searches on the island of Socotra for traces of the earliest known humans to leave Africa.",
        "url": "https://www.nationalgeographic.com/podcasts/overheard/season-5/episode-3-why-war-zones-need-science.html",
        "urlToImage": "https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/podcasts/Overheard/season5/episode3/nationalgeographic_2708459.jpg",
        "publishedAt": "2021-02-17T14:37:20.2759318Z",
        "content": null
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters Graphics",
        "title": "Reuters Graphics - Charts, Maps, Interactive Graphics and Videos",
        "description": "The latest world news - politics, sports, culture, science and environment - from our graphics journalists in Singapore, Bangalore, London and New York.",
        "url": "https://www.reuters.com/graphics/",
        "urlToImage": "https://www.reuters.com/graphics/cdn/img/home.jpg",
        "publishedAt": "2020-12-21T00:00:00Z",
        "content": null
      }
  ];

  render() {
    return (
      <div className="container my-3">
        <h2>NewsCat Top Headlines!</h2>
        <div className="row">
          {this.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.length>=40?element.title.slice(0,40): element.title}
                  description={element.description.length>=90?element.description.slice(0,90):element.description}
                  ImageUrl={element.urlToImage}
                  NewsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
