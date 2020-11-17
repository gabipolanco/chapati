document.addEventListener('DOMContentLoaded', () => {

    // ===================== Login popup ===========================

    const $loginPopUp = document.querySelector('#login-pop-up')
    const $loginBtn = document.querySelector('#login-btn')

    if ($loginBtn) {
        $loginBtn.onclick = (event) => {
            event.preventDefault()
            if ($loginPopUp.style.display === 'flex') {
                return $loginPopUp.style.display = 'none'
            } else {
                return $loginPopUp.style.display = 'flex'
            }
        }
    }
    // ======================== Cart ==============================

    // const $prodPrice = document.querySelectorAll('.cart-prod-price span')
    // const $totalPrice = document.querySelector('#total-cart')
    // const allPrices = []
    // $prodPrice.forEach((e) => {
    //     allPrices.push(parseInt(e.innerHTML))
    // })

    // const totalPrice = allPrices.reduce((acc, curr) => { return acc + curr }, 0)

    // $totalPrice.innerHTML = totalPrice

}, false);