import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Entertain() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
<div className='container-fluid p-4'>
  <h2 className="pb-4">Entertainment</h2>
<Carousel responsive={responsive}>
<div class="carddetail1 kipp">
<a href=""><img className="posterimg1" src="https://img.freepik.com/free-vector/abstract-music-poster-concept_23-2148489910.jpg?w=2000"  alt="..."/></a>
</div>
<div class="carddetail1">
<a href=""><img className="posterimg1" src="https://www.basicinvite.com/media/bi/13154/painted-stars-foil-christmas-invitations-up.jpg?q=1645034588"  alt="..."/></a>
</div>
<div class="carddetail1">
<a href=""><img className="posterimg1" src="https://s3.amazonaws.com/export.easil.com/2e1b4267-47cc-425a-8f7a-bf8ff1cc48c8/ad074ebb6a99cf3ea7.png"  alt="..."/></a>
</div>
<div class="carddetail1 kipp">
<a href=""><img className="posterimg1" src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5f9aa50d4a528_template_image_1603970317.webp"  alt="..."/></a>
</div>
<div class="carddetail1">
<a href=""><img className="posterimg1" src="https://media1.popsugar-assets.com/files/thumbor/wY2mz-qUtpOY3NGlJ8cpbyhytzQ/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2021/12/10/633/n/1922441/ff4fa42acb3408f9_netimggAt79b/i/Pink-Berries-New-Year-Eve-Invitation.png"  alt="..."/></a>
</div>
<div class="carddetail1">
<a href=""><img className="posterimg1" src="https://www.mynameart.com/pics/invitation-card-for-a-christmas-party.jpg"  alt="..."/></a>
</div>
<div class="carddetail1">
<a href=""><img className="posterimg1" src="https://createcustomwishes.com/wp-content/uploads/2022/02/Editable-Iftar-2022-Party-Invite-Greeting-Card-Online.jpg"  alt="..."/></a>
</div>
<div class="carddetail1">
<a href=""><img className="posterimg1" src="https://www.basicinvite.com/media/bi/13171/merry-tree-foil-holiday-invitations-up.jpg?q=1645032441"  alt="..."/></a>
</div>
<div class="carddetail1">
<a href=""><img className="posterimg1" src="https://media1.popsugar-assets.com/files/thumbor/54NXtXl8JLM86v7E40fzdbcmM5s/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/12/10/633/n/1922441/2c87d806672165b0_netimg8bGpRq/i/Deco-New-Year-Holiday-Party-Invitation.jpg"  alt="..."/></a>
</div>

</Carousel>  
</div>
    ) 
}

export default Entertain