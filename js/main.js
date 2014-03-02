var fillDsMl = function () {
    var mHref = ['m', 'a', 'i', 'l', 't', 'o', ':'];
    var mUser = ['d', 's', 'a', 'v', 'e', 'n', 'k', 'o'];
    var mDomain = ['@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm'];

    var ml = mUser.join("") + mDomain.join("");
    $("#ds-ml").attr({
        href: mHref.join("") + ml,
        target: "_self"
    });

};

var makeLinksOpenInNewTab = function () {
    $("a").attr("target", "_blank");
};

jQuery(document).ready(function () {
    makeLinksOpenInNewTab();
    fillDsMl();
});
