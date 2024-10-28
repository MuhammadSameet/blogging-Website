import Image from "next/image"

import image3 from '@/app/assets/asset-10.webp';
export default function blog2(){
    return(
        <div className="blog-page">
            <Image src={image3} alt=" mountain img" className="blog-img" />
            <h1 className="blog-h">Boulder Chain Lakes: White Clouds, Idaho</h1>
            <p className="blog-p">Spring is in full swing, and I am lamenting that I’m not returning to go hiking in Stanley, Idaho for a third summer. Last summer while working in Stanley, I went backpacking pretty much every weekend and visited all the hiking trails and lakes that were left on my list.</p><br></br>
            <p className="blog-p">While I’m very excited to go hiking here in Oregon this summer, I need a few moments to reminisce on my favorite places in the Sawtooth and White Cloud Mountains.</p><br></br>
            <p className="blog-p">I’ve intentionally not included the more popular hikes on this list such as Alice Lake, Sawtooth Lake, and Goat Lake. They are certainly gorgeous and worth a visit. There’s a reason they are the most popular destinations for hiking in Stanley, Idaho. But I wanted to make a list that features the less obvious destinations. And I do have posts about all those lakes I just mentioned if that’s what you’re after; just click on the highlighted lake name. </p><br></br>
            <p className="blog-p">Many of the trails and lakes on this list can be done as day hikes, but I would also recommend them as their own camping destination. I’ve done about 200 miles worth of trails in the Sawtooths and White Clouds, and these are my favorities.</p>
        </div>
    )
}