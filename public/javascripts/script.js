document.addEventListener('DOMContentLoaded', () => {

    // ===================== Login popup ===========================

    const $loginPopUp = document.querySelector('#login-pop-up')
    const $loginBtn = document.querySelector('#login-btn')

    $loginBtn.onclick = (e) => {
        e.preventDefault()
        if ($loginPopUp.style.display === 'none') {
            return $loginPopUp.style.display = 'flex'
        } else {
            return $loginPopUp.style.display = 'none'
        }
    }

    // ======================== Cart ==============================

    const $prodPrice = document.querySelectorAll('.cart-prod-price span').innerHTML
    const $totalPrice = document.querySelector('#total-cart')

}, false);