let paused = false;

$(document).ready(function () {
  $("#color_mode").on("change", function () {
    colorModePreview(this);
  });
});

// Toggle divs for Diary/Testimony
function colorModePreview(ele) {
  if ($(ele).prop("checked") == true) {
    document.getElementById("description").innerHTML =
      "We asked people how getting an expungement has changed their lives.";
    document.getElementById("blackDiv").style.display = "none";
    document.getElementById("whiteDiv").style.display = "flex";
    document.getElementById("bottom").src = "images/DarkLogo.png";
    document.getElementById("bottom2").style.color = "black";
  } else if ($(ele).prop("checked") == false) {
    document.getElementById("description").innerHTML =
      "We asked people stuck in Paper Prisons how having a record has impacted their lives.";
    document.getElementById("blackDiv").style.display = "flex";
    document.getElementById("whiteDiv").style.display = "none";
    document.getElementById("bottom").src = "images/LightLogo.png";
    document.getElementById("bottom2").style.color = "white";
  }
}

// Parse Diary Quotes
Papa.parse(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSyhB_MCQTHDnWSR1EidtHfWKSZHdCx0Yq2AwlO2UjQgVvJnVjgyGL3z4EU_tqR-wLOZymAEAeYqT1X/pub?output=csv",
  {
    download: true,
    header: true,
    complete: function showInfo(results) {
      var quotesData = results.data;
      const quoteElement = document.getElementById("blackDiv");
      var i;
      for (i = 0; i < quotesData.length; i++) {
        let pElement = document.createElement("p");
        pElement.classList.add("quote");
        pElement.innerHTML =
          quotesData[i].quote +
          "<br><br>" +
          "- <span class='userinfo'>" +
          quotesData[i].name.trim();
        if (quotesData[i].ethnicity.trim()) {
          pElement.innerHTML += ", " + quotesData[i].ethnicity.trim();
        }
        if (quotesData[i].conviction_years_ago.trim()) {
          pElement.innerHTML +=
            ", convicted " +
            quotesData[i].conviction_years_ago.trim() +
            " years ago";
        }
        pElement.innerHTM += "</span>";
        quoteElement.appendChild(pElement);
      }
      showNext(0, document.querySelectorAll(".quote"));
    },
  }
);

// Parse Testimony Quotes
Papa.parse(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTgf2L6UCPOPxiZC5t0hcwx_Dsq33-Q2LHnjPqVeM04y7_hBkzEZc7lfwi8RQQ8Lc5kjCrKBLqaBRl5/pub?output=csv",
  {
    download: true,
    header: true,
    complete: function showInfo(results) {
      var quotesData = results.data;
      const quoteElement = document.getElementById("whiteDiv");
      var i;
      for (i = 0; i < quotesData.length; i++) {
        let pElement = document.createElement("p");
        pElement.classList.add("bQuote");
        pElement.innerHTML =
          quotesData[i].quote +
          "<br><br>" +
          "- <span class='userinfo'>" +
          quotesData[i].name.trim();
        if (quotesData[i].ethnicity.trim()) {
          pElement.innerHTML += ", " + quotesData[i].ethnicity.trim();
        }
        if (quotesData[i].conviction_years_ago.trim()) {
          pElement.innerHTML +=
            ", convicted " +
            quotesData[i].conviction_years_ago.trim() +
            " years ago";
        }
        pElement.innerHTM += "</span>";
        quoteElement.appendChild(pElement);
      }
      showNext(0, document.querySelectorAll(".bQuote"));
    },
  }
);

function showNext(index, pList) {
  pList[index].classList.add("visible");
  setTimeout(() => {
    pList[index].classList.remove("visible");
    if (!paused) index++;
    showNext(index % pList.length, pList);
  }, 10000);
}
