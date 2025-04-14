$(document).ready(function () {
    const rockAlbums = [
      {
        albumName: "Led Zeppelin IV",
        artist: "Led Zeppelin",
        description: "Features the legendary track 'Stairway to Heaven' and redefined rock music in the 1970s.",
        coverImage: "images/IV.jpg"
      },
      {
        albumName: "Back in Black",
        artist: "AC/DC",
        description: "One of the bestselling albums of all time, representing the power of hard rock.",
        coverImage: "images/bib.jpg"
      },
      {
        albumName: "Dark Side of the Moon",
        artist: "Pink Floyd",
        description: "A progressive rock masterpiece known for its conceptual depth and groundbreaking production.",
        coverImage: "images/dstm.jpg"
      }
    ];

    function scaleUp(element) {
        $(element).css("transform", "scale(1.03)");
      }
      
      function scaleDown(element) {
        $(element).css("transform", "scale(1)");
      }


        const area = $(".wrapper");
    
    rockAlbums.forEach((album, index) => {
      let albumContainer = $(`
        <div class="albumContainer">
          <div class="displayLine">
            <div class="info">
              <img src="${album.coverImage}" alt="${album.albumName} cover">
              <div>
                ${album.albumName}<br>
                by ${album.artist}
              </div>
            </div>
            <div class="buttons">
              <button class="view">Read</button>
            </div>
          </div>
          <div class="showInfo"></div>
        </div>
      `);
      
      albumContainer.find(".view").click(function(){
        const infoPanel = albumContainer.find(".showInfo");
        const btn = $(this);
        if(infoPanel.is(":visible")) {
          infoPanel.hide();
            btn.text("Read");
        } else {
          infoPanel.text(album.description).show();
          btn.text("Hide");
        }
      });
      
      area.append(albumContainer);

      albumContainer.find(".view").on("mouseenter", function(){
        scaleUp(this);
      });
      albumContainer.find(".view").on("mouseleave", function(){
        scaleDown(this);
      });
    });
  });
  