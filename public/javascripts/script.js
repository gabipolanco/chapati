document.addEventListener('DOMContentLoaded', () => {

    // ===================== Unite menu ===========================

    const $uniteMenu = document.querySelector('#unite-btn .inner-menu')
    const $uniteBtn = document.querySelector('#unite-btn a')
    const $loginPopUp = document.querySelector('#login-pop-up')
    const $loginBtn = document.querySelector('#login-btn')

    if ($uniteBtn) {
        $uniteBtn.onclick = (event) => {
            event.preventDefault()
            if ($uniteMenu.style.display === 'block') {
                return $uniteMenu.style.display = 'none'
            } else {
                $loginPopUp.style.display = 'none'
                return $uniteMenu.style.display = 'block'
            }
        }
    }

    // ===================== Login popup ===========================


    if ($loginBtn) {
        $loginBtn.onclick = (event) => {
            event.preventDefault()
            if ($loginPopUp.style.display === 'flex') {
                return $loginPopUp.style.display = 'none'
            } else {
                $uniteMenu.style.display = 'none'
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