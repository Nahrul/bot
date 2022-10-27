async function getData() {
  const spreadsheetId = '1-d8piO-WDDc6MT2_cGYTNKwk0vVpcVcxSMi8eIBKYyM'
  const apiKey = 'AIzaSyDrV5CEy1G6nJykBEEun7TvsNr_k5HO_9c';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/?key=${apiKey}&includeGridData=true`;
  const result = await fetch(url)
  const { sheets } = await result.json();
  const eventSheet = sheets[0];
  const data = eventSheet.data[0].rowData
      .filter((_, index) => index !== 0) // Mulai dari index 1 (menghindari nama kolom)
      .map(row => {
          const { values } = row;
          console.log(row);
          console.log(values[1].formattedValue);
          return {
              tanggalLaporan: values[0].formattedValue,
              nama: values[1].formattedValue,
              tanggal: values[2].formattedValue,
              pembersihan: values[3].formattedValue,
              pengecekan: values[4].formattedValue,
              RN: values[5].formattedValue,
              SN: values[6].formattedValue,
              TN: values[7].formattedValue,
              RS: values[8].formattedValue,
              RT: values[9].formattedValue,
              ST: values[10].formattedValue,
              NG: values[11].formattedValue,
              R: values[12].formattedValue,
              S: values[13].formattedValue,
              T: values[14].formattedValue,
              suhu: values[15].formattedValue,
              petugas: values[16].formattedValue,
              catatan: values[17].formattedValue,
          }
      })
  return data;
}

function dataItemTemplate(item) {
  return (
    `
    <tr>
      <th scope="row">1</th>
      <td>${item.tanggalLaporan}</td>
      <td>${item.nama}</td>
      <td>${item.tanggal}</td>
      <td>${item.pembersihan}</td>
      <td>${item.pengecekan}</td>
      <td>${item.RN}</td>
      <td>${item.SN}</td>
      <td>${item.TN}</td>
      <td>${item.RS}</td>
      <td>${item.RT}</td>
      <td>${item.ST}</td>
      <td>${item.NG}</td>
      <td>${item.R}</td>
      <td>${item.S}</td>
      <td>${item.T}</td>
      <td>${item.suhu}</td>
      <td>${item.petugas}</td>
      <td>${item.catatan}</td>

    </tr>`
  )
}

async function renderData() {
  const wrapperDOM = document.getElementById('wrapper');
  try {
    const data = await getData();
    wrapperDOM.innerHTML = data.map(item => dataItemTemplate(item)).join('');
  } catch (error) {
    wrapperDOM.innerHTML = error
    console.log(error);
  }
}

renderData();