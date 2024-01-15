const $ = document;
const pagesWrapper = $.querySelector(".pages");
const prevPageBtn = $.querySelector(".prev-page-btn");
const nextPageBtn = $.querySelector(".next-page-btn");
let pagesLinks = null;

let allPages = 20;
let currentPage = 12;

function paginationGen(allPages, currentPage) {
  pagesWrapper.innerHTML = "";

  if (currentPage == allPages) {
    for (
      let pageIndex = currentPage - 1;
      pageIndex <= currentPage;
      pageIndex++
    ) {
      if (pageIndex == currentPage) {
        // active page
        pagesWrapper.insertAdjacentHTML(
          "beforeend",
          ` <li><a href="#" class="page-link active" onclick="pageLinksClick(this)">${pageIndex}</a></li>`
        );
      } else {
        // not active page
        pagesWrapper.insertAdjacentHTML(
          "beforeend",
          ` <li><a href="#" class="page-link" onclick="pageLinksClick(this)">${pageIndex}</a></li>`
        );
      }
    }
  } else if (currentPage == 1) {
    for (let pageIndex = 1; pageIndex <= 2; pageIndex++) {
      if (pageIndex == currentPage) {
        // active page
        pagesWrapper.insertAdjacentHTML(
          "beforeend",
          ` <li><a href="#" class="page-link active" onclick="pageLinksClick(this)">${pageIndex}</a></li>`
        );
      } else {
        // not active page
        pagesWrapper.insertAdjacentHTML(
          "beforeend",
          ` <li><a href="#" class="page-link" onclick="pageLinksClick(this)">${pageIndex}</a></li>`
        );
      }
    }
  } else {
    // loop for number between 1 and allPages
    for (
      let pageIndex = currentPage - 1;
      pageIndex <= currentPage + 1;
      pageIndex++
    ) {
      if (pageIndex == currentPage) {
        // active page
        pagesWrapper.insertAdjacentHTML(
          "beforeend",
          ` <li><a href="#" class="page-link active" onclick="pageLinksClick(this)">${pageIndex}</a></li>`
        );
      } else {
        // not active page
        pagesWrapper.insertAdjacentHTML(
          "beforeend",
          ` <li><a href="#" class="page-link" onclick="pageLinksClick(this)">${pageIndex}</a></li>`
        );
      }
    }
  }

  // get all pages links
  pagesLinks = $.querySelectorAll(".pages .page-link");
  console.log(pagesLinks);
}

// first generation
paginationGen(allPages, currentPage);

// click on prev button( go to previous page )
prevPageBtn.addEventListener("click", () => {
  currentPage -= 1;
  if (currentPage >= 1) {
    paginationGen(allPages, currentPage);
  }
});
// click on next button ( go to next page )
nextPageBtn.addEventListener("click", () => {
  currentPage += 1;
  if (currentPage <= allPages) {
    paginationGen(allPages, currentPage);
  }
});

//click on each page link
function pageLinksClick(thisLink) {
  let newPage = Number(thisLink.innerHTML);
  if (newPage > currentPage) {
    currentPage += 1;
    if (currentPage <= allPages) {
      paginationGen(allPages, currentPage);
    }
  }

  if (newPage < currentPage) {
    currentPage -= 1;
    if (currentPage >= 1) {
      paginationGen(allPages, currentPage);
    }
  }
}
