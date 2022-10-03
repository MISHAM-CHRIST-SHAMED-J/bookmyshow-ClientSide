import React from 'react'

function Curosel() {
  return (
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1664530835699_we.jpg" class="d-block w-100" alt="image"/>
    </div>
    <div class="carousel-item" data-bs-interval="
    ">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1661886745574_sunbur.jpg" class="d-block w-100" alt="image"/>
    </div>
    <div class="carousel-item">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1661499853815_homepage.jpg" class="d-block w-100" alt="image"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Curosel