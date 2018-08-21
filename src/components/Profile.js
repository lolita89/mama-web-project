import React, { Component } from 'react';
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <div>
                <h2><a href="#who"> Siapa? </a></h2>
                <h2><a href="#vision"> Visi dan Misi </a></h2>
                <h2><a href="#program"> Program </a></h2>
                <h2><a href="#why"> Kenapa Fariani? </a></h2>

                <br></br>
                <br></br>
                <br></br>

                <div id="who"> 
                    <h2 className="title">SIAPA FARIANI SUGIHARTO ?</h2>
                        <p className="paragraph">
                        Fariani Sugiharto, B.Sc., MBA adalah Caleg DPR RI Nomor Urut 2 dari Partai Demokrat bernomor 14, dalam Pemilu 17 April 2019. Calon Wakil Rakyat untuk Jawa Tengah 7 yang meliputi daerah di Kabupaten Kebumen, Banjarnegara, Purbalingga.
                        <br/>
                        <br/>
                        Fariani berpendidikan S2 - Master of Bussiness Administration (MBA). Lulus pendidikan S1 - Sarjana program Fakultas Hukum, Ilmu Sosial dan Ilmu Politik. Lulus pendidikan D3 - Bachelor of Science program Bahasa Inggris. Banyak lagi pendidikan non - formal seperti kursus dan pelatihan yang dijalaninya.
                        <br/>
                        <br/>
                        Sudah 15 tahun lebih menjabat di Dewan Pimpinan Pusat - Partai Demokrat. Sebagai Wakil Bendahara Umum periode 2015 – 2020. Sebagai Sekretaris Departemen - Departemen Kesejahteraan Rakyat periode 2010 – 2015. Sebagai Wakil Sekretaris Jenderal diantara periode 2005 – 2010.
                        <br/>
                        <br/>
                        Fariani pernah menjabat sebagai Direktur dari Leadership Management International Institute dan General Director/ Franchisee/ Centre of Influence 
                        dari Success Motivation International Institute untuk Indonesia, yang berpusat 
                        di Texas, Amerika – bergerak dalam bidang pembangunan karakter manusia.
                        <br/>
                        <br/>
                        Suami seorang Sarjana Tehnik Lingkungan dari Institut Tehnologi Bandung (ITB). Suami asli orang Jawa Tengah campur Jawa Barat. Fariani datang dari 
                        keluarga asli Indonesia - yang juga mengalir darah DNA dari berbagai macam negara dan multi-budaya yaitu Malaysia, Filipina, Thailand, Kamboja dan Finlandia Eropa.
                        <br/>
                        <br/>
                        Fariani mempunyai dua anak kandung dan satu menantu yang semuanya hidup di Netherlands Eropa. Anak pertama perempuan berpendidikan S2 - Master of Innovation dari NHTV Breda University of Applied Sciences, The Netherlands dan S1 - Sarjana Komunikasi dari Universitas Indonesia (UI ). Anak kedua seorang haji laki-laki berpendidikan S1 - Sarjana IT dari Fontys University of Applied Sciences, The Netherlands. Kini sedang melanjutkan pendidikan S2 – Master of Artificial Intelegence di Utrecht University, The Netherlands. Menantu seorang hajah berpendidikan S1 – Sarjana Food Technology dari The Hague University, The Netherlands.
                        </p>
                </div>

                <div id="vision"> 
                    <h2 className="title">Visi</h2>
                        <p className="paragraph visimisi">
                        Menjadikan Indonesia maju, adil dan sejahtera.
                        </p>

                    <h2 className="title">Misi</h2>
                        <p className="paragraph visimisi">
                        Mengabdi untuk rakyat, bangsa dan negara Indonesia karena Allah, dengan meningkatkan kesejahteraan rakyat warga Kebumen, Banjarnegara dan Purbalinggga.
                        </p>    
                </div> 

                 <div id="program"> 
                    <h2 className="title">Apakah Program Fariani?</h2>
                        <p className="paragraph">
                        <ul>
                            <li>Memajukan program pro-rakyat untuk mengurangi kemiskinan dan pengangguran.</li>
                            <li>Memajukan pendidikan melalui pemberdayaan beasiswa dari instansi pemerintah maupun swasta.</li>
                            <li>Memajukan program kesehatan masyarakat yang terpadu.</li>
                            <li>Memajukan pembangunan bidang infrastruktur dan lingkungan hidup.</li>
                            <li>Memajukan kaum perempuan dan anak muda, melalui pemberdayaan program produktif yang peduli perempuan dan anak muda.</li>
                        </ul>
                        </p>
                </div> 

                <div id="why"> 
                    <h2 className="title">Mengapa Memilih Fariani Sebagai Wakil Rakyat?</h2>
                        <p className="paragraph">
                        Bagi Fariani, politik adalah kehidupan spiritual. Dibutuhkan empati yang dikaruniakan Tuhan kedalam hati seseorang untuk merasakan detak jantung masyarakat sehari-hari, agar bisa menyerap aspirasi untuk diperjuangkan. Dengan bekal latar belakang kehidupan yang seimbang : jiwa spiritualis dan semangat amanah Tuhan yamg membara, berbadan sehat, pendidikan dan karakter yang matang, keluarga utuh dan harmonis, pengalaman dan wawasan politik, visi misi, maka warga Jawa Tengah 7 yang meliputi Kabupaten Kebumen, Banjarnegara dan Purbalingga membutuhkan kapasitas sosok seperti Fariani agar aspirasinya dapat diserap dan diimplementasikan secara maksimal.

                        </p>
                </div> 



            </div>
        );
    }
}

export default Profile;