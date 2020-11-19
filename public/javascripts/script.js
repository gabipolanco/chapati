document.addEventListener('DOMContentLoaded', () => {

    // ===================== Unite menu ===========================

    const $uniteMenu = document.querySelector('#unite-btn .inner-menu')
    const $uniteBtn = document.querySelector('#unite-btn a')
    const $profileMenu = document.querySelector('#profile-btn .inner-menu')
    const $profileBtn = document.querySelector('#profile-btn a')
    const $loginPopUp = document.querySelector('#login-pop-up')
    const $loginBtn = document.querySelector('#login-btn')
    const $loginBtn2 = document.querySelector('#signup-login')

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

    if ($profileBtn) {
        $profileBtn.onclick = (event) => {
            event.preventDefault()
            if ($profileMenu.style.display === 'block') {
                return $profileMenu.style.display = 'none'
            } else {
                $loginPopUp.style.display = 'none'
                return $profileMenu.style.display = 'block'
            }
        }
    }

    // ===================== Login popup ===========================

    function login(event) {
        event.preventDefault()
        if ($loginPopUp.style.display === 'flex') {
            return $loginPopUp.style.display = 'none'
        } else {
            $uniteMenu.style.display = 'none'
            return $loginPopUp.style.display = 'flex'
        }
    }

    if ($loginBtn) {
        $loginBtn.onclick = login
    }

    if ($loginBtn2) {
        $loginBtn2.onclick = login
    }

    // ======================== Store ==============================

    const $addProdBtn = document.querySelectorAll('.addtocart')

    if ($addProdBtn) {
        $addProdBtn.forEach(e => e.onclick = () => {

            var button = $(this);
            var cart = $('#cart');
            var cartTotal = cart.attr('data-totalitems');
            var newCartTotal = parseInt(cartTotal) + 1;

            button.addClass('sendtocart');
            setTimeout(function() {
                button.removeClass('sendtocart');
                cart.addClass('shake').attr('data-totalitems', newCartTotal);
                setTimeout(function() {
                    cart.removeClass('shake');
                }, 500)
            }, 1000)
        })
    }

    // ======================== Cart ==============================

    const $prodPrice = document.querySelectorAll('.cart-prod-price span')
    const $totalPrice = document.querySelector('#total-cart')
    const allPrices = []

    if ($totalPrice) {
        $prodPrice.forEach((e) => {
            allPrices.push(parseInt(e.innerHTML))
        })

        const totalPrice = allPrices.reduce((acc, curr) => { return acc + curr }, 0)

        $totalPrice.innerHTML = totalPrice
    }

}, false);