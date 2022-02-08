class TableOfContents {
    constructor({ from, to }) {
        this.fromElement = from;
        this.toElement = to;
        this.headingElements = this.fromElement.querySelectorAll("h2, h3");
        this.tocElement = document.createElement("div");
    }
    getMostImportantHeadingLevel() {
        let mostImportantHeadingLevel = 6;
        for (let i = 0; i < this.headingElements.length; i++) {
            let headingLevel = TableOfContents.getHeadingLevel(this.headingElements[i]);
            mostImportantHeadingLevel = (headingLevel < mostImportantHeadingLevel) ?
                headingLevel : mostImportantHeadingLevel;
        }
        return mostImportantHeadingLevel;
    }
   static generateId(headingElement) {
        return headingElement.textContent.replace(/\s+/g, "-");
    }
   static getHeadingLevel(headingElement) {
        switch (headingElement.tagName.toLowerCase()) {
            case "h2": return 1;
            case "h3": return 2;
            default: return 1;
        }
    }
    
    generateToc() {
        let currentLevel = this.getMostImportantHeadingLevel() - 1,
            currentElement = this.tocElement;

        for (let i = 0; i < this.headingElements.length; i++) {
            let headingElement = this.headingElements[i],
                headingLevel = TableOfContents.getHeadingLevel(headingElement),
                headingLevelDifference = headingLevel - currentLevel,
                linkElement = document.createElement("a");

            if (!headingElement.id) {
                headingElement.id = TableOfContents.generateId(headingElement);
            }
            linkElement.href = window.location.href + `#${headingElement.id}`;
            linkElement.textContent = headingElement.textContent;

            if (headingLevelDifference > 0) {
                for (let j = 0; j < headingLevelDifference; j++) {
                    let listElement = document.createElement("ul"),
                        listItemElement = document.createElement("li");
                    listElement.appendChild(listItemElement);
                    currentElement.appendChild(listElement);
                    currentElement = listItemElement;
                }
                currentElement.appendChild(linkElement);

            } else {
                for (let j = 0; j < -headingLevelDifference; j++) {
                    currentElement = currentElement.parentNode.parentNode;
                }1
                let listItemElement = document.createElement("li");
                listItemElement.appendChild(linkElement);
                currentElement.parentNode.appendChild(listItemElement);
                currentElement = listItemElement;
            }

            currentLevel = headingLevel;
        }
        this.tocElement.firstChild.setAttribute("class", "table-of-contents");
        this.tocElement.firstChild.setAttribute("style","display:block");
        this.toElement.appendChild(this.tocElement.firstChild);
    }
}

document.addEventListener("DOMContentLoaded", () =>
    new TableOfContents({
        from: document.querySelector(".article"),
        to: document.querySelector(".table-of-contents")
    }).generateToc()
);

  // Go to Top Button
  $(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    
    // Animate the scroll to top
$('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
    })
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 3000
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    arrows: false
  });

// Nofollow Links
$('[href*="amazon.com"]').attr('rel','nofollow sponsored noopener noreferrer');