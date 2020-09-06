var good = 0;
var bad = 0;

$(document).ready(function() {

  var originalList = getList();
  buildQuiz(originalList);
});

function getList() {
  list = [{url: "/fotos/Adelain Dalmeijer.png", name: "Adelain Dalmeijer"},
  {url: "/fotos/Amy de Hoop.png", name: "Amy de Hoop"},
  {url: "/fotos/Anne Blees.png", name: "Anne Blees"},
  {url: "/fotos/Anniek Wijnen.png", name: "Anniek Wijnen"},
  {url: "/fotos/Annouk Leenders.png", name: "Annouk Leenders"},
  {url: "/fotos/Benjamin D'Aguanno.png", name: "Benjamin D'Aguanno"},
  {url: "/fotos/Bent Sacher.png", name: "Bent Sacher"},
  {url: "/fotos/Benthe Zoeren.png", name: "Benthe Zoeren"},
  {url: "/fotos/Berend Dörr.png", name: "Berend Dörr"},
  {url: "/fotos/Bernard de Buck.png", name: "Bernard de Buck"},
  {url: "/fotos/Bo Haasbeek.png", name: "Bo Haasbeek"},
  {url: "/fotos/Cato Beers.png", name: "Cato Beers"},
  {url: "/fotos/Celia Hartsuyker.png", name: "Celia Hartsuyker"},
  {url: "/fotos/Channah Charter.png", name: "Channah Charter"},
  {url: "/fotos/Charlene Lievers.png", name: "Charlene Lievers"},
  {url: "/fotos/Christiaan Bekker.png", name: "Christiaan Bekker"},
  {url: "/fotos/Daan Schuurman.png", name: "Daan Schuurman"},
  {url: "/fotos/Daan van Rijn.png", name: "Daan van Rijn"},
  {url: "/fotos/Damien Hollands.png", name: "Damien Hollands"},
  {url: "/fotos/Daniel Lev.png", name: "Daniel Lev"},
  {url: "/fotos/Dennis van den Bosch.png", name: "Dennis van den Bosch"},
  {url: "/fotos/Dim Diemer.png", name: "Dim Diemer"},
  {url: "/fotos/Douwe de Gouw.png", name: "Douwe de Gouw"},
  {url: "/fotos/Eline Velker.png", name: "Eline Velker"},
  {url: "/fotos/Emma Baggen.png", name: "Emma Baggen"},
  {url: "/fotos/Emma Lindenkamp.png", name: "Emma Lindenkamp"},
  {url: "/fotos/Emy Han.png", name: "Emy Han"},
  {url: "/fotos/Erik Schaap Garcia.png", name: "Erik Schaap Garcia"},
  {url: "/fotos/Esmee Kiffen.png", name: "Esmee Kiffen"},
  {url: "/fotos/Eva Gerasimon Tel.png", name: "Eva Gerasimon Tel"},
  {url: "/fotos/Eva van der Moolen.png", name: "Eva van der Moolen"},
  {url: "/fotos/Eva van Doorn.png", name: "Eva van Doorn"},
  {url: "/fotos/Eva van Hagen.png", name: "Eva van Hagen"},
  {url: "/fotos/Evelijn van Bruggen.png", name: "Evelijn van Bruggen"},
  {url: "/fotos/Even Chen.png", name: "Even Chen"},
  {url: "/fotos/Finn de Kerpel.png", name: "Finn de Kerpel"},
  {url: "/fotos/Fleur Drost.png", name: "Fleur Drost"},
  {url: "/fotos/Fleur van der Schaaf.png", name: "Fleur van der Schaaf"},
  {url: "/fotos/Fleur Weijer.png", name: "Fleur Weijer"},
  {url: "/fotos/Floris Maarse.png", name: "Floris Maarse"},
  {url: "/fotos/Gabriella Hoek.png", name: "Gabriella Hoek"},
  {url: "/fotos/Geert Dubbeldam.png", name: "Geert Dubbeldam"},
  {url: "/fotos/Gillis Wiers.png", name: "Gillis Wiers"},
  {url: "/fotos/Griffin Dharmoputro.png", name: "Griffin Dharmoputro"},
  {url: "/fotos/Ide Fokkink.png", name: "Ide Fokkink"},
  {url: "/fotos/Ilan van der Schaaf.png", name: "Ilan van der Schaaf"},
  {url: "/fotos/Ilse Bus.png", name: "Ilse Bus"},
  {url: "/fotos/Irene Kramer.png", name: "Irene Kramer"},
  {url: "/fotos/Isabelle Goessens.png", name: "Isabelle Goessens"},
  {url: "/fotos/Jarno Wildschut.png", name: "Jarno Wildschut"},
  {url: "/fotos/Jasmijn Zandwijk.png", name: "Jasmijn Zandwijk"},
  {url: "/fotos/Jasper Valk.png", name: "Jasper Valk"},
  {url: "/fotos/Jasper van de Mosselaer.png", name: "Jasper van de Mosselaer"},
  {url: "/fotos/Jasper Wijnekus.png", name: "Jasper Wijnekus"},
  {url: "/fotos/Jesse Mulder.png", name: "Jesse Mulder"},
  {url: "/fotos/Jitse Posthumus.png", name: "Jitse Posthumus"},
  {url: "/fotos/Job Huisman.png", name: "Job Huisman"},
  {url: "/fotos/Job Walpot.png", name: "Job Walpot"},
  {url: "/fotos/Joep Mulder.png", name: "Joep Mulder"},
  {url: "/fotos/Joeri Koot.png", name: "Joeri Koot"},
  {url: "/fotos/Jorden Hoogwout.png", name: "Jorden Hoogwout"},
  {url: "/fotos/Joshua Baron.png", name: "Joshua Baron"},
  {url: "/fotos/Joshua de Looze.png", name: "Joshua de Looze"},
  {url: "/fotos/Julian Grobben.png", name: "Julian Grobben"},
  {url: "/fotos/Julie Schotanus.png", name: "Julie Schotanus"},
  {url: "/fotos/Jurgen van der Wal.png", name: "Jurgen van der Wal"},
  {url: "/fotos/Justine Blonk.png", name: "Justine Blonk"},
  {url: "/fotos/Juul Noordijk.png", name: "Juul Noordijk"},
  {url: "/fotos/Kim van Boeijen.png", name: "Kim van Boeijen"},
  {url: "/fotos/Kim Vermolen.png", name: "Kim Vermolen"},
  {url: "/fotos/Koen van der Sloot.png", name: "Koen van der Sloot"},
  {url: "/fotos/Lars Jansen.png", name: "Lars Jansen"},
  {url: "/fotos/Lars Uri.png", name: "Lars Uri"},
  {url: "/fotos/Lars van Loo.png", name: "Lars van Loo"},
  {url: "/fotos/Lena Bleekemolen.png", name: "Lena Bleekemolen"},
  {url: "/fotos/Leslie van der Werff.png", name: "Leslie van der Werff"},
  {url: "/fotos/Lieke Wollaert.png", name: "Lieke Wollaert"},
  {url: "/fotos/Lin Huang.png", name: "Lin Huang"},
  {url: "/fotos/Linde Kappers.png", name: "Linde Kappers"},
  {url: "/fotos/Linn Fontijn.png", name: "Linn Fontijn"},
  {url: "/fotos/Lisa Asscher.png", name: "Lisa Asscher"},
  {url: "/fotos/Liza Keizer.png", name: "Liza Keizer"},
  {url: "/fotos/Lola Pool.png", name: "Lola Pool"},
  {url: "/fotos/Lotta Bekkers.png", name: "Lotta Bekkers"},
  {url: "/fotos/Lucy Geelen.png", name: "Lucy Geelen"},
  {url: "/fotos/Luke Rützel.png", name: "Luke Rützel"},
  {url: "/fotos/Luna Xiao.png", name: "Luna Xiao"},
  {url: "/fotos/Luva Spronkers.png", name: "Luva Spronkers"},
  {url: "/fotos/Lynn Tielman.png", name: "Lynn Tielman"},
  {url: "/fotos/Maarten van der Schouw.png", name: "Maarten van der Schouw"},
  {url: "/fotos/Maayke Breekveldt.png", name: "Maayke Breekveldt"},
  {url: "/fotos/Marcus Vinckemöller.png", name: "Marcus Vinckemöller"},
  {url: "/fotos/Margot Klerkx.png", name: "Margot Klerkx"},
  {url: "/fotos/Marin van Meegen.png", name: "Marin van Meegen"},
  {url: "/fotos/Marleen Faber.png", name: "Marleen Faber"},
  {url: "/fotos/Marloes Gomersbach.png", name: "Marloes Gomersbach"},
  {url: "/fotos/Marthe Clercx.png", name: "Marthe Clercx"},
  {url: "/fotos/Mats Walpot.png", name: "Mats Walpot"},
  {url: "/fotos/Maud van Vuuren.png", name: "Maud van Vuuren"},
  {url: "/fotos/Max Neuvel.png", name: "Max Neuvel"},
  {url: "/fotos/Maxim van Hoorn.png", name: "Maxim van Hoorn"},
  {url: "/fotos/Melanie Smit.png", name: "Melanie Smit"},
  {url: "/fotos/Mette Visser.png", name: "Mette Visser"},
  {url: "/fotos/Mieke de Hollander.png", name: "Mieke de Hollander"},
  {url: "/fotos/Milo Wetering.png", name: "Milo Wetering"},
  {url: "/fotos/Milou Maarleveld.png", name: "Milou Maarleveld"},
  {url: "/fotos/Milou Terlouw.png", name: "Milou Terlouw"},
  {url: "/fotos/Mitra Jalali Ghassam.png", name: "Mitra Jalali Ghassam"},
  {url: "/fotos/Mohamed Dahou.png", name: "Mohamed Dahou"},
  {url: "/fotos/Mohs Klunder.png", name: "Mohs Klunder"},
  {url: "/fotos/Nadine Bhagwandes.png", name: "Nadine Bhagwandes"},
  {url: "/fotos/Nelleke Rottwilm.png", name: "Nelleke Rottwilm"},
  {url: "/fotos/Nicole Stoffel.png", name: "Nicole Stoffel"},
  {url: "/fotos/Niels Langenkamp.png", name: "Niels Langenkamp"},
  {url: "/fotos/Noah Doeland.png", name: "Noah Doeland"},
  {url: "/fotos/Noor Hagenbeek.png", name: "Noor Hagenbeek"},
  {url: "/fotos/Peter Baskakov.png", name: "Peter Baskakov"},
  {url: "/fotos/Pien Goeting.png", name: "Pien Goeting"},
  {url: "/fotos/Pim Nijmeijer.png", name: "Pim Nijmeijer"},
  {url: "/fotos/Pip Classen.png", name: "Pip Classen"},
  {url: "/fotos/Riemer Dijkstra.png", name: "Riemer Dijkstra"},
  {url: "/fotos/Roel Steenvoorden.png", name: "Roel Steenvoorden"},
  {url: "/fotos/Romy Graal.png", name: "Romy Graal"},
  {url: "/fotos/Rosa Hofman.png", name: "Rosa Hofman"},
  {url: "/fotos/Roxanne van de Wiel.png", name: "Roxanne van de Wiel"},
  {url: "/fotos/Ruben Admiraal.png", name: "Ruben Admiraal"},
  {url: "/fotos/Ruben Stalpers.png", name: "Ruben Stalpers"},
  {url: "/fotos/Runcheng Zhou.png", name: "Runcheng Zhou"},
  {url: "/fotos/Salomé Reijmerink.png", name: "Salomé Reijmerink"},
  {url: "/fotos/Sam Buisman.png", name: "Sam Buisman"},
  {url: "/fotos/Sandra Witteman.png", name: "Sandra Witteman"},
  {url: "/fotos/Sara Korving.png", name: "Sara Korving"},
  {url: "/fotos/Shyevon Marchena.png", name: "Shyevon Marchena"},
  {url: "/fotos/Simon Flanderhijn.png", name: "Simon Flanderhijn"},
  {url: "/fotos/Sophia Verbeek.png", name: "Sophia Verbeek"},
  {url: "/fotos/Sophie Linotte.png", name: "Sophie Linotte"},
  {url: "/fotos/Sophie van der Gaag.png", name: "Sophie van der Gaag"},
  {url: "/fotos/Sophie van Harten.png", name: "Sophie van Harten"},
  {url: "/fotos/Sophie Verbeek.png", name: "Sophie Verbeek"},
  {url: "/fotos/Splinter van Loon.png", name: "Splinter van Loon"},
  {url: "/fotos/Sterre Broos.png", name: "Sterre Broos"},
  {url: "/fotos/Stijn de Ridder.png", name: "Stijn de Ridder"},
  {url: "/fotos/Stijn Sneeuw.png", name: "Stijn Sneeuw"},
  {url: "/fotos/Suze Kroon.png", name: "Suze Kroon"},
  {url: "/fotos/Sydney Smit.png", name: "Sydney Smit"},
  {url: "/fotos/Sylvie de Reus.png", name: "Sylvie de Reus"},
  {url: "/fotos/Tamara van den Brink.png", name: "Tamara van den Brink"},
  {url: "/fotos/Tenko van der Kuip.png", name: "Tenko van der Kuip"},
  {url: "/fotos/Thomas Doggenaar.png", name: "Thomas Doggenaar"},
  {url: "/fotos/Thomas Verhage.png", name: "Thomas Verhage"},
  {url: "/fotos/Ties Koenders.png", name: "Ties Koenders"},
  {url: "/fotos/Tijn van der Valk.png", name: "Tijn van der Valk"},
  {url: "/fotos/Tim Verburg.png", name: "Tim Verburg"},
  {url: "/fotos/Timo Bruggeman.png", name: "Timo Bruggeman"},
  {url: "/fotos/Tobias Stammers.png", name: "Tobias Stammers"},
  {url: "/fotos/Tobias Vernooij.png", name: "Tobias Vernooij"},
  {url: "/fotos/Tom Mangé.png", name: "Tom Mangé"},
  {url: "/fotos/Vera Zoetendal.png", name: "Vera Zoetendal"},
  {url: "/fotos/Willem Chang.png", name: "Willem Chang"},
  {url: "/fotos/Ype Verhagen.png", name: "Ype Verhagen"},
  {url: "/fotos/Zawadi Fonteijn.png", name: "Zawadi Fonteijn"}]
  return list;
}

function getRandomItem(list) {
  var randomItem = list[Math.floor(Math.random()*list.length)];
  return randomItem;
}

function postImage(item) {
  $("#kop").prepend("<img id='resize' src='"+ item.url +"'>");

  $('#kop').each(function() {
    if ($(this).find('img').length) {
        $(this).html("<img src='"+ item.url +"'>");
    }
  });
}

function removeItem(list, item) {
  var index = list.indexOf(item);
  if (index > -1) {
    list.splice(index, 1);
  };
}

function buildQuiz(originalList) {
  document.getElementById("goodscore").innerHTML = "Goed :" + good;
  document.getElementById("badscore").innerHTML = "Fout :" + bad;

  var target = getRandomItem(originalList);
  postImage(target);
  buttonList = originalList.slice();
  removeItem(buttonList, target);
  console.log(target.name)
  console.log(originalList);
  console.log(buttonList);

  $($('.btn')[Math.floor(Math.random()*$('.btn').length)]).html(target.name);

  $('.btn').each(function(i, obj) {
    if(!(obj.innerHTML == target.name)){
      var itemm = getRandomItem(buttonList);
      obj.innerHTML = itemm.name;
      removeItem(buttonList, itemm)
    };
  });

  $('.btn').on('click', function () {
    if(!($(this).text() == target.name)) {
      bad += 1;
      $('#kop').append('<p align=center id="fout">FOUT!!!</p>');
      $('#fout').css({
        'font-size': '80px',
        'text-align': 'center'
      }).fadeIn("800").fadeOut("400", function() {
        $('.btn').off('click');
        $('.btn').each(function(i, obj) {
          obj.innerHTML = '';
        });
        buildQuiz(originalList);

      });
    }
    if($(this).text() == target.name) {
      good += 1;
      $('#kop').append('<p align=center id="netjes">Netjes!</p>');
      $('#netjes').css({
        'font-size': '80px',
        'text-align': 'center'
      }).fadeIn("800").fadeOut("400", function() {
        $('.btn').off('click');
        $('.btn').each(function(i, obj) {
          obj.innerHTML = '';
        });
        buildQuiz(originalList);
      });
    }

  })
}