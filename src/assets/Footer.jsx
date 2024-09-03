
import style from './Footer.module.css'


export default function Footer(){
    return(
<div className={`${style.footer}`}>
<div class="row justify-content-around">
  <div class="col-xl-2  col-md-12">
    <div class="card6">
      <div class="card6-body">
        <h5 class="card6-title">Location</h5>
               <p class="card6-text">Sri Lanka</p>
                <p class="card6-text">USA</p>
                <p class="card6-text">London</p>
                <p class="card6-text">Japan</p>
                <p class="card6-text">Italy</p>
      </div>
    </div>
  </div>
  <div class="col-xl-2  col-md-12">
    <div class="card6">
      <div class="card6-body">
        <h5 class="card6-title">Quick Link</h5>
                <p class="card6-text">Home</p>
                <p class="card6-text">About</p>
                <p class="card6-text">Menu</p>
                <p class="card6-text">Gallary</p>
                <p class="card6-text">Order Now</p>
      </div>
    </div>
  </div>



  <div class="col-xl-2  col-md-12">
    <div class="card6">
      <div class="card6-body">
        <h5 class="card6-title">Contact</h5>
                <p class="card6-text">+94 12 3456 789</p>
                <p class="card6-text">+94 25 5589741</p>
                <p class="card6-text">johndeo159@gmail.com</p>
                <p class="card6-text">foodshop123@gmail.com</p>
                
      </div>
    </div>
  </div>





  <div class="col-xl-2  col-md-12">
    <div class="card6">
      <div class="card6-body">
        <h5 class="card6-title">Our Services</h5>
                <p class="card6-text">Fast Delivery</p>
                <p class="card6-text">Easy Payment</p>
                <p class="card6-text">24/7 Services</p>
      </div>
    </div>
  </div>

  
</div>

</div>
    )
}