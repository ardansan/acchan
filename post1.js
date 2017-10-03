var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href=" https://convert-safelink.blogspot.com/2017/08/car-production-fall-hits-uk-industrial.html?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}



- Setelah 5 js nya selesai silakan upload file js nya tadi ke Github. Cara Upload File JavaScript di GitHub . Mengapa harus di github? Soalnya kalau di upload di google.drive atau yang lain sekarang sudah tidak work.


 


- Setelah selesai di script js nya di github silakan copy kelima url hasil upload nya tadi ke notepad.



- Kemudian kembali ke halaman postingan blog silakan edit satu persatu dari 5 artikel tadi, silakan edit menggunakan mode HTML jangan mode Compose. Silakan masukkan script dibawah ini. (Silakan ganti url https://convert-safelink.blogspot.com/2017/08/car-production-fall-hits-uk-industrial.html dengan alamat url artikel yang sobat edit) begitu juga dengan url https://cdn.rawgit.com/dedi96/safelink/3f03bbf6/post1.js sobat ganti dengan hasil upload url script js nya tadi. (pokoknya sesuaikan alamat url artikel dengan url script js nya tadi). Lakukan cara ini kelima artikel yang sudah sobat buat sebelumnya.

<div class="text-center margin-bottom-20">
<h3>Advertise</h3>
KODE IKLAN DISINI
  </div>

<div class="row margin-bottom-20">
  <div class="col-md-6">
<div class="panel panel-primary">
    <div class="panel-heading text-center"><h2><i class="fa fa-shield"></i> Safe Link Converter <i class="fa fa-shield"></i></h2></div>
        <div class="panel-body text-center">
          <p class="text-primary margin-bottom-20">Encrypting your link and protect the link from viruses, malware, thief, etc!<br/>Made your link safe to visit.</p>

<div class="progress" id="daplong">
    <div class="progress-bar progress-bar-striped active six-sec-ease-in-out" role="progressbar" data-transitiongoal="100"></div>
</div>
<button id="download2" class="alert alert-dismissible alert-success btn-lg" style='display:none'><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> <strong>Well done!</strong> you have successfully gained access to Decrypted Link. <i class="fa fa-hand-o-down slideInDownThumb" aria-hidden="true"></i></button>

        </div>
      </div>
</div>
  <div class="col-md-6 text-left">
<div class="panel panel-info">
  <!-- Default panel contents -->
  <div class="panel-heading"><h2><i class="fa fa-question-circle-o" aria-hidden="true"></i> How to use our tool:</h2></div>
  <div class="panel-body">
<ol>
<li>Click on <strong>How To Use</strong> menu above.</li>
<li>Click on the code and <kbd><kbd>CTRL</kbd> + <kbd>C</kbd></kbd> on your keyboard.</li>
<li>Paste the code in your HTML blog theme before the <mark>&lt;/body&gt;</mark>.</li>
<li>Save your HTML blog theme. you are done!</li>
<li>Now, your blog's outbound links was encrypted!</li>
</ol>
  </div>
</div>
</div><div class="clear"></div>
</div>

<div class="row margin-bottom-20">
  <div class="col-md-4 text-center">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>
  <div class="col-md-4 margin-top-25">
<div class="panel panel-success text-center">
<div class="panel-heading">
<h3 class="panel-title">
<b>Your link show here</b> <i aria-hidden="true" class="fa fa-hand-o-down"></i></h3>
</div>
<div class="panel-body">
<script src="https://cdn.rawgit.com/dedi96/safelink/3f03bbf6/post1.js" type="text/javascript"></script>
<script type="text/javascript">
var currentURL=location.href;
var str = currentURL;
var res = str.replace("https://convert-safelink.blogspot.com/2017/08/car-production-fall-hits-uk-industrial.html?url=", "");
document.write('<button type="button" id="download" class="Visit_Link btn btn-success" onclick="changeLink();" style="display: none;"><strong>Visit Link</strong> <i class="fa fa-external-link" aria-hidden="true"></i></button>')
</script>
  </div>
</div>
</div>
 <div class="col-md-4 text-center">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>
<div class="clear"></div>
</div>

<div class="container">
  <div class="text-left">

  </div>
</div>


- Kalau sudah sekarang ganti membuat script untuk memanggil js nya. Silakan copy script dibawah ini ke notepad simpan dengan nama misal pemanggil.js 

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);
var x=Math.floor((Math.random()*5)+ 1);
var xxx=null;
if(x=="1"){xxx="/2017/08/car-production-fall-hits-uk-industrial.html"}
if(x=="2"){xxx="/2017/08/tesla-car-battery-production-releases.html"}
if(x=="3"){xxx="/2017/08/green-lunacy-fossil-fuel-mandates-to.html"}
if(x=="4"){xxx="/2017/08/us-climate-report-edits-out-highly_28.html"}
if(x=="5"){xxx="/2017/08/arctic-melt-season-changes-and-arctic.html"}a_to_ve[i].href="https://convert-safelink.blogspot.com"+xxx+"?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}

dan jangan lupa ganti url link dibawah ini ganti dengan url artikel sobat.
if(x=="1"){xxx="/2017/08/car-production-fall-hits-uk-industrial.html"}
if(x=="2"){xxx="/2017/08/tesla-car-battery-production-releases.html"}
if(x=="3"){xxx="/2017/08/green-lunacy-fossil-fuel-mandates-to.html"}
if(x=="4"){xxx="/2017/08/us-climate-report-edits-out-highly_28.html"}
if(x=="5"){xxx="/2017/08/arctic-melt-season-changes-and-arctic.html"}a_to_ve[i].href="https://convert-safelink.blogspot.com"+xxx+"?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}



 

- Kemudian upload file pemanggil.js tadi ke GitHub sama seperti cara diatas. Dan silakan copy url hasil upload.an scriptnya ke notepad.  

- Kemudian kita edit Template blognya, masuk pada menu Tema / Template > Edit HTML. Cari url https://cdn.rawgit.com/dedi96/safelink/e7d18d8c/script%20js%20pemanggil.js silakan ganti dengan url hasil script pemanggail.js tadi (didalam template ada 2 ganti semua). Dan begitu juga dengan url alamat blog https://convert-safelink.blogspot.com ganti semua dengan url blog sobat. Dan juga alamat url dibawah ini ganti dengan alamat url artikel yang sudah kita buat diatas. Kalau sudah simpan Template / Tema.

if(x=="1"){xxx="/2017/08/car-production-fall-hits-uk-industrial.html"}
if(x=="2"){xxx="/2017/08/tesla-car-battery-production-releases.html"}
if(x=="3"){xxx="/2017/08/green-lunacy-fossil-fuel-mandates-to.html"}
if(x=="4"){xxx="/2017/08/us-climate-report-edits-out-highly_28.html"}
if(x=="5"){xxx="/2017/08/arctic-melt-season-changes-and-arctic.html"}
      output.value = "https://convert-safelink.blogspot.com"+xxx+"?url=" + Base64.encode(this.value); //change with your link

- Disini blog Safelink Corverter nya sudah bisa kita gunakan, untuk supaya blog Utama kita bisa redirect link otomatis masukkan script dibawah ini tepat di atas code </body> atau bisa juga taruh di widget Tata letak JavaScript Terus simpan. (Url https://cdn.rawgit.com/dedi96/safelink/e7d18d8c/script%20js%20pemanggil.js silakan ganti dengan url pemanggil.js tadi)


<script src='https://cdn.rawgit.com/dedi96/safelink/be5f0425/script%20js%20pemanggil.js' type='text/javascript'/>
<script type='text/javascript'>
protected_links = &quot;domain.com,blogspot.com,blogger.com,linkedin.com,facebook.com,twitter.com,google.com,feedburner.com&quot;;
auto_safelink();
</script>

- Selesai, blog Safelink Converter nya sudah jadi silakan sobat test klik link download yang ada diblog Utama. maka akan dibawa ke blog safelink converter pada Laman Generate yang sudah kita buat tadi. Dan halaman generate ini akan berganti-ganti random artikel.

Keterangan :
- Gunakan Ctl + F untuk mencari code lebih cepat
- Gunakan Notepad / Notepad++ untuk mengedit
- Ganti nama-nama web / blog yang ada di bagian Protected_Link . (gunanya supanya nama web / blog yang kita tulis tidak akan ke redirect ke blog safelink).
- Tulisan KODE IKLAN DISINI silakan ganti dengan iklan Adsense nya sobat
- Jika masih kurang paham bisa ditanyakan .

Jika sobat kurang tau dan mau instant langsung jadi bisa menghubungi saya, tapi ntar ada anunya :D . wkwkwk...

Sekian artikel dari saya tentang Cara Membuat Blog Safelink Converter Work 100%, semoga bermanfaat untuk sobat-sobat semua.
Kunjungi terus blog keneono ini untuk mendapatkan artikel meaik lainnya.
Jika artikel ini bermanfaat bagi sobat tolong support dengan donasi klik iklan yang ada di blog ini.
Terimakasih...
Wassalamualaikum...


 
 Short URL  Google  Facebook  Twitter 
Blogging Tutorial

Cari artikel di blog ini...
Artikel Terkait


Cara Mencegah Serangan Virus RansomWare WannaCry

Cara Membuat Widget Komentar Terbaru ( Recent Comment ) di Blog

Cara Memasang Script Anti Copas Artikel atau Anti Klik Kanan Pada Blog

Cara Membuat Inject Delphi Seperti Payload HTTP Injector

Sekarang Blog keneono.blogspot.com Menjadi www.keneono.com

Cara Mudah Membuat Pop Up Like Box Facebook di Blog (Responsive)
 Dedi Islafuddin
Dedi Islafuddin 
Aku mung wong biasa seng ora iso opo-opo neng pengen iso, jen koyok kanca-kancane.

Cara Mudah Membuat Pop Up Like Box Facebook di Blog (Responsive)
Template Blog Safelink Converter Random Artikel Full Responsive
54 komentar
avatar
Balas
Mz Giffary delete 13 August 2017 at 17:23
Gan kok pas di visit link malah ke dotcom/2017/08/sitetujuan bukan langsung ke site tujuan?
avatar
Balas
Dedi Islafuddin  delete 13 August 2017 at 19:57
Mungkin salah dalam script js nya. Maksudnya gimana om. Coba minta link blog safelinknya
avatar
Balas
Mz Giffary delete 14 August 2017 at 13:36
link : mau.disingkat.ga/

pas visit link malah ke mau.disingkat.ga/2017/08/LinkURL bukan langsung ke link tsb

avatar
Balas
Dedi Islafuddin  delete 14 August 2017 at 19:45
kan emang harus lewatin untuk menekan tombol visit dulu om.
itu blog safelinknya udah sukses.
avatar
Balas
Kaneki Ken delete 14 August 2017 at 00:15
gan kan udh semuanya,
lalu masukin scripst apa ke blog downloadku (bkn blog yg safelink)
avatar
Balas
Dedi Islafuddin  delete 14 August 2017 at 00:40
oh iya lupa kasih scriptnya ane 
sudah ane perbarui lagi.

kasih script ini om (link js nya ganti punya situ)

<script src='https://cdn.rawgit.com/dedi96/safelink/be5f0425/script%20js%20pemanggil.js' type='text/javascript'/>
<script type='text/javascript'>
protected_links = &quot;domain.com,blogspot.com,blogger.com,linkedin.com,facebook.com,twitter.com,google.com,feedburner.com&quot;;
auto_safelink();
</script>
avatar
Balas
Kaneki Ken delete 14 August 2017 at 00:54
wah masih gk bisa,
ini yg salah apanya ya?
https://cdn.rawgit.com/OumaShu171/oumashu/b8bcd43c/pemmnggil.js
avatar
Balas
Dedi Islafuddin  delete 14 August 2017 at 01:31
coba scritnya yg di blog utama taruh diatas kode </head> atau di tempat lain atau juga bisa coba taruh di widget pd bagian tata letak. silakan di coba" dulu soalnya beda template blog biasanya beda" penerapannya.
avatar
Balas
Kaneki Ken delete 14 August 2017 at 22:22
tetep gk bisa.
avatar
Balas
Dedi Islafuddin  delete 15 August 2017 at 07:36
itu masalahnya hanya tinggal di script blog utama, kalau untuk blogsafelinknya gk bermasalah pastikan blognya setting menggunakan https://

untuk script di blog utama coba aja di coba-coba taruh di html template blog utama(di kreasikan sendiri). soalnya script js nya saya coba di blog lain bisa redirect.
avatar
Balas
Taufik Spirito delete 15 August 2017 at 00:35
Tahap demi tahap saya lalui, tapi bingung pas suruh edit template. Karena https://convert-safelink.blogspot.com kagak ada gan, dan juga url artikel di template saya cari tidak ada.
Saya yang kurang jelas membacanya atau mungkin template sudah di edit sehingga saya cari tidak ada seperti artikel diatas.
avatar
Balas
Dedi Islafuddin  delete 15 August 2017 at 07:37
pastikan download template nya yang tertera diatas om
avatar
Balas
Kaneki Ken delete 15 August 2017 at 13:16
sip dh bisa.
avatar
Balas
Dedi Islafuddin  delete 15 August 2017 at 19:50
mantav..  
avatar
Balas
Kaneki Ken delete 16 August 2017 at 18:17
saya parkir domain kok
kgk bisa pake https://
avatar
Balas
Kaneki Ken delete 16 August 2017 at 23:00
www.karma21.bid/
avatar
Balas
Dedi Islafuddin  delete 17 August 2017 at 00:14
nah itu sudah berhasil bosku  mantav.. 
avatar
Balas
Kaneki Ken delete 17 August 2017 at 13:18
gan minta tolong bentar 
coba kemari 
http://ryemoviess.com/baywatch-2017-web-dl-subtitle-indonesia.html
apa linknya sdh kesafe 
dan apa safelinknya bisa dilewati. 
karena ane minta tolong kyk gini di fb katanya kgk bisa dilewati.
padahal saya sendiri bisa melewatinya.
avatar
Balas
Dedi Islafuddin  delete 17 August 2017 at 17:39
iya sudah bisa
avatar
Balas
Kaneki Ken delete 17 August 2017 at 18:27
kalo lewat hp bisa gak?
avatar
Balas
Dedi Islafuddin  delete 17 August 2017 at 19:16
bisa
avatar
Balas
Kaneki Ken delete 17 August 2017 at 19:25
wah, kok banyak yg tdk bisa pas di fb 
ada yg bilang "itu cuma filtering URL nya kurang komplit"
avatar
Balas
Kaneki Ken delete 17 August 2017 at 19:26
btw thanks. 
tutor dan safelinknya
avatar
Balas
Dedi Islafuddin  delete 17 August 2017 at 23:40
oke 
avatar
Balas
Andira Putra delete 17 August 2017 at 19:36
Gan mau convert link kok malah gak muncul ya ? Cuman blank doang ?
avatar
Balas
Dedi Islafuddin  delete 17 August 2017 at 23:41
coba di cermati lagi om satu persatu, pasti bisa kok.
avatar
Balas
Ahmad Fauzi delete 17 August 2017 at 23:25
Thanks gan, Alhamdulillah ane bisa buat safe link ini ( http://o-pc.com ). . . btw, gimana caranya biar linknya terbuka di tab baru? biar ngak nambah nambahin bounch rate dan pengunjung ngak otomatis ninggalin blog kita gan? . . . 
buat maz gifari link mau.disingkat.ga/2017/08/mau.htmlLinkUrl tuh karena waktu masukin url ngak pake http:// atau https:// tadi ane juga sempet kaget, tapi sekarang dah mulai mudeng dikit 
avatar
Balas
Dedi Islafuddin  delete 17 August 2017 at 23:51
siap  . maaf untuk link yang mana om ??
avatar
Balas
Aprilliansyah Irawan delete 25 August 2017 at 00:20
Mas, kok "Visit Link" nya ada dibawah pos ya? ga seperti di demo.
Trus saya coba visit link juga tujuan ga sesuai. 

Tolong dibantu > http://www.suaranimesf.ga//2017/08/keuntungan-memiliki-website-download.html?url=aHR0cDovL3VwZmlsZS5tb2JpLw==

Makasih
avatar
Balas
Aprilliansyah Irawan delete 25 August 2017 at 00:34
Sudah bisa tervisit sesuai link, tadi saya cek ada yang salah. 

Cuman masalahnya Visit Linknya itu ada dibawah pos ya mas? Bukan diatas? Kalo ternyata salah tolong bantu
avatar
Balas
Dedi Islafuddin  delete 25 August 2017 at 06:57
taruh scriptnya dibagian paling atas postingan om, pake mode html
avatar
Balas
Zero Technology delete 25 August 2017 at 14:48
Mas apakah link yang akan di redirect ke safelink itu semua link diluar domain safelink kecuali yang ada di protected link ya?
Soalnya disini kok saya naruh link untuk ke website lain [Linked Title] kok ga redirect ke Safelink yang saya buat ya mas?
Terima kasih dan mohon bantuanya...
avatar
Balas
Dedi Islafuddin  delete 25 August 2017 at 22:19
iya bener om, jika domainnya ditaruh di bagian protected link maka domain tersebut tidak akan keredirect.
apa mungkin itu ketulis domainnya. seharusnya bisa kalau eang tidak ditulis dibagian protected link.
avatar
Balas
Zero Technology delete 25 August 2017 at 23:11
G bisa mas masih tetap.
Boleh minta no hp? minta bantuanya mas.
Dana siap kok.. mau bisnis blog soalnya *hhh
avatar
Balas
Dedi Islafuddin  delete 25 August 2017 at 23:23
tapi untuk domain lainnya apakah bisa.
no hp tertera di blog ini ada om 
avatar
Balas
Zero Technology delete 25 August 2017 at 23:57
Mohon bantuanya mas, instruksi diatas sudah saya penuhi semua, tinggal pengalian domain ini.
Blog: zerotechnology.ga
SL: theonlyway.ga
avatar
Balas
Dedi Islafuddin  delete 26 August 2017 at 10:24
pengalihan gimana maksudnya om ?
avatar
Balas
Admin delete 29 August 2017 at 14:03
mas ask dong ini blank kalau mau di convert
https://bagamanacarauntuk.blogspot.com/
padahal udah sesuai anjuran
avatar
Balas
Dedi Islafuddin  delete 29 August 2017 at 19:43
script js nya yg bermasalah mungkin om, coba di cek lagi. apa mungkin url link js nya
avatar
Balas
Admin delete 29 August 2017 at 21:55
oke gan work
tapi kalau untuk copy url yang udahd di convert harus manual ya (blok url+ctrl+c)? nggak bisa langsung klik Copy your link to clipboard.
wajar kah?
avatar
Balas
Dedi Islafuddin  delete 30 August 2017 at 00:12
mantabs.. 
iya om, harusnya sih bisa soalnya scriptnya tidak bisa berjalan dengan baik. 
avatar
Balas
Admin delete 30 August 2017 at 18:26
gan ask dong kalau isi kode iklan di bagian artikel gimana ya? kok beda sama kode yang di homenya....
avatar
Balas
Dedi Islafuddin  delete 30 August 2017 at 21:39
beda apanya, disitu kan usah ada scriptnya yang dibagian artikel, cari tulisan KODE IKLAN ganti dengan script iklannya
avatar
Balas
Bobby Ds delete 8 September 2017 at 14:19
Maaf mas kenapa yah visit linknya ko tidak berfungsi apakah ada yang salah.
avatar
Balas
undang sobur delete 14 September 2017 at 11:06
gan minta tolong di artikel sudah sukses tapi pas ngeganti di laman utama tombol visit link nya jadi ngilang gan

link artikel udah sukses: http://www.gaptekpoi.tk/2017/09/important-minerals-to-burn-more-calories.html

tapi pas di edit template jadi gk ada tombol visitnya gan:

sori gan bantuannya, selain disini harus ada yg diedit lagi gk?

t.value != "") {
var x=Math.floor((Math.random()*5)+ 1);
var xxx=null;
if(x=="1"){xxx="/2017/09/important-minerals-to-burn-more-calories.html"}
if(x=="2"){xxx="/2017/09/network-policies-and-cisco-access-list.html"}
if(x=="3"){xxx="/2017/09/3-ways-to-treat-air-conditioner-in.html"}
if(x=="4"){xxx="/2017/09/the-benefits-of-technology.html"}
if(x=="5"){xxx="/2017/09/how-to-solve-eating-difficulty-in.html"}
output.value = "http://www.gaptekpoi.tk"+xxx+"?url=" + 

avatar
Balas
Dedi Islafuddin  delete 14 September 2017 at 12:15
saat edit postingan artikel gunakan mode HTML jangan mode Compose.

iya sudah benar
avatar
Balas
undang sobur delete 14 September 2017 at 12:21
sory gan ternyata masalahnya ada pada penempatan kode javascript redirect di blog utamanya, ane test2 di berbagai template ternyata ada yg suport simpen di body, di head, di tata letak, dan ternyata di template blog utama ane yg pengen dipasang safelink tuh suportnya disimpen di bagian bodynya, thanks gan tutornya work 100% sangat bermanfaat dan isi artikelnya sangat jelas,, top markotop!!
avatar
Balas
Dedi Islafuddin  delete 14 September 2017 at 15:38
oke siap, sama" bosku  
avatar
Balas
PJK31 Safelink delete 15 September 2017 at 21:29
mantap bos , langsung work 100% 
avatar
Balas
Dedi Islafuddin  delete 16 September 2017 at 14:46
jooosss 
avatar
Balas
Mirm delete 16 September 2017 at 12:52
Bos ane ko' masak adsense gak muncul ya

itu buat iklannya yg versi apa bosku , inline article ya ?
avatar
Balas
Dedi Islafuddin  delete 16 September 2017 at 14:48
akun adsensenya non hosted apa hosted, tunggu aja beberapa jam muncul gak.

unit iklannya terserah bisa, kalau ane versi yang biasa
avatar
Balas
Mirm delete 16 September 2017 at 21:21
hosted bos 

ada solusi gak bos ?
avatar
Balas
Dedi Islafuddin  delete 17 September 2017 at 00:46
kalau hosted nggak bisa tayang om kaykanya, kalau bukan di blog asal daftar adsensenya.

adsense youtube ?
Gunakan kata-kata yang bijak saat berkomentar ya sob.
Emoticon

 
 
Cari artikel...
 
PopularLabel
 Trik Polosan Telkomsel September 2017
Trik Polosan Telkomsel September 2017
 Cara Download Video Yotube tanpa Software
Cara Download Video Yotube tanpa Software
 Verifikasi Banyak Channel Youtube hanya dengan Satu Nomor
Verifikasi Banyak Channel Youtube hanya dengan Satu Nomor
 Payload HTTP Injector AXIS - XL Terbaru
Payload HTTP Injector AXIS - XL Terbaru
 Cara Mendapatkan Bonus Kuota Kartu Tri Secara Gratis Terbaru
Cara Mendapatkan Bonus Kuota Kartu Tri Secara Gratis Terbaru

 
Fanspage

Komentar Terbaru
Dedi IslafuddinDedi Islafuddin
Scriptnya tidak bisa bekerjadulu pernah saya coba bisa tapi …
Dedi IslafuddinDedi Islafuddin
Cek inbox bagian spam
GameGame
kalo upload safelink.js nya pake yourjavascricpt gimana gan?
GameGame
kok gk masuk-masuk gmail dari yourjavascriptnya gan? kan say…
Dedi IslafuddinDedi Islafuddin
iya bisa om
Artikel Terbaru
Situs Website Artikel Spinner Bahasa Indonesia Gratis

Sep-26 - 2017 | No Comments
Cara Download Video Yotube tanpa Software

Sep-22 - 2017 | No Comments
Trik Polosan Telkomsel September 2017

Sep-21 - 2017 | No Comments
Verifikasi Banyak Channel Youtube hanya dengan Satu Nomor

Sep-20 - 2017 | No Comments
Cara Melacak HP Android yang Hilang dengan Mudah

Sep-18 - 2017 | No Comments
Blog Teman Lainnya
www.confignet.tk
mbahhanif.site