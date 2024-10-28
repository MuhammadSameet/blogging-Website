
import Home from "../page";

import Header from "@/app/components/header";





import Image from 'next/image';
import image1 from '@/app/assets/asset-7.webp';
import image2 from '@/app/assets/asset-8.webp';
import image3 from '@/app/assets/asset-10.webp';
import image4 from '@/app/assets/assets 101.webp';
import image5 from '@/app/assets/assest 102.webp';
import image6 from '@/app/assets/assets 103.webp';
import Link from "next/link";




export default function Blogs(){
    return (
        <div className="blog-container fade-in">
        <div className="blog-card">
          <Image src={image1} alt=" mountain img" />
          <div className="blog-card-text">
          <Link href="blogs/blog1"><h3>Hiking in Stanley, Idaho: the Best Trails & Lakes</h3></Link>
          <p>Spring is in full swing, and I am lamenting that I’m not returning to go hiking in Stanley, Idaho for a third summer. Last summer while working in Stanley, I went backpacking pretty much every weekend and visited all the hiking trails and lakes that were left on my list. While...</p>
          </div>
        </div>
        <div className="blog-card">
          <Image src={image2} alt="man stand and seeing river img" />
          <div className="blog-card-text">
          <Link href="blogs/blog2"><h3>Big Boulder Lakes: White Cloud Mountains, Idaho</h3></Link>
          <p>This past summer, I paid a visit to the Big Boulder Lakes in the White Cloud Mountains of Idaho. Compared to the Sawtooth Mountains, it’s not a very popular or accessible area for hiking. But I had heard from Stanley locals that the Boulder Chain Lakes are a must-visit location. My...</p>
          </div>
        </div>
        <div className="blog-card">
          <Image src={image3} alt="" />
          <div className="blog-card-text">
          <Link href="blogs/blog3"><h3>Boulder Chain Lakes: White Clouds, Idaho</h3></Link>
          <p>After having spent all of my backpacking trips last summer in the Sawtooth Mountains, I was eager to branch out a bit this summer and visit the White Cloud Mountains. I had read about the Boulder Chain Lakes long ago in an issue of Backpacker magazine, and was happy that they had such...</p>
          </div>
        </div>
        <div className="blog-card">
          <Image src={image4} alt="" />
          <div className="blog-card-text">
          <Link href="blogs/blog4"><h3>Sawtooth Lake Loop Hike: Stanley, Idaho</h3></Link>
          <p>A few weeks ago I set out with a group of my friends and coworkers for yet another Stanley, Idaho hiking adventure. I wanted to spend two nights in the mountains, leaving as soon as I got off work on Sunday. Due to conflicting work schedules, two of my friends could go the first night...</p>
          </div>
        </div>
        <div className="blog-card">
          <Image src={image5} alt="" />
          <div className="blog-card-text">
          <Link href="blogs/blog5"><h3>A Summer Guide to Stanley, Idaho</h3></Link>
          <p>Some of the many attractive qualities of Stanley, Idaho are the Sawtooth Mountains, the abundance of hot springs, and the quirky nightlife. I’m currently on my second summer of living in Stanley, and I feel I’ve thoroughly dabbled in what this slice of mountain heaven has to offer. In...</p>
          </div>
        </div>
        <div className="blog-card">
          <Image src={image6} alt="adventurous road" />
          <div className="blog-card-text">
          <Link href="blogs/blog6"><h3>An Adventurous Family Road Trip in Utah</h3></Link>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, modi vel corrupti nihil laborum impedit!</p>
          </div>
        </div>
      </div>

    )
}