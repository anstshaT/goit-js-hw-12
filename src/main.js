import { renderPhotos } from "./js/render-functions";
import { fetchFunction } from "./js/pixabay-api";

// Повідомлення
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Модальне вікно
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.search-form');
const input = form.querySelector('#searchInput');
const photoList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loaderMoreIcon = document.querySelector('.loader-two')
const loadMoreBtn = document.querySelector('.btn');

let pageNumber = 1;
let perPage = 15;
let currentQ = "";


function showLoader() {
    loader.classList.add('active')
}
function hideLoader() {
    loader.classList.remove('active')
}

function showLoaderMore() {
    loaderMoreIcon.classList.add('active')
}
function hideLoaderMore() {
    loaderMoreIcon.classList.remove('active')
}

loadMoreBtn.addEventListener("click", onLoadBtn);


form.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    showLoader();
    const newQuery = input.value.trim();
    photoList.innerHTML = "";
    
        if(newQuery === "") {
            console.log("Input is empty");
            iziToast.info({
                    message: 'Input is empty',
                    messageSize: "16px",
                    position: "topRight"
            });
            hideLoader();
            return;
        }
        
        if (newQuery !== currentQ) {
            currentQ = newQuery;
            pageNumber = 1;
            photoList.innerHTML = "";
            loadMoreBtn.classList.add('disable');
        }
        
    try {
        const photos = await fetchFunction(currentQ, pageNumber, perPage)
            
        if (photos.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                theme: "dark",
                backgroundColor: "red",
                messageColor: "white",
                messageSize: "16px",
                position: "topRight"
            });

            photoList.innerHTML = "";
            evt.target.reset();
            return;
        }

        renderPhotos(photos.hits, photoList, gallery);
        loadMoreBtn.classList.remove('disable');
    } catch (error) {
        console.log(error.message);
        iziToast.error({
                    message: error.message,
                    theme: "dark",
                    backgroundColor: "red",
                    messageColor: "white",
                    messageSize: "16px",
                    position: "topRight"
                });
                hideLoader();
    } finally {
        hideLoader()
        
        }
})

let gallery = new SimpleLightbox('.gallery .gallery-link', {
        captionsData: 'alt',
        captionsDelay: 250
    });
    gallery.on('show.simplelightbox', function () { 
    });
    
    gallery.on('error.simplelightbox', function (e) {
        console.log(e); 
});

async function onLoadBtn() {
    pageNumber += 1;
    const newQuery = input.value.trim();
    loadMoreBtn.classList.add('disable');
    showLoaderMore();

    try {
        const data = await fetchFunction(newQuery, pageNumber, perPage);
        photoList.insertAdjacentHTML("beforeend", renderPhotos(data.hits, photoList, gallery));
        console.log(data.hits);
        if (data.totalHits / perPage < pageNumber) {
            return iziToast.info({
                title: "We're sorry,",
                message: "but you've reached the end of search results.",
                position: 'topRight'
            });
        }

        smoothScroll();
    } catch (error) {
        console.log(error.message);
        iziToast.error({
                    message: error.message,
                    theme: "dark",
                    backgroundColor: "red",
                    messageColor: "white",
                    messageSize: "16px",
                    position: "topRight"
                });
                hideLoaderMore();
    } finally {
        hideLoaderMore();
        loadMoreBtn.classList.remove('disable');
    }
}

function smoothScroll() {
    const image = document.querySelector('.gallery-items')
    console.log(image);
    

    if (image) {
        const imageHeight = image.getBoundingClientRect().height;
        const scrollHeight = imageHeight * 2;

        window.scrollBy({
            top: scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
}