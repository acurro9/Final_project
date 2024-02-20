// MenuVar
var hideMenuNav = () => {
  $("#menuNav").removeClass("visible");
  $("#menuNav").addClass("hidden");
};
var showMenuNav = () => {
  $("#menuNav").addClass("visible");
  $("#menuNav").removeClass("hidden");
};

// MenuImg
var hideMenuImg = () => {
  $("#menuImg").removeClass("visible");
  $("#menuImg").addClass("hidden");
};
var showMenuImg = () => {
  $("#menuImg").addClass("visible");
  $("#menuImg").removeClass("hidden");
};

// menuVar
var hideBtnM = () => {
  $("#btnM").removeClass("visible");
  $("#btnM").addClass("hidden");
};
var showBtnM = () => {
  $("#btnM").addClass("visible");
  $("#btnM").removeClass("hidden");
};

// menuP
var hideMenuP = () => {
  $("#menuP").removeClass("visible");
  $("#menuP").addClass("hidden");
};
var showMenuP = () => {
  $("#menuP").addClass("visible");
  $("#menuP").removeClass("hidden");
};

// menuVar
var hideBtnC = () => {
  $("#btnC").removeClass("visible");
  $("#btnC").addClass("hidden");
};
var showBtnC = () => {
  $("#btnC").addClass("visible");
  $("#btnC").removeClass("hidden");
};

// menuVar
var hideMenuImgC = () => {
  $("#menuImgC").removeClass("visible");
  $("#menuImgC").addClass("hidden");
};
var showMenuImgC = () => {
  $("#menuImgC").addClass("visible");
  $("#menuImgC").removeClass("hidden");
};

// menuVar
var hideMenuP2 = () => {
  $("#menuP2").removeClass("visible");
  $("#menuP2").addClass("hidden");
};
var showMenuP2 = () => {
  $("#menuP2").addClass("visible");
  $("#menuP2").removeClass("hidden");
};

var changeCSS = (element, attr, value) => {
  $(element).css(attr, value);
};
