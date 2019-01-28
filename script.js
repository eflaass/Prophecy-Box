var prophecyList = [
  "Мучительная смерть",
  "Адское пекло",
  "Некоторая неловкость",
  "Боль и страдание",
  "Безысходность",
  "Старость",
  "Кошмар наяву",
  "Тихий ужас",
  "Чудовищная несправедливость",
  "Нервный тик",
  "Деменция",
  "Деградация"
];

var getProphecy = function(zod1, zod2, zod3, zod4, zod5, zod6, zod7, zod8, zod9, zod10, zod11, zod12, txt) {
  zod1.addEventListener("click", function() {
    this.classList.toggle('zodiac-btn-clk');
    var prophecyRand = Math.floor(Math.random() * prophecyList.length);
    prophecyBox.innerHTML = txt + " в этом месяце ожидает " + prophecyList[prophecyRand];
    zod2.classList.remove('zodiac-btn-clk');
    zod3.classList.remove('zodiac-btn-clk');
    zod4.classList.remove('zodiac-btn-clk');
    zod5.classList.remove('zodiac-btn-clk');
    zod6.classList.remove('zodiac-btn-clk');
    zod7.classList.remove('zodiac-btn-clk');
    zod8.classList.remove('zodiac-btn-clk');
    zod9.classList.remove('zodiac-btn-clk');
    zod10.classList.remove('zodiac-btn-clk');
    zod11.classList.remove('zodiac-btn-clk');
    zod12.classList.remove('zodiac-btn-clk');
  });
};

getProphecy(aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces, "Овнов");
getProphecy(taurus, aries, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces, "Тельцов");
getProphecy(gemini, taurus, aries, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces, "Близнецов");
getProphecy(cancer, taurus, gemini, aries, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces, "Раков");
getProphecy(leo, taurus, gemini, cancer, aries, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces, "Львов");
getProphecy(virgo, taurus, gemini, cancer, leo, aries, libra, scorpio, sagittarius, capricorn, aquarius, pisces, "Дев");
getProphecy(libra, taurus, gemini, cancer, leo, virgo, aries, scorpio, sagittarius, capricorn, aquarius, pisces, "Весы");
getProphecy(scorpio, taurus, gemini, cancer, leo, virgo, libra, aries, sagittarius, capricorn, aquarius, pisces, "Скорпионов");
getProphecy(sagittarius, taurus, gemini, cancer, leo, virgo, libra, scorpio, aries, capricorn, aquarius, pisces, "Стрельцов");
getProphecy(capricorn, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, aries, aquarius, pisces, "Козерогов");
getProphecy(aquarius, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aries, pisces, "Водолеев");
getProphecy(pisces, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, aries, "Рыб");
