import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";

export const Home = () => {
  return (
    <div>
      <div className="container-fluid mt-2">
        <div className="header d-flex ">
          <img
            src="https://static.wixstatic.com/media/3e3d8b_c6b6ed33250c41de8c81d37f86fbdd09~mv2.jpg/v1/fill/w_640,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3e3d8b_c6b6ed33250c41de8c81d37f86fbdd09~mv2.jpg"
            alt=""
            style={{ width: "700px", height: "500px" }}
          />
          <img
            className="secound-img"
            src="https://wwd.com/wp-content/uploads/2016/12/diorlady02936.jpg?w=1000&h=563&crop=1"
            alt=""
            style={{ width: "800px", height: "500px" }}
          />
        </div>
      </div>
      <div className="container mt-5">
        <h3 className="text-center">Hearty Welcome To Ahalya's Boutique</h3>
        <p className="text-center mt-4">
          Extensive brands, exquisite designs, and exemplary intrinsic clothing
          works of art that genuinely transcend your<br></br> beauty and grace
          with the shimmer of incredible elegance.
        </p>
      </div>
      <div className="container  ">
        <h2 className="text-center mt-5">Shop by category</h2>
      </div>
      <div className="container suriya">
        <div className="row mt-5">
          <div className="col">
            <Link to="/Sarees" style={{ textDecoration: "none" }}>
              {" "}
              <card>
                <img
                  className="rounded-5"
                  style={{ height: "300px", widows: "200px" }}
                  src="https://www.sujatra.com/cdn/shop/products/17.3StudioSession-1235_1024x1024.jpg?v=1677427102"
                  alt="Sarees"
                />
                <h2 className="text-center text-dark"> Sarees</h2>
              </card>
            </Link>
          </div>
          <div className="col">
            <Link to="/Lehangas" style={{ textDecoration: "none" }}>
              {" "}
              <card>
                <img
                  className="rounded-5  "
                  style={{ height: "300px", widows: "200px" }}
                  src="https://www.inddus.in/cdn/shop/products/women-green-organza-wedding-lehenga-choli-275281.jpg?v=1630052319"
                  alt="Sarees"
                />
                <h2 className="text-center text-dark"> Lahangas</h2>
              </card>
            </Link>
          </div>
          <div className="col">
            <Link to="/Salwars" style={{ textDecoration: "none" }}>
              {" "}
              <card>
                <img
                  className="rounded-5"
                  style={{ height: "300px", widows: "200px" }}
                  src="https://images.meesho.com/images/products/62893742/r6pyq_512.webp"
                  alt="Sarees"
                />
                <h2 className="text-center text-dark"> Salwars</h2>
              </card>
            </Link>
          </div>
          <div className="col">
            <Link to="/Kurthis" style={{ textDecoration: "none" }}>
              {" "}
              <card>
                <img
                  className="rounded-5"
                  style={{ height: "300px", widows: "200px" }}
                  src="https://5.imimg.com/data5/SELLER/Default/2023/9/343556834/YN/YE/XY/155257574/designer-salwar-kameez-for-women.jpg"
                  alt="Sarees"
                />
                <h2 className="text-center text-dark"> Kurthis</h2>
              </card>
            </Link>
          </div>
          <div className="col">
            <Link to="/ReadyMade" style={{ textDecoration: "none" }}>
              {" "}
              <card>
                <img
                  className="rounded-5"
                  style={{ height: "300px", widows: "200px" }}
                  src="https://odette.in/cdn/shop/products/blue-festive-women-salwar-suit-sets-odette-1_0976d0b2-663e-46bb-b5c5-51c7aa3e7527.jpg?v=1663839870"
                  alt=""
                />
                <h2 className="text-center text-dark"> Readymade</h2>
              </card>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img
              className="rounded border-doted"
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25237404/2023/9/29/afcb2bfd-ec5c-4faf-b4f8-fe9457b50f381695968556469KoskiiLavenderSilver-TonedGottaPattiTissueSaree1.jpg"
              alt=""
            />
          </div>
          <div className="col">
            <img
              className="rounded"
              style={{ width: "600px", height: "800px" }}
              src="https://media.nihalfashions.com/media/catalog/product/cache/caa15edf98145413286703527de7b8dd/p/e/peach-net-salwar-suit-nws-6701.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center">Lehenga Collection</h2>
        <Link to="/Lehangas"><button className="fs-xs mt-4 small" style={{ marginLeft: "600px" }}>
          View All
        </button></Link>
        <div className="row mt-5">
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/LG-908-1-A_540x.jpg?v=1702386024"
              alt=""
            />
            <p className="text-center small">
              zari weaving Work ink blue colour <br />
              Lehenga with Unstitched Blouse
            </p>
            <p className="text-center small">rs.24,999.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/LG-946-2-A1_540x.jpg?v=1702383377"
              alt=""
            />
            <p className="text-center small">
              Dola Silk White Lehenga with Cape Style Dupatta
            </p>
            <p className="text-center small">rs.6.999.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/4023-1-B_70d7a9e0-7aeb-4281-8e11-64b25a9fe486_540x.jpg?v=1702358734"
              alt=""
            />
            <p className="text-center small">
              Pure Silk Zari Weaving Work Red Lehenga
            </p>
            <p className="text-center small">rs.17,445.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/CT-6040-1-A_540x.jpg?v=1702359832"
              alt=""
            />
            <p className="text-center small">
              Dark Green Sequin Mirror Zardosi Work Lehenga
            </p>
            <p className="text-center small">rs.15,999.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/CT-4174-2-A_540x.jpg?v=1702472090"
              alt=""
            />
            <p className="text-center small">Georgette Mirror Work Lehenga</p>
            <p className="text-center small">rs.24,999.00</p>
          </div>
        </div>
      </div>

      {/* empty container for map */}
      <div className="container-fluid mt-5">
        <img
          className="rounded-4"
          style={{ height: "400px", width: "1500px" }}
          src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym91dGlxdWV8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>

      {/* kurthi Collection */}
      <div className="container mt-5">
        <h2 className="text-center">Kurthi Collection</h2>
        <Link to="/kurthi"><button className="fs-xs mt-4 small" style={{ marginLeft: "600px" }}>
          View All
        </button></Link>
        <div className="row mt-5">
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/TP-1389-3-A_1800x1800.jpg?v=1710159011"
              alt=""
            />
            <p className="text-center small">Pure Linen Printed Green Kurti</p>
            <p className="text-center small">rs.2,999.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/TP-K914-3-A_1800x1800.jpg?v=1710232622"
              alt=""
            />
            <p className="text-center small">
              Silk Bhandani Printed with Mirror Embroidered Maroon Kurti
            </p>
            <p className="text-center small">rs.4.999.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/TP-K-852-3-A_540x.jpg?v=1708422014"
              alt=""
            />
            <p className="text-center small">
              Dark Blue Georgette Printed with Mirror Embroidered Kurti
            </p>
            <p className="text-center small">rs.3,445.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/TP-REW-9632-3-A_540x.jpg?v=1708416260"
              alt=""
            />
            <p className="text-center small">
              Georgette Paisley Printed with Beads Work Kurti
            </p>
            <p className="text-center small">rs.2,999.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/TP-K-905-3-A_720x.jpg?v=1710162725"
              alt=""
            />
            <p className="text-center small">
              Dark Blue Dola Silk Printed with Mirror Embroidered Kurti
            </p>
            <p className="text-center small">rs.4,999.00</p>
          </div>
        </div>
      </div>

      {/* Salwar Collection */}

      <div className="container mt-5">
        <h2 className="text-center">Salwar Collection</h2>
        <Link to="/Salwars">
          {" "}
          <button className="fs-xs mt-4 small" style={{ marginLeft: "600px" }}>
            View All
          </button>
        </Link>
        <div className="row mt-5">
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/SKD-6734-4-A_540x.jpg?v=1705467930"
              alt=""
            />
            <p className="text-center small">
              Semi Silk Thread Embroidered with Cut Work Salwar Kameez
            </p>
            <p className="text-center small">Rs.5,329.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/SKD-4046-1-A_1800x1800.jpg?v=1705468577"
              alt=""
            />
            <p className="text-center small">
              Semi Crepe Printed with Embroidered Mirror Work Salwar Kameez{" "}
            </p>
            <p className="text-center small">rs.4.399.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/SKD-3495-2-A_540x.jpg?v=1707132407"
              alt=""
            />
            <p className="text-center small">
              Blue Charcoal Silk Zari with Thread Embroidered Salwar Kameez
            </p>
            <p className="text-center small">rs.3,445.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/SKD-11950-4-A_540x.jpg?v=1707139122"
              alt=""
            />
            <p className="text-center small">
              Light Green Cotton Printed with Stone Work Salwar Kameez
            </p>
            <p className="text-center small">rs.2,999.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/SKD-3348-1-A_540x.jpg?v=1707129893"
              alt=""
            />
            <p className="text-center small">
              Silk Zari Embroidered and White Pearl Work Salwar Kameez
            </p>
            <p className="text-center small">rs.4,999.00</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img
              className="rounded border-doted"
              style={{ width: "600px", height: "800px" }}
              src="https://www.urbanwomania.com/wp-content/uploads/2023/05/Blush-Pink-Banarasi-Saree.webp"
              alt=""
            />
          </div>
          <div className="col">
            <img
              className="rounded"
              style={{ width: "600px", height: "800px" }}
              src="https://afbrand.s3.ap-south-1.amazonaws.com/images/items/Saundaryam-Pink-Kanjivaram-Silk-Saree-With-Amazing-Weaving-All-Over-02_8637617.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Saree Collection */}
      <div className="container mt-5">
        <h2 className="text-center">Saree Collection</h2>
        <Link to="/Sarees">
          {" "}
          <button className="fs-xs mt-4 small" style={{ marginLeft: "600px" }}>
            View All
          </button>
        </Link>
        <div className="row mt-5">
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/SA-12789-1-A_2d42ceb9-4df1-4f54-88ee-266227832159_540x.jpg?v=1704345605"
              alt=""
            />
            <p className="text-center small">
              Multicolor Jute Silk Printed Saree
            </p>
            <p className="text-center small">Rs.13,000.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/SA-SNK148-2-A_540x.jpg?v=1704286842"
              alt=""
            />
            <p className="text-center small">
              Blue Art Silk Saree with Printed Border{" "}
            </p>
            <p className="text-center small">rs.14.399.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/SA-4-1-A_540x.jpg?v=1703762283"
              alt=""
            />
            <p className="text-center small">
              Tussar Silk Shibori Printed Saree
            </p>
            <p className="text-center small">rs.13,445.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/SA-SNK15-3-A_540x.jpg?v=1704284961"
              alt=""
            />
            <p className="text-center small">
              Mustard Hand Stitch Embroidery Art Silk Saree
            </p>
            <p className="text-center small">rs.8,999.00</p>
          </div>
          <div className="col">
            <img
              style={{ height: "300px" }}
              src="https://ahalyasboutique.com/cdn/shop/files/SA-04045-4-A2_540x.jpg?v=1703683745"
              alt=""
            />
            <p className="text-center small">
              Silk Cotton Ikat Printed Pink Saree
            </p>
            <p className="text-center small">rs.4,999.00</p>
          </div>
        </div>
      </div>

      {/* Customer Review */}

      <div className="container bg-light my-5">
        <div className="text-center">
          <h2>Customers Feedback</h2>
        </div>
        <div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div>very attractive Collection</div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Third slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      {/* Follow us  */}
      <div className="container-fluid  bg-light"><br/>
        <h3 className="text-center ">@ Follow Us On Instagram</h3>
        <div className="container my-5">
          <div className="row gap-4">
            <div className="col-lg-2">
              <img
                style={{ height: "250px", width: "250px" }}
                src="https://scontent.cdninstagram.com/v/t51.29350-15/432561205_761728025923087_7325552270690516241_n.webp?stp=dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=NdervS_SfZIAX_SGtF2&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAdJW450MUMXK9i1R4l8KQ0MjZJDr6Dhny09PhPvFRuig&oe=65FDDCC4"
                alt=""
              />
            </div>
            <div className="col-lg-2">
              <img
                style={{ height: "250px", width: "250px" }}
                src="https://scontent.cdninstagram.com/v/t51.29350-15/432570402_908904160917643_8659960230631985244_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=PjKLygZfcrUAX83nnV5&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAuKhqcGod6bojYBjSP_LX6OIzhbihGlQxWILF4UvbnWg&oe=65FE5F96"
                alt=""
              />
            </div>
            <div className="col-lg-2">
              <img
                style={{ height: "250px", width: "250px" }}
                src="https://scontent.cdninstagram.com/v/t51.29350-15/431809707_2330803797119864_8931541617928656816_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=Zq7yumyeJxIAX-R-QWK&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDXhufP11jzmM_cfAaLVUIpE7uRk8Mu3c1_cQKebvG2QQ&oe=65FD9884"
                alt=""
              />
            </div>
            <div className="col-lg-2">
              <img
                style={{ height: "250px", width: "250px" }}
                src="https://scontent.cdninstagram.com/v/t51.29350-15/432443584_386771064096903_2362535376098650306_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=PaFTVEik73IAX9pSq6U&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCKdMPimDSFRnUI-zaZ_8WBgKYFowZ3JJUNx8Ta12UjVg&oe=65FD741C"
                alt=""
              />
            </div>
            <div className="col-lg-2">
              <img
                style={{ height: "250px", width: "250px" }}
                src="https://scontent.cdninstagram.com/v/t51.29350-15/431747420_945152560531811_2743651306787146463_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=Ub_xsCLvZukAX87_hGo&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC8fcpF9NZrECII4CTONGYXaRZHwZYH4od4ATgxmOCBbQ&oe=65FE6A15"
                alt=""
              />
            </div>
          </div>
          <div className="row gap-4">
            <div className="col-lg-2">
              <img
                style={{ height: "250px", width: "250px" }}
                src="https://scontent.cdninstagram.com/v/t51.29350-15/431453411_773982320905749_7249003536127425049_n.webp?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=KNxjMaDmpUEAX-VYpRs&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfACsFS-AkZN0I4lUQAw-OjmGanXMO9M0nA8maV8D96Euw&oe=65FD6338"
                alt=""
              />
            </div>
            <div className="col-lg-2">
              <img
                style={{ height: "250px", width: "250px" }}
                src="https://scontent.cdninstagram.com/v/t51.29350-15/431369606_1443703393207079_1804348823205726649_n.webp?stp=dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=BjTWG3AKAHcAX8-4KHm&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBA5zTlPcFI14qF59oZ_ROQCDTO5vE_bNuuqQd-aieZfg&oe=65FD6CB1"
                alt=""
              />
            </div>
            <div className="col-lg-2">
              <img
                style={{ height: "250px", width: "250px" }}
                src="https://scontent.cdninstagram.com/v/t51.29350-15/431428616_795419175948204_3998919586674965434_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=9Voujm0xsJ4AX9jFCOz&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDtXgblfaKcrgV-CzwyWHWJs0U2qFnuBy5yWmxjoXAANA&oe=65FCFFDB"
                alt=""
              />
            </div>
            <div className="col-lg-2">
              <img
                style={{ height: "250px", width: "250px" }}
                src="https://scontent.cdninstagram.com/v/t51.29350-15/431459892_2033275133722226_1197963209497807593_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=_yEyY_oEnRwAX80LofR&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDhBaBlC5AeLP8Qt1J7ror15xEEA24IHMBPwcjxb7rs2g&oe=65FE0C95"
                alt=""
              />
            </div>
            <div className="col-lg-2">
              <img
                style={{ height: "250px", width: "250px" }}
                src="https://scontent.cdninstagram.com/v/t51.29350-15/431069543_1076213256986239_2157776057672570075_n.webp?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=BKj_qdFMi58AX_O6k-E&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCEwZYH0Sf-Qtt3dG0rAjRBpEK02u4vQPUdUWPTscl3pg&oe=65FCE9E3"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        
      </div>
      <Footer />
    </div>
  );
};
