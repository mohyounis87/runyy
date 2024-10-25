let colors = {
    "أحمر": { nameEn: "Red", colorCode: "#FF0000" },
    "برتقالي": { nameEn: "Orange", colorCode: "#FFA500" },
    "أصفر": { nameEn: "Yellow", colorCode: "#FFFF00" },
    "أخضر": { nameEn: "Green", colorCode: "#008000" },
    "أزرق": { nameEn: "Blue", colorCode: "#0000FF" },
    "نيلي": { nameEn: "Indigo", colorCode: "#4B0082" },
    "بنفسجي": { nameEn: "Violet", colorCode: "#EE82EE" }
};

let colorKeys = Object.keys(colors);
let currentIndex = 0;

// وظيفة النطق للون الحالي
function speakColor() {
    let colorNameAr = colorKeys[currentIndex];
    let colorNameEn = colors[colorNameAr].nameEn;

    // نطق اسم اللون بالعربية
    let msgAr = new SpeechSynthesisUtterance();
    msgAr.lang = "ar";
    msgAr.text = colorNameAr;
    speechSynthesis.speak(msgAr);

    // نطق اسم اللون بالإنجليزية بعد العربية
    let msgEn = new SpeechSynthesisUtterance();
    msgEn.lang = "en";
    msgEn.text = colorNameEn;
    speechSynthesis.speak(msgEn);
}

// وظيفة الانتقال إلى اللون التالي
function showNextColor() {
    // التحديث للون التالي
    currentIndex = (currentIndex + 1) % colorKeys.length;
    updateColorDisplay();
    speakColor(); // نطق اللون عند الانتقال
}

// تحديث اللون وعرض النصوص
function updateColorDisplay() {
    let colorNameAr = colorKeys[currentIndex];
    let colorData = colors[colorNameAr];
    let colorNameEn = colorData.nameEn;

    // تحديث النصوص ولون الصندوق
    document.getElementById("colorNameAr").textContent = colorNameAr;
    document.getElementById("colorNameEn").textContent = colorNameEn;
    document.getElementById("colorDisplay").style.backgroundColor = colorData.colorCode;
}
