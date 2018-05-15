var shopBlock = document.getElementsByClassName('add-shop-block')[0];

if (!shopBlock) {

} else {
    btnAddShop = document.getElementsByClassName('add-store')[0];

    btnClose = document.getElementsByClassName('closer')[0];

    btnAddShop.onclick = function openShop() {

        if (shopBlock.classList.contains('add-shop-block')) {
            shopBlock.classList.remove('add-shop-block')
            shopBlock.classList.add('shop-block-show')
        } else {
            return false

        }
    }
    btnClose.onclick = function() {
        shopBlock.classList.remove('shop-block-show');
        shopBlock.classList.add('add-shop-block');
    }
}



var addOfferBlock = document.getElementsByClassName('add-offer-block')[0]
if (!addOfferBlock) {

} else {

    btnAddOffer = document.getElementsByClassName('add-btn')[0];
    btnClose = document.getElementsByClassName('closer')[0]
    substrate = document.getElementById('substrate');
    offerOption = $('.add-offer-block').find('.expires-link');
    offerTab = $('.add-offer-block').find('.tab');

    btnAddOffer.onclick = function(e) {
        e.preventDefault();

        addOfferBlock.classList.remove('add-offer-block')
        addOfferBlock.classList.add('add-offer-block-show')
        if (substrate.style.display = 'none') {
            substrate.style.display = 'block';
        }
    }
    btnClose.onclick = function() {
        addOfferBlock.classList.remove('add-offer-block-show');
        addOfferBlock.classList.add('add-offer-block');
        substrate.style.display = 'none';
    }

    offerOption.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active')
    })


}

$(document).ready(function() {
    $('.add-offer-block-tabs').find('>li>a.tab:eq(0)').addClass('active-tab');
    $('.add-offer-block-tabs>li>a').click(function(g) {
        var tab = $(this).closest('.add-offer-block-tabs');
        var index = $(this).closest('li').index();
        var offerblock = $('.add-offer-block-show');
        tab.find('>li>a').removeClass('active-tab');
        $(this).closest('a').addClass('active-tab');
        offerblock.find('.add-offer-block-content').find('.tab-item').not('.tab-item:eq(' + index + ')').fadeOut();
        offerblock.find('.add-offer-block-content').find('.tab-item:eq(' + index + ')').fadeIn();
        g.preventDefault();
        console.log(tab, index)

    })
});

$(document).ready(function() {
    var panelTab = $('.tab-name');
    var closeBtn = $('.close-panel-btn');
    var openAdminBtn = $('.open-panel-btn')
    console.log(panelTab)
    panelTab.on('click', function() {
        panelTab.parent().children('ul').slideUp();
        if ($(this).parent().children('ul').is(':hidden'))
            $(this).parent().children('ul').slideDown();

    })

    closeBtn.on('click', function() {
        $('.admin-menu').animate({ left: "-350px" }, 500);
        openAdminBtn.show();
    })

    openAdminBtn.on('click', function() {
        $('.admin-menu').animate({ left: "0" }, 500);
        openAdminBtn.hide();
    })
});