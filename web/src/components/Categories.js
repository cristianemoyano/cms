import React from 'react';

export default function Categories() {
    return (
            <nav class="navbar navbar-expand-lg  rounded" aria-label="Eleventh navbar example">
                <div class="container">
                <div class="dropdown me-3 d-none d-lg-block">
                <button class="btn btn-primary px-6 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="me-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg></span> All Departments
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="./pages/shop-grid.html">Dairy, Bread &amp; Eggs</a></li>
                    <li><a class="dropdown-item" href="./pages/shop-grid.html">Snacks &amp; Munchies</a></li>
                    <li><a class="dropdown-item" href="./pages/shop-grid.html">Fruits &amp; Vegetables</a></li>
                    <li><a class="dropdown-item" href="./pages/shop-grid.html">Cold Drinks &amp; Juices</a></li>
                    <li><a class="dropdown-item" href="./pages/shop-grid.html">Breakfast &amp; Instant Food</a></li>
                    <li><a class="dropdown-item" href="./pages/shop-grid.html">Bakery &amp; Biscuits</a></li>

                    <li><a class="dropdown-item" href="./pages/shop-grid.html">Chicken, Meat &amp; Fish</a></li>
                </ul>
            </div>
                    <div class="collapse navbar-collapse" id="navbarsExample09">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item  dropdown">
                                <a class="nav-link active dropdown-toggle" href="/" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">Action</a></li>
                                    <li><a class="dropdown-item" href="/">Another action</a></li>
                                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}