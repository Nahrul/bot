async function getData() {
  const spreadsheetId = '1-d8piO-WDDc6MT2_cGYTNKwk0vVpcVcxSMi8eIBKYyM'
  const apiKey = 'AIzaSyDrV5CEy1G6nJykBEEun7TvsNr_k5HO_9c';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/?key=${apiKey}&includeGridData=true`;
  const result = await fetch(url)
  const { sheets } = await result.json();
  const eventSheet = sheets[0];
  const data = eventSheet.data[0].rowData
      .filter((_, index) => index !== 0 && index !== 1) // Mulai dari index 1 (menghindari nama kolom)
      .map(row => {
          const { values } = row;
          return {
              tanggalLaporan: values[0].formattedValue,
              nama: values[1].formattedValue,
              tanggal: values[2].formattedValue,
              jam: values[3].formattedValue,
              pembersihan: values[4].formattedValue,
              pengecekan: values[5].formattedValue,
              RN: values[6].formattedValue,
              SN: values[7].formattedValue,
              TN: values[8].formattedValue,
              RS: values[9].formattedValue,
              RT: values[10].formattedValue,
              ST: values[11].formattedValue,
              NG: values[12].formattedValue,

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
      <td>${item.jam}</td>
      <td>${item.pembersihan}</td>
      <td>${item.pengecekan}</td>
      <td>${item.RN}</td>
      <td>${item.SN}</td>
      <td>${item.TN}</td>
      <td>${item.RS}</td>
      <td>${item.RT}</td>
      <td>${item.ST}</td>
      <td>${item.NG}</td>
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
  }
}

renderData();