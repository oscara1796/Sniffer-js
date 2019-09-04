

//sniffer text file upload

window.onload = function() {
  var fileInput = document.getElementById('fileInput');
  var displayData = document.getElementById('displayTextFile');

  fileInput.addEventListener('change', function(e) {
      var file = fileInput.files[0];
      var fileName = `El nombre del archivo es ${file.name}`
      var fileNameDisplay = document.getElementById('fileName');
      fileNameDisplay.innerHTML = fileName;
      if (file.type == "text/plain") {
            var reader = new FileReader();
            reader.onload = function(event) {
              var ethernetFrame = reader.result;
              var mac_da = ethernetFrame.slice(0,12);
              var mac_sor = ethernetFrame.slice(12,24);
              var etherType = ethernetFrame.slice(24,28);
              var arrSo = mac_sor.split( '' );
               var arrDa = mac_da.split( '' );
              var macDestination= "";
              var macSource = "";
              for (var i = 0; i < arrDa.length; i++) {
                 x= arrDa[i] + arrDa[i+=1] + ":";

                 macDestination += x

              }
              for (var i = 0; i < arrSo.length; i++) {
                y= arrSo[i] + arrSo[i+=1] + ":";
                macSource += y
              }
              if (etherType == 0800) {
                var etherTypeDisplay = document.getElementById('etherType')
                etherTypeDisplay.innerHTML = `Ethernet Type: ${etherType} (Ipv4)`
              }
              macSource = macSource.slice(0,17);
              macDestination = macDestination.slice(0,17);
              var MacAdressDisplay = document.getElementById('MAC-Address');
              MacAdressDisplay.innerHTML = `MAC Address Destination: ${macDestination}  MAC Addres Source: ${macSource} `;
            }
            reader.readAsText(file);
      }else{
        displayData.innerHTML = `Archivo no soportado favor de poner archivos txt`
      }
  });
}
