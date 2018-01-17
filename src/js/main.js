import "./vendor/jquery-2.2.3.min.js"
import "./vendor/data-tables.min.js"
import "./vendor/jquery.flexslider-min.js"
import "./vendor/jquery.hoverIntent.minified.js"

$(function() {

  // fade in hero bg image
  var $banner = $("#banner")
  var bg = $banner.css("background-image")
  if (bg) {
    var src = bg.replace(/(^url\()|(\)$|[\"\'])/g, "")
    $("<img>").attr("src", src).on("load", function() {
      $banner.css("opacity", "1")
    })
  }

	// hover intent on main nav
  function slideDown() {
    $(this).children("ul").slideDown(200)
  }

  function slideUp() {
    $(this).children("ul").slideUp(200)
  }

  $("li.nested").hoverIntent({
    over: slideDown,
    out: slideUp,
    timeout: 300
  })

	// prevent the top-level about link from navigating (opens dropdown on hover)
  $('.nested > a[href="/chbmr/about"], .nested > a[href="/about"]').on("click", function(e) {
    e.preventDefault()
  })

	// make cards clickable (in grid layout)
  $(".card").on("click", function() {
    window.location = $(this).find("a").attr("href")
  })

	// make people clickable (in grid layout)
  $(".column-list-layout .post").on("click", function() {
    window.location = $(this).find("a").attr("href")
  })

  // flex slider for homepage logos
  // store the slider in a local variable
  var $window = $(window),
    flexslider = {vars:{}}

  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 600) ? 2 :
           (window.innerWidth < 900) ? 3 : 4
  }

	// search on focus
  $("input.search").on("focus", function() {
    $(this).siblings(".icon-search").addClass("focus")
  })

  $("input.search").on("blur", function() {
    $(this).siblings(".icon-search").removeClass("focus")
  })

	// flexslider
  $window.on('load', function() {
    $(".flexslider").flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth: 70,
      itemMargin: 120,
      directionNav: false,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: 3 // use function to pull in initial value
    })
  })

  // check grid size on resize event
  $window.on('resize', (function() {
    var gridSize = getGridSize()

    flexslider.vars.minItems = gridSize
    flexslider.vars.maxItems = gridSize
  }))

	// make table rows clickable
  $(".data-table tbody tr").on("click", function() {
    $(this).find('a').click((e) => { e.stopPropagation() })
    $(this).find("a")[0].click();
  })

  $("#publications").DataTable({
    lengthChange: false,
    info: false,
    language: {
      searchPlaceholder: "Search",
      search: "",
      paginate: {
        previous: '<i class="fa fa-chevron-left"></i>',
        next:     '<i class="fa fa-chevron-right"></i>'
      }
    }
  })

  $(".twitter-wrap").on("DOMSubtreeModified propertychange", "#twitter-widget-0", function() {
    $(".twitter-timeline").contents().find(".timeline-Tweet-media").css("display", "none")
    $(".twitter-block").css("height", "100%")
  })

})
