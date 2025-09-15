
const getId = (id) => document.getElementById(id);

// Get form elements
const formMember = getId("form-member");
const formVoucher = getId("form-voucher");

// Get tab elements
const tabMember = getId("tab-member");
const tabVoucher = getId("tab-voucher");

// Event listeners untuk radio button tabs
tabMember.addEventListener("change", function () {
  if (tabMember.checked) {
    formMember.style.display = "block";
    formVoucher.style.display = "none";
  }
});

tabVoucher.addEventListener("change", function () {
  if (tabVoucher.checked) {
    formMember.style.display = "none";
    formVoucher.style.display = "block";
  }
});
