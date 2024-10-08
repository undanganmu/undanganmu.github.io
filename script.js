let searchParams = new URLSearchParams(window.location.search)

    var tema = searchParams.get('t');
    
    if(!tema){
      tema = "null";
    }

    $('form').on('submit', function(e){
      e.preventDefault();
      // pengantin pria
      var name_pria = $('input[name="name_pria"]').val();
      var ayah_pria = $('input[name="ayah_pria"]').val();
      var ibu_pria = $('input[name="ibu_pria"]').val();
      var link_fb_pria = $('input[name="link_fb_pria"]').val();
      var link_ig_pria = $('input[name="link_ig_pria"]').val();
      var no_wa_pria = $('input[name="no_wa_pria"]').val();
      var link_tw_pria = $('input[name="link_tw_pria"]').val();
      // pengantin wanita
      var name_wanita = $('input[name="name_wanita"]').val();
      var ayah_wanita = $('input[name="ayah_wanita"]').val();
      var ibu_wanita = $('input[name="ibu_wanita"]').val();
      var link_fb_wanita = $('input[name="link_fb_wanita"]').val();
      var link_ig_wanita = $('input[name="link_ig_wanita"]').val();
      var no_wa_wanita = $('input[name="no_wa_wanita"]').val();
      var link_tw_wanita = $('input[name="link_tw_wanita"]').val(); 
      // akad & resepsi
      var waktu_akad = $('input[name="waktu_akad"]').val();
      var tempat_akad = $('input[name="tempat_akad"]').val();
      var waktu_resepsi = $('input[name="waktu_resepsi"]').val();
      var tempat_resepsi = $('input[name="tempat_resepsi"]').val();
      // cerita
      var tahun_pertama = $('input[name="tahun_pertama"]').val();
      var cerita_tahun_pertama = $('textarea[name="cerita_tahun_pertama"]').val();
      var tahun_kedua = $('input[name="tahun_kedua"]').val();
      var cerita_tahun_kedua = $('textarea[name="cerita_tahun_kedua"]').val();
      var tahun_ketiga = $('input[name="tahun_ketiga"]').val();
      var cerita_tahun_ketiga = $('textarea[name="cerita_tahun_ketiga"]').val();

      var text = tema.toUpperCase() +
      "%0a--------------------%0a"+
      "Nama Pria: "+name_pria+"%0a"+
      "Ayah Pria: "+ayah_pria+"%0a"+
      "Ibu Pria: "+ibu_pria+"%0a"+
      "Link Fb Pria: "+link_fb_pria+"%0a"+ 
      "Link Ig Pria: "+link_ig_pria+"%0a"+
      "No. Wa Pria: "+no_wa_pria+"%0a"+
      "Link Tw Pria: "+link_tw_pria+"%0a"+
      "--------------------%0a"+
      "Nama Wanita: "+name_wanita+"%0a"+
      "Ayah Wanita: "+ayah_wanita+"%0a"+
      "Ibu Wanita: "+ibu_wanita+"%0a"+
      "Link Fb Wanita: "+link_fb_wanita+"%0a"+ 
      "Link Ig Wanita: "+link_ig_wanita+"%0a"+
      "No. Wa Wanita: "+no_wa_wanita+"%0a"+
      "Link Tw Wanita: "+link_tw_wanita+"%0a"+
      "--------------------%0a"+
      "Waktu Akad: "+waktu_akad+"%0a"+
      "Tempat Akad: "+tempat_akad+"%0a"+
      "Waktu Resepsi: "+waktu_resepsi+"%0a"+
      "Tempat Resepsi: "+tempat_resepsi+"%0a"+
      "--------------------%0a"+
      "Tahun Pertama: "+tahun_pertama+"%0a"+
      "Cerita Tahun Pertama: %0a"+cerita_tahun_pertama+"%0a"+
      "Tahun Kedua: "+tahun_kedua+"%0a"+
      "Cerita Tahun Kedua: %0a"+cerita_tahun_kedua+"%0a"+
      "Tahun Ketiga: "+tahun_ketiga+"%0a"+
      "Cerita Tahun Ketiga: %0a"+cerita_tahun_ketiga+"%0a"+
      "--------------------%0a"+
      "*Mohon tunggu respon dari kami"

      window.location.href = "https://api.whatsapp.com/send?phone=6285725489277&text="+text;
    })

    autosize($('textarea'));