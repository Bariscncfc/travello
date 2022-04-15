import React from 'react'

const Contact = () => {
  return (
    <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-md-2 ">
        <h5>Browse Tours By Activity</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Outdoor Activities</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Cultural&Thematic Tours</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Family Friendly Tours</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Holiday&Seasonal Tours</a></li>
        </ul>
      </div>

      <div class="col-md-2 offset-1">
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">City Tours</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Indulgence&Luxury Tours</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Relaxation Tours</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Wild&Adventure Tours</a></li>
        </ul>
      </div>

      <div class="col-md-4 offset-2">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </footer>
</div>
  )
}

export default Contact