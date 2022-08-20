  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        petugas: [],
        shift: '',
        tanggal: new Date().getDate(),
        bulan: new Date().getMonth() + 1,
        tahun: new Date().getFullYear(),
        r:'',
        s:'',
        t:'',
        n:'',
        kwh_office_kemarin : '',
        kwh_office_sekarang : '',
        kwhOffice:'',
        kwh_dc_kemarin : '',
        kwh_dc_sekarang : '',
        kwhDc:'',
        kwh_tc_kemarin : '',
        kwh_tc_sekarang : '',
        kwhTc:'',
        flow_office_kemarin: '',
        flow_office_sekarang: '',
        flowOffice: '',
        flow_bmt_kemarin : '',
        flow_bmt_sekarang : '',
        flowBmt: '',
        flow_tc_kemarin : '',
        flow_tc_sekarang : '',
        flowTc: '',
        suhu1:'',
        suhu2:'',
        suhu3:'',
        preasure1: '',
        preasure2: '',
        preasure3: '',
        cctvOn: '327',
        cctvOff: '0',
        pemeliharaan:`pengecekan suhu chiller
pengukuran beban trafo`,
        perbaikan:'nihil',
        permintaan:'nihil',
        kejadian:'nihil',
        catatan:'Operasional Normal',
        link : 'https://docs.google.com/forms/d/e/1FAIpQLSeO8MGqhJs-o6aquLifhodZMUEeHoiXe25ZhD_nKBcYajCRAg/viewform?usp=send_form?usp=pp_url',
        fire_alarm : 'Aktif',
        pompa_jokie : 'Stand+by+Auto',
        pompa_diesel : 'Nihil',
        pompa_sumur : 'ON',
        electrical_fire_pump : 'Stand+by+Auto',
        jumlah_pompa: `Pompa air sumur office: 1 unit (normal)
        Pompa transfer office dan dc: 2 unit (normal)
        Pompa sumur pos1 : 1 unit (normal)
        Pompa transfer tc : 1 unit (normal)
        Pompa sumur bmt : 1 unit (normal)`,
        area_cctv : `•  CCTV Office 45CH   :  ON
        •  CCTV Recruit  8CH:  ON%0A•  CCTV Collect 24CH :+ON
        •  CCTV TC 11CH   : ON
        •  CCTV DC 216CH  : ON
        •  CCTV DC PRS 19CH :  ON
        •  CCTV Posko 4CH    : ONC`,
        area_air : '',
        area_kwh : '',
        status_coldroom1 : 'ON',
        status_coldroom2 : 'ON',
        status_coldroom3 : 'ON',
        laporan_wa: ``,



      }
    },
    // mounted(){
    //   this.kwhOffice = parseInt(this.kwh_office_sekarang) - parseInt(this.kwh_office_kemarin)
    // },
    created(){
      this.link = localStorage.getItem('link') || 'https://docs.google.com/forms/d/e/1FAIpQLSeO8MGqhJs-o6aquLifhodZMUEeHoiXe25ZhD_nKBcYajCRAg/viewform?usp=send_form?usp=pp_url'
      this.petugas = JSON.parse(localStorage.getItem('nama')) || []
      this.fire_alarm = localStorage.getItem('fire alarm') || 'Aktif'
      this.pompa_jokie = localStorage.getItem('pompa jokie') || 'Stand+by+Auto'
      this.pompa_diesel = localStorage.getItem('pompa diesel') || 'Nihil'
      this.electrical_fire_pump = localStorage.getItem('electrical fire pump') || 'Stand+by+Auto'
      this.jumlah_pompa = localStorage.getItem('jumlah pompa') || `Pompa air sumur office: 1 unit (normal)
        Pompa transfer office dan dc: 2 unit (normal)
        Pompa sumur pos1 : 1 unit (normal)
        Pompa transfer tc : 1 unit (normal)
        Pompa sumur bmt : 1 unit (normal)`
      this.pompa_sumur = localStorage.getItem('pompa sumur') || 'ON'
      this.status_coldroom1 = localStorage.getItem('cr 1') || 'ON'
      this.status_coldroom2 = localStorage.getItem('cr 2') || 'ON'
      this.status_coldroom3 = localStorage.getItem('cr 3') || 'ON'
      this.area_cctv = localStorage.getItem('area cctv') || `•  CCTV Office 45CH   :  ON
        •  CCTV Recruit  8CH:  ON
        •  CCTV Collect 24CH : ON
        •  CCTV TC 11CH   : ON
        •  CCTV DC 216CH  : ON
        •  CCTV DC PRS 19CH :  ON
        •  CCTV Posko 4CH    : ONC`
      this.cctvOn = localStorage.getItem('cctvOn') || '327'
      this.cctvOff = localStorage.getItem('cctvOff') || '0'
      this.kwh_office_kemarin =localStorage.getItem('kwh office kemarin')
      this.kwh_dc_kemarin =localStorage.getItem('kwh dc kemarin')
      this.kwh_tc_kemarin =localStorage.getItem('kwh tc kemarin')
      this.flow_office_kemarin=localStorage.getItem('flow office kemarin')
      this.flow_bmt_kemarin =localStorage.getItem('flow bmt kemarin')
      this.flow_tc_kemarin =localStorage.getItem('flow tc kemarin')
      this.kwh_office_sekarang =localStorage.getItem('kwh office sekarang')
      this.kwh_dc_sekarang =localStorage.getItem('kwh dc sekarang')
      this.kwh_tc_sekarang =localStorage.getItem('kwh tc sekarang')
      this.flow_office_sekarang =localStorage.getItem('flow office sekarang')
      this.flow_bmt_sekarang =localStorage.getItem('flow bmt sekarang')
      this.flow_tc_sekarang =localStorage.getItem('flow tc sekarang')

    },
    updated(){
      localStorage.setItem('kwh office kemarin', this.kwh_office_kemarin)
      localStorage.setItem('kwh dc kemarin', this.kwh_dc_kemarin)
      localStorage.setItem('kwh tc kemarin', this.kwh_tc_kemarin)
      localStorage.setItem('flow office kemarin', this.flow_office_kemarin)
      localStorage.setItem('flow bmt kemarin', this.flow_bmt_kemarin)
      localStorage.setItem('flow tc kemarin', this.flow_tc_kemarin)
      localStorage.setItem('kwh office sekarang', this.kwh_office_sekarang)
      localStorage.setItem('kwh dc sekarang', this.kwh_dc_sekarang)
      localStorage.setItem('kwh tc sekarang', this.kwh_tc_sekarang)
      localStorage.setItem('flow office sekarang', this.flow_office_sekarang)
      localStorage.setItem('flow bmt sekarang', this.flow_bmt_sekarang)
      localStorage.setItem('flow tc sekarang', this.flow_tc_sekarang)
      if(this.shift == 'Shift 3'){
        this.kwhOffice = parseInt(this.kwh_office_sekarang) - parseInt(this.kwh_office_kemarin)
        this.kwhDc = parseInt(this.kwh_dc_sekarang) - parseInt(this.kwh_dc_kemarin)
        this.kwhTc = parseInt(this.kwh_tc_sekarang) - parseInt(this.kwh_tc_kemarin)

        this.flowOffice = parseInt(this.flow_office_sekarang) - parseInt(this.flow_office_kemarin)
        this.flowBmt = parseInt(this.flow_bmt_sekarang) - parseInt(this.flow_bmt_kemarin)
        this.flowTc = parseInt(this.flow_tc_sekarang) - parseInt(this.flow_tc_kemarin)
        this.pemeliharaan = `pengecekan suhu chiller
pengukuran beban trafo
pengecekan kwh all trafo
pengecekan flow meter air`
      }else{
        this.pemeliharaan = `pengecekan suhu chiller
pengukuran beban trafo`
      }
      
    },
    methods:{
      pindah(){
        this.kwh_office_kemarin = this.kwh_office_sekarang
        this.kwh_office_sekarang = ''
        this.kwh_dc_kemarin = this.kwh_dc_sekarang
        this.kwh_dc_sekarang = ''
        this.kwh_tc_kemarin = this.kwh_tc_sekarang
        this.kwh_tc_sekarang = ''
        this.flow_office_kemarin = this.flow_office_sekarang
        this.flow_office_sekarang = ''
        this.flow_tc_kemarin = this.flow_tc_sekarang
        this.flow_tc_sekarang = ''
        this.flow_bmt_kemarin = this.flow_bmt_sekarang
        this.flow_bmt_sekarang = ''

      },
      copy() {
        var copyText = document.getElementById("copyText");
        copyText.select();
        // copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        // document.execCommand("copy")
        alert('copy to clipboard!')
      },
      laporan(){
        if (this.shift == "Shift 1"){
            date = new Date().getDay() 
            if(date == 0 || date == 6){
              rtc = Math.floor(Math.random() * (2 - 0) + 0);
              stc = Math.floor(Math.random() * (2 - 0) + 0);
              ttc = Math.floor(Math.random() * (2 - 0) + 0);
            }else{
              rtc = Math.floor(Math.random() * (50 - 20) + 20);
              stc = Math.floor(Math.random() * (50 - 20) + 20);
              ttc = Math.floor(Math.random() * (50 - 20) + 20);            }
          }else if(this.shift == "Shift 2" || "Shift 3"){
            rtc = Math.floor(Math.random() * (2 - 0) + 0);
            stc = Math.floor(Math.random() * (2 - 0) + 0);
            ttc = Math.floor(Math.random() * (2 - 0) + 0);
          }
          rdc = Math.floor(Math.random() * (55 - 30) + 30);
          sdc = Math.floor(Math.random() * (55 - 30) + 30);
          tdc = Math.floor(Math.random() * (55 - 30) + 30);
          ndc = Math.floor(Math.random() * (20 - 32) + 32);
        rndc = Math.floor(Math.random() * (220 - 280) + 280);
        sndc = Math.floor(Math.random() * (220 - 280) + 280);
        tndc = Math.floor(Math.random() * (220 - 280) + 280);
        rnoffice = Math.floor(Math.random() * (220 - 280) + 280);
        snoffice = Math.floor(Math.random() * (220 - 280) + 280);
        tnofffice = Math.floor(Math.random() * (220 - 280) + 280);
        rntc = Math.floor(Math.random() * (220 - 280) + 280);
        sntc = Math.floor(Math.random() * (220 - 280) + 280);
        tntc = Math.floor(Math.random() * (220 - 280) + 280);
        rsdc = Math.floor(Math.random() * (378 - 390) + 390);
        rtdc = Math.floor(Math.random() * (378 - 390) + 390);
        stdc = Math.floor(Math.random() * (378 - 390) + 390);
        rsoffice = Math.floor(Math.random() * (378 - 390) + 390);
        rtoffice = Math.floor(Math.random() * (378 - 390) + 390);
        stoffice = Math.floor(Math.random() * (378 - 390) + 390);
        rstc = Math.floor(Math.random() * (378 - 390) + 390);
        rttc = Math.floor(Math.random() * (378 - 390) + 390);
        sttc = Math.floor(Math.random() * (378 - 390) + 390);

        let tanggal1 = new Date().getDate()

        if (this.shift == "Shift 3") {
          if (tanggal1 == 1){
            let b = new Date().getMonth() -1
            this.bulan = b + 1
            tanggal1 = new Date(this.tahun, b + 1,0).getDate()
          }else{
            tanggal1 = tanggal1 - 1
          }
        }else{
          tanggal1 = tanggal1
        }
        // penentuan jam masuk dan keluar berdasarkan shift
        let jam_masuk = ''
        let jam_keluar = ''
        if (this.shift == "Shift 1") {
          jam_masuk += 07
          jam_keluar += 15       
        }else if(this.shift == "Shift 2") {
          jam_masuk += 15
          jam_keluar += 23
        }else{
          jam_masuk += 23
          jam_keluar += 07
        }
        const months = ["January", "February", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"];

        const d = new Date();
        let month = months[this.bulan - 1];
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        let day = days[d.getDay()];
        if(this.shift == "Shift 3"){
          day = days[d.getDay()-1];
        }
        let pemeliharaan = this.pemeliharaan
        if (this.pemeliharaan == 'nihil') {
          pemeliharaan = ''
        }
        let perbaikan = this.perbaikan
        if (this.perbaikan == 'nihil') {
          perbaikan = ''
        }
        let permintaan = this.permintaan
        if (this.permintaan == 'nihil') {
          permintaan = ''
        }
        let kejadian = this.kejadian
        if (this.kejadian == 'nihil') {
          kejadian = ''
        }
        this.laporan_wa = `
        LAPORAN HARIAN BMT `+ this.shift.toUpperCase() +`

Unit :IDM Cab. Cirebon
Hari/tgl : `+ day +`, `+ tanggal1 +` `+ month +` `+ this.tahun +`
Waktu :`+ jam_masuk +`:00 - `+ jam_keluar +`:00 WIB
Petugas: `+ this.petugas.join(', ') +`
==============================
OPERASIONAL UTILITAS GEDUNG 

• Power PLN : Normal
• Trafo office 250 kVA : Temp  30°C
R.  `+ this.r +`A   S.  `+ this.s +`A   T.  `+ this.t +`A   N. `+ this.n +`A
RS. `+ rsoffice +`  RT. `+ rtoffice +`  ST. `+ stoffice +`
RN. `+ rnoffice +`    TN.`+ tnofffice +`   SN.`+ snoffice +`  NG 1.0

• Trafo DC 66 kVA : Temp 32°C
R.  `+ rdc +`A    S.  `+ sdc +`A    T.  `+ tdc +`A    N. `+ ndc +`A
RS. `+ rsdc +`   RT. `+ rtdc +`    ST. `+ stdc +`
RN.`+ rndc +`   TN.`+ tndc +`     SN.`+ sndc +`   NG 1.0

• Trafo TC 50 kVA : Temp 30°C
R.  `+ rtc +`A     S.  `+ stc +`A     T.  `+ ttc +`A    N. 0A
RS. `+ rstc +`    RT. `+ rttc +`   ST. `+ sttc +`
RN.`+ rntc +`   TN.`+ tntc +`     SN.`+ sntc +`  NG 1.5

• Genset 160 kVA : Stand By Automatic
• Genset 60 kVA : Stand By Automatic
• Genset 60 kVA : Stand By Automatic
• Pompa Dorong : 2 Unit Auto
• Pompa Sumur : 1 Unit Auto 
• Chiller Cold Room : 3 Unit ON
 - CR1 : Temp/Bar - `+ this.suhu1 +`°C
 - CR2 : Temp/Bar - `+ this.suhu2 +`°C
 - CR3 : Temp/Bar - `+ this.suhu3 +`°C
• Pompa Hydrant : standby
• Fire Alarm Detector : Aktif
`+ this.area_cctv +`

Total CCTV : `+ this.cctvOn +` Unit
Total Rusak : `+ this.cctvOff +` Unit

 PEMELIHARAAN & PERBAIKAN
 Preventif Asset : 
`+ pemeliharaan +`


PEK. PERBAIKAN
`+ perbaikan +`

PERMINTAAN PEKERJAAN & KOMPLAIN
`+ permintaan +`


KEJADIAN/TEMUAN
`+ kejadian +`

KETERANGAN/CACATAN

`+ this.catatan +`
`
      },
      advanced(){
        localStorage.setItem('fire alarm', this.fire_alarm)
        localStorage.setItem('pompa jokie', this.pompa_jokie)
        localStorage.setItem('pompa diesel', this.pompa_diesel)
        localStorage.setItem('electrical fire pump', this.electrical_fire_pump)
        localStorage.setItem('jumlah pompa', this.jumlah_pompa)
        localStorage.setItem('pompa sumur', this.pompa_sumur)
        localStorage.setItem('cr 1', this.status_coldroom1)
        localStorage.setItem('cr 2', this.status_coldroom2)
        localStorage.setItem('cr 3', this.status_coldroom3)
        localStorage.setItem('area cctv', this.area_cctv)
        localStorage.setItem('cctvOn', this.cctvOn)
        localStorage.setItem('cctvOff', this.cctvOff)
        localStorage.setItem('link', this.link)

        alert("data tersimpan!")
      },
      randnum() { 
        this.suhu1 = Math.floor(Math.random() * (6 - 2) + 2);
        this.suhu2 = Math.floor(Math.random() * (6 - 2) + 2);
        this.suhu3 = Math.floor(Math.random() * (6 - 2) + 2);
        this.preasure1 = Math.floor(Math.random() * (29 - 26) + 26);
        this.preasure2 = Math.floor(Math.random() * (29 - 26) + 26);
        this.preasure3 = Math.floor(Math.random() * (29 - 26) + 26);
          if (this.shift == "Shift 1"){
            date = new Date().getDay() 
            if(date == 0 || date == 6){
              this.r = Math.floor(Math.random() * (150 - 140) + 140);
              this.s = Math.floor(Math.random() * (150 - 140) + 140);
              this.t = Math.floor(Math.random() * (150 - 140) + 140);
              this.n = Math.floor(Math.random() * (50 - 47) + 47);
            }else{
              this.r = Math.floor(Math.random() * (210 - 190) + 190);
              this.s = Math.floor(Math.random() * (210 - 190) + 190);
              this.t = Math.floor(Math.random() * (210 - 190) + 190);
              this.n = Math.floor(Math.random() * (50 - 47) + 47);
            }
          }else if(this.shift == "Shift 2"){
            this.r = Math.floor(Math.random() * (150 - 140) + 140);
            this.s = Math.floor(Math.random() * (150 - 140) + 140);
            this.t = Math.floor(Math.random() * (150 - 140) + 140);
            this.n = Math.floor(Math.random() * (50 - 47) + 47);
          }else if(this.shift == "Shift 3"){
            this.r = Math.floor(Math.random() * (150 - 140) + 140);
            this.s = Math.floor(Math.random() * (150 - 140) + 140);
            this.t = Math.floor(Math.random() * (150 - 140) + 140);
            this.n = Math.floor(Math.random() * (50 - 47) + 47);
          }


      },
      console(){
        
        // axios({
        //   method: 'post',
        //   url: 'https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSeQy1dBsInUAuE5RjUP43jQNYjV1xBYv-0aLpIsNNFp0IOHbg/formResponse',
        //   data: {
        //     emailAddress: 'anjing@kau.com'
        //   },
        //   headers:{
        //     "Access-Control-Allow-Origin": '*',
        //     'origin': 'https://docs.google.com'
        //   }
        // });

        let regional = "&entry.1251386738=ASY"
        // nama petugas
        let nama_entry = "&entry.1386643190="
        nama_entry += this.petugas.join(', ').replace(/ /g,"+")
        // tahun
        let tahun = "&entry.1136196154_year="
        tahun += this.tahun
        // penentuan tanggal
        let tanggal = "&entry.1136196154_day="
        if (this.shift == "Shift 3") {
          if (this.tanggal == 1){
            let b = new Date().getMonth() -1
            this.bulan = b + 1
            this.tanggal = new Date(this.tahun, b + 1,0).getDate()
            tanggal += this.tanggal
            console.log(tanggal)
          }else{
            tanggal += this.tanggal - 1
          }
        }else{
          tanggal += this.tanggal
        }
        // bulan
        let bulan = "&entry.1136196154_month="
        bulan += this.bulan


        let zona = "&entry.1737599555=WIB"
        let jam_masuk = "&entry.666255708_hour="
        let menit_masuk = "&entry.666255708_minute=00"
        let jam_keluar = "&entry.1320728560_hour="
        let menit_keluar = "&entry.1320728560_minute=00"

        // penentuan jam masuk dan keluar berdasarkan shift
        if (this.shift == "Shift 1") {
          jam_masuk += 07
          jam_keluar += 15
          console.log(jam_masuk)          
        }else if(this.shift == "Shift 2") {
          jam_masuk += 15
          jam_keluar += 23
        }else{
          jam_masuk += 23
          jam_keluar += 07
        }
        
        // shift
        let shift_entry = "&entry.458820389="
        shift_entry += this.shift.replace(/\s+/g,"+")

        let cabang = "&entry.11845914=CIREBON"
        let kva_pln1 = "&entry.1425743504=250"
        let kva_pln2 = "&entry.1811372098=66"
        let kva_pln3 = "&entry.1465374572=60"
        let kva_pln_catatan = "&entry.1050631306"
        let status_pln = "&entry.1503625449=Normal"
        let unit_trafo = "&entry.1623498328=3+Unit"
        let trafo1 = "&entry.1644025321=250"
        let trafo2 = "&entry.105937284=66"
        let trafo3 = "&entry.124466718=60"
        let status_trafo1= "&entry.1076685182=OK"
        let status_trafo2 = "&entry.1125670931=OK"
        let status_trafo3 = "&entry.1537648042=OK"
        let jumlah_genset = "&entry.836916224=3+Unit"
        let genset1 = "&entry.34499611=175"
        let genset2 = "&entry.680599205=60"
        let genset3 = "&entry.1190301583=60"
        let status_genset1 = "&entry.1028900588=Stand+by+Auto"
        let status_genset2 = "&entry.1539680982=Stand+by+Auto"
        let status_genset3 = "&entry.2068862473=Stand+by+Auto"
        let jenis_panel = "&entry.955785228=LVMDP"


        // beban R
        let beban_r = "&entry.670855053="
        beban_r += this.r
        // beban S
        let beban_s = "&entry.1819587166="
        beban_s += this.s
        // beban t 
        let beban_t = "&entry.1021302425="
        beban_t += this.t
        // beban n
        let beban_n = "&entry.1275826288="
        beban_n += this.n

        let fire_alarm = "&entry.181359338="
        fire_alarm += this.fire_alarm
        let pompa_jokie = "&entry.209873353="
        pompa_jokie += this.pompa_jokie
        let pompa_diesel = "&entry.926069726="
        pompa_diesel += this.pompa_diesel
        let electrical_fire_pump ="&entry.787116222="
        electrical_fire_pump += this.electrical_fire_pump
        let pompa_dorong = "&entry.1960544484=Stand+by+Auto"
        let pompa_sumur = "&entry.216921219="
        pompa_sumur += this.pompa_sumur
        // let jumlah_pompa_sumur = "&entry.840879772=Pompa+air+sumur+office:+1+unit+(normal)%0APompa+transfer+office+dan+dc:+2+unit+(normal)%0APompa+sumur+pos1+:+1+unit+(normal)%0APompa+transfer+tc+:+1+unit+(normal)%0APompa+sumur+bmt+:+1+unit+(normal)"
        let jumlah_pompa_sumur = "&entry.840879772="
        jumlah_pompa_sumur += this.jumlah_pompa
        jumlah_pompa_sumur = jumlah_pompa_sumur.replace(/ /g, "+").replace(/\n/g, "%0A")

        let area_cctv = "&entry.1033210631="
        area_cctv += this.area_cctv
        area_cctv = area_cctv.replace(/ /g, "+").replace(/\n/g, "%0A")

        // cctv on
        let jumlah_on = "&entry.1450700688="
        jumlah_on += this.cctvOn
        // cctv off
        let jumlah_off = "&entry.249967045="
        jumlah_off += this.cctvOff

        let jumlah_coldroom = "&entry.1070854388=3"
        // suhu chiller 1
        let suhu_coldroom1 = "&entry.666490678="
        suhu_coldroom1+= this.suhu1
        // preasure chiler 1
        let preasure_coldroom1 = "&entry.553580392="
        preasure_coldroom1 += this.preasure1
        // suhu chiller 2
        let suhu_coldroom2 = "&entry.665166214="
        suhu_coldroom2 += this.suhu2
        // preasure chiller 2
        let preasure_coldroom2 = "&entry.2052590279="
        preasure_coldroom2 += this.preasure2
        // suhu chiller 3
        let suhu_coldroom3 = "&entry.2010845976="
        suhu_coldroom3+= this.suhu3
        // preasure chiller 3
        let preasure_coldroom3 = "&entry.1394288064="
        preasure_coldroom3 += this.preasure3

        // status all chiller
        let status_coldroom1 = "&entry.761107784=ON"
        let status_coldroom2 = "&entry.277523632=ON"
        let status_coldroom3 = "&entry.1088315514=ON"

        // kwh
        let total_kwh = "&entry.399026465="
        let area_kwh = "&entry.29450866="


        // flow meter
        let area_air = "&entry.970325908="
        let total_air = "&entry.1548278604="
        if(this.shift == "Shift 3"){
          total_kwh += parseInt(this.kwhOffice) + parseInt(this.kwhDc) + parseInt(this.kwhTc)
          this.area_kwh = "Office+:+" + this.kwhOffice + "%0ADc+:+" + this.kwhDc + "%0ATc+:+" + this.kwhTc
          area_kwh += this.area_kwh
          console.log(total_kwh)
          console.log(area_kwh)

          this.area_air = "Office+:+" + this.flowOffice + "%0ATc+:+" + this.flowTc + "%0ABmt+:+" + this.flowBmt
          area_air += this.area_air
          total_air += parseInt(this.flowOffice) + parseInt(this.flowBmt) + parseInt(this.flowTc)
          console.log(total_air);  
          console.log(area_air)
        }
        
        // total_air += parseInt(this.airOffice) + parseInt(this.airBmt) + parseInt(this.airTc)

        // pemeliharaan dan preventiv aset ----------------------------------
        // pemelharaan
        let pemeliharaan = "&entry.1099436377="
        pemeliharaan += this.pemeliharaan
        pemeliharaan = pemeliharaan.replace(/ /g, "+").replace(/\n/g, "%0A")
        // perbaikan
        let perbaikan = "&entry.740829364="
        perbaikan += this.perbaikan
        perbaikan = perbaikan.replace(/ /g, "+").replace(/\n/g, "%0A")
        // permintaan
        let permintaan = "&entry.864780574="
        permintaan += this.permintaan
        permintaan = permintaan.replace(/ /g, "+").replace(/\n/g, "%0A")
        // kejadian
        let kejadian = "&entry.640345927="
        kejadian += this.kejadian
        kejadian = kejadian.replace(/ /g, "+").replace(/\n/g, "%0A")
        // catatan
        let catatan = '&entry.369035004='
        catatan += this.catatan
        catatan = catatan.replace(/ /g, "+").replace(/\n/g, "%0A")


        // pembuatan link
        this.link+=regional+nama_entry+tahun+bulan+jam_masuk+jam_keluar+menit_masuk+menit_keluar+tanggal+cabang+zona+shift_entry+trafo1+trafo2+trafo3+kva_pln1+kva_pln2+kva_pln3+kva_pln_catatan+status_pln+status_trafo1+status_trafo2+status_trafo3+unit_trafo+jumlah_genset+status_genset1+status_genset2+status_genset3+genset1+genset2+genset3+jenis_panel+beban_r+beban_s+beban_t+beban_n+fire_alarm+pompa_jokie+pompa_diesel+pompa_sumur+electrical_fire_pump+jumlah_pompa_sumur+area_cctv+jumlah_on+jumlah_off+jumlah_coldroom+suhu_coldroom1+suhu_coldroom2+suhu_coldroom3+preasure_coldroom1+preasure_coldroom2+preasure_coldroom3+status_coldroom1+status_coldroom2+status_coldroom3+area_kwh+total_kwh+area_air+total_air+pemeliharaan+perbaikan+permintaan+kejadian+catatan
        console.log(this);
        console.log(this.link)
      }
    }
  }).mount('#app')