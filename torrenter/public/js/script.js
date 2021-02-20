async function get_torrent() {

  let siteName = document.getElementById("torrents").value;

  if(siteName === ''){
    siteName = '1337x';
  }

  const query = document.getElementById("query").value;
  if(query !== ''){
    const api = "http://torrentsapi-env.eba-5jji23df.ap-south-1.elasticbeanstalk.com/api/" +siteName +"/" +query;
    
    const html = await axios.get(api);
    const torrents = await html.data;
    console.log(torrents);
  
    console.log(Object.keys(torrents).length);
    var div = document.getElementById("data");
    div.innerHTML = "";
  
    if(Object.keys(torrents).length === 1){
        let error = document.createElement('p');
        error.textContent = "No result found";
        div.appendChild(error);
    }
    else{
  
    for (i = 0; i < Object.keys(torrents).length; i++) {
      let magnet = document.createElement("a");
      let name = document.createElement("p");
      let size = document.createElement("span");
      let category = document.createElement("span");
      let type = document.createElement("span");
      let lang = document.createElement("span");
      let dateUpload = document.createElement("span");
      let seed = document.createElement("span");
      let leech = document.createElement("span");
      let lastChecked = document.createElement("span");
      let downloads = document.createElement("span");
  
      magnet.setAttribute("href", torrents[i]["Magnet"]);
      magnet.setAttribute("target", "_blank");
  
      magnet.className = "magnet";
      name.className = "name";
      size.className = "size";
      category.className = "category";
      type.className = "type";
      lang.className = "lang";
      dateUpload.className = "date";
      seed.className = "seed";
      leech.className = "leech";
      lastChecked.className = "lastchecked";
      downloads.className = "downloads";
  
      name.textContent = torrents[i]["Name"] || '';
      size.textContent = torrents[i]["Size"] || '';
      magnet.textContent = "Magnet" || '';
      category.textContent = torrents[i]["Category"] || '';
      type.textContent = torrents[i]["Type"] || '';
      lang.textContent = torrents[i]["Language"] || '';
      dateUpload.textContent = torrents[i]["DateUpload"] || torrents[i]["Date"] || '';
      seed.textContent = torrents[i]["Seeders"] || torrents[i]["Seeder"] || '';
      leech.textContent = torrents[i]["Leechers"] || torrents[i]["Leecher"] || '';
      lastChecked.textContent = torrents[i]["LastChecked"] || '';
      downloads.textContent = torrents[i]["Downloads"] || '';
  
      name.appendChild(magnet);
      name.appendChild(size);
      name.appendChild(category);
      name.appendChild(type);
      name.appendChild(lang);
      name.appendChild(dateUpload);
      name.appendChild(seed);
      name.appendChild(leech);
      name.appendChild(lastChecked);
      name.appendChild(downloads);
  
      div.appendChild(name);
    }
    // document.getElementById('foot').style.visibility = "visible";
  }
      
  }
  
}
