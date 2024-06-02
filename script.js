document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.getElementById('gallery');
  const collectionSelect = document.getElementById('collection-select');

  // collections from foto folder
  const collections = {
      'kyoto': ['kyoto1.jpg', 'kyoto2.jpg', 'kyoto3.jpg', 'kyoto4.jpg', 'kyoto5.jpg', 'kyoto6.jpg', 'kyoto7.jpg', 'kyoto8.jpg', 'kyoto9.jpg', 'kyoto10.jpg', 'kyoto11.jpg', 'kyoto12.jpg', 'kyoto13.jpg', 'kyoto14.jpg', 'kyoto15.jpg', 'kyoto16.jpg', 'kyoto17.jpg', 'kyoto18.jpg', 'kyoto19.jpg', 'kyoto20.jpg', 'kyoto21.jpg', 'kyoto22.jpg', 'kyoto23.jpg', 'kyoto24.jpg'],
  };

  function loadGallery(collection) {
      gallery.innerHTML = '';
      const images = collections[collection];
      images.forEach(image => {
          const imgElement = document.createElement('img');
          imgElement.src = `foto/${collection}/${image}`;
          imgElement.alt = image;
          imgElement.style.width = '-webkit-fill-available';
          gallery.appendChild(imgElement);
      });
  }

  collectionSelect.addEventListener('change', (event) => {
      loadGallery(event.target.value);
  });

  // Load the first collection by default
  loadGallery(collectionSelect.value);
});
