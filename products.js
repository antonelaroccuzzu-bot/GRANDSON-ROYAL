/* GRANDSON ROYALE catalogue.
   Prices are references/estimates, not guaranteed live quotes.
   Confirm stock, condition, configuration, warranty and final price before payment. */
(() => {
"use strict";
const PRODUCTS = [
{"id":"gr001","name":"iPhone 6 16GB","category":"Phones","brand":"Apple","price":"₦45,000","notes":"Used; storage/condition varies","search":"iphone 6 16gb used Nigeria"},
{"id":"gr002","name":"iPhone 6 Plus 64GB","category":"Phones","brand":"Apple","price":"₦60,000","notes":"Used; verify battery and screen","search":"iphone 6 plus 64gb used Nigeria"},
{"id":"gr003","name":"iPhone 7 32GB","category":"Phones","brand":"Apple","price":"₦65,000","notes":"Used; condition varies","search":"iphone 7 32gb used Nigeria"},
{"id":"gr004","name":"iPhone 7 Plus 128GB","category":"Phones","brand":"Apple","price":"₦95,000","notes":"Used; verify condition","search":"iphone 7 plus 128gb used Nigeria"},
{"id":"gr005","name":"iPhone 8 64GB","category":"Phones","brand":"Apple","price":"₦95,000","notes":"Used; verify battery health","search":"iphone 8 64gb used Nigeria"},
{"id":"gr006","name":"iPhone 8 Plus 64GB","category":"Phones","brand":"Apple","price":"₦125,000","notes":"Used; verify condition","search":"iphone 8 plus 64gb used Nigeria"},
{"id":"gr007","name":"iPhone X 64GB","category":"Phones","brand":"Apple","price":"₦140,000","notes":"Used; estimate, verify listing","search":"iphone X 64gb used Nigeria"},
{"id":"gr008","name":"iPhone XR 64GB","category":"Phones","brand":"Apple","price":"₦175,000","notes":"Used; verify battery health","search":"iphone XR 64gb used Nigeria"},
{"id":"gr009","name":"iPhone XS 64GB","category":"Phones","brand":"Apple","price":"₦190,000","notes":"Used; verify condition","search":"iphone XS 64gb used Nigeria"},
{"id":"gr010","name":"iPhone XS Max 256GB","category":"Phones","brand":"Apple","price":"₦245,000","notes":"Used; verify condition","search":"iphone XS Max 256gb used Nigeria"},
{"id":"gr011","name":"iPhone 11 128GB","category":"Phones","brand":"Apple","price":"₦303,840","notes":"Marketplace listing snapshot; condition varies","search":"iphone 11 128gb Jumia Nigeria"},
{"id":"gr012","name":"iPhone 11 Pro 256GB","category":"Phones","brand":"Apple","price":"₦336,500","notes":"Marketplace listing snapshot; condition varies","search":"iphone 11 pro 256gb Jumia Nigeria"},
{"id":"gr013","name":"iPhone 11 Pro Max 256GB","category":"Phones","brand":"Apple","price":"₦390,000","notes":"Estimate; verify listing and condition","search":"iphone 11 pro max 256gb Nigeria"},
{"id":"gr014","name":"iPhone 12 128GB","category":"Phones","brand":"Apple","price":"₦380,000","notes":"Estimate; verify listing and condition","search":"iphone 12 128gb Nigeria"},
{"id":"gr015","name":"iPhone 12 mini 128GB","category":"Phones","brand":"Apple","price":"₦320,000","notes":"Estimate; verify listing and condition","search":"iphone 12 mini 128gb Nigeria"},
{"id":"gr016","name":"iPhone 12 Pro 128GB","category":"Phones","brand":"Apple","price":"₦433,440","notes":"Marketplace listing snapshot; condition varies","search":"iphone 12 pro 128gb Jumia Nigeria"},
{"id":"gr017","name":"iPhone 12 Pro Max 256GB","category":"Phones","brand":"Apple","price":"₦656,600","notes":"Marketplace listing snapshot; condition varies","search":"iphone 12 pro max 256gb Jumia Nigeria"},
{"id":"gr018","name":"iPhone 13 128GB","category":"Phones","brand":"Apple","price":"₦590,000","notes":"Marketplace listing snapshot; condition varies","search":"iphone 13 128gb Jumia Nigeria"},
{"id":"gr019","name":"iPhone 13 mini 128GB","category":"Phones","brand":"Apple","price":"₦470,000","notes":"Estimate; verify listing and condition","search":"iphone 13 mini 128gb Nigeria"},
{"id":"gr020","name":"iPhone 13 Pro 256GB","category":"Phones","brand":"Apple","price":"₦666,400","notes":"Marketplace listing snapshot; condition varies","search":"iphone 13 pro 256gb Jumia Nigeria"},
{"id":"gr021","name":"iPhone 13 Pro Max 256GB","category":"Phones","brand":"Apple","price":"₦833,000","notes":"Marketplace listing snapshot; condition varies","search":"iphone 13 pro max 256gb Jumia Nigeria"},
{"id":"gr022","name":"iPhone 14 128GB","category":"Phones","brand":"Apple","price":"₦670,000","notes":"Marketplace listing snapshot; condition varies","search":"iphone 14 128gb Jumia Nigeria"},
{"id":"gr023","name":"iPhone 14 Plus 128GB","category":"Phones","brand":"Apple","price":"₦760,000","notes":"Estimate; verify listing and condition","search":"iphone 14 plus 128gb Nigeria"},
{"id":"gr024","name":"iPhone 14 Pro 128GB","category":"Phones","brand":"Apple","price":"₦840,000","notes":"Marketplace listing snapshot; condition varies","search":"iphone 14 pro 128gb Jumia Nigeria"},
{"id":"gr025","name":"iPhone 14 Pro Max 256GB","category":"Phones","brand":"Apple","price":"₦1,078,000","notes":"Marketplace listing snapshot; condition varies","search":"iphone 14 pro max 256gb Jumia Nigeria"},
{"id":"gr026","name":"iPhone 15 128GB","category":"Phones","brand":"Apple","price":"₦1,109,130","notes":"Marketplace listing snapshot; seller and condition vary","search":"iphone 15 128gb Jumia Nigeria"},
{"id":"gr027","name":"iPhone 15 Plus 128GB","category":"Phones","brand":"Apple","price":"₦1,180,000","notes":"Estimate; verify listing and condition","search":"iphone 15 plus 128gb Nigeria"},
{"id":"gr028","name":"iPhone 15 Pro 128GB","category":"Phones","brand":"Apple","price":"₦1,040,000","notes":"Marketplace listing snapshot; seller and condition vary","search":"iphone 15 pro 128gb Jumia Nigeria"},
{"id":"gr029","name":"iPhone 15 Pro Max 256GB","category":"Phones","brand":"Apple","price":"₦1,350,000","notes":"Marketplace listing snapshot; seller and condition vary","search":"iphone 15 pro max 256gb Jumia Nigeria"},
{"id":"gr030","name":"iPhone 16 128GB","category":"Phones","brand":"Apple","price":"₦1,150,000","notes":"Estimate; verify listing and condition","search":"iphone 16 128gb Nigeria"},
{"id":"gr031","name":"iPhone 16 Plus 128GB","category":"Phones","brand":"Apple","price":"₦1,290,000","notes":"Marketplace listing snapshot; seller and condition vary","search":"iphone 16 plus 128gb Jumia Nigeria"},
{"id":"gr032","name":"iPhone 16 Pro 256GB","category":"Phones","brand":"Apple","price":"₦1,650,000","notes":"Estimate; verify listing and condition","search":"iphone 16 pro 256gb Nigeria"},
{"id":"gr033","name":"iPhone 16 Pro Max 512GB","category":"Phones","brand":"Apple","price":"₦2,050,000","notes":"Marketplace listing snapshot; seller and condition vary","search":"iphone 16 pro max 512gb Jumia Nigeria"},
{"id":"gr034","name":"iPhone 17 256GB","category":"Phones","brand":"Apple","price":"₦1,648,972","notes":"Marketplace listing snapshot; seller and condition vary","search":"iphone 17 256gb Jumia Nigeria"},
{"id":"gr035","name":"iPhone 17 Pro 256GB","category":"Phones","brand":"Apple","price":"₦2,411,952","notes":"Marketplace listing snapshot; seller and condition vary","search":"iphone 17 pro 256gb Jumia Nigeria"},
{"id":"gr036","name":"iPhone 17 Pro Max 256GB","category":"Phones","brand":"Apple","price":"₦2,280,000","notes":"Marketplace listing snapshot; seller and condition vary","search":"iphone 17 pro max 256gb Jumia Nigeria"},
{"id":"gr037","name":"iPhone 18 series","category":"Phones","brand":"Apple","price":"Price on request","notes":"Model availability and pricing not verified","search":"iPhone 18 Nigeria availability"},
{"id":"gr038","name":"Samsung Galaxy A07 4GB/128GB","category":"Phones","brand":"Samsung","price":"₦199,999","notes":"Marketplace listing snapshot; confirm seller and stock","search":"Samsung Galaxy A07 4GB 128GB Jumia Nigeria"},
{"id":"gr039","name":"Samsung Galaxy A15 6GB/128GB","category":"Phones","brand":"Samsung","price":"₦285,000","notes":"Indicative estimate; confirm current listing","search":"Samsung Galaxy A15 6GB 128GB Nigeria"},
{"id":"gr040","name":"Samsung Galaxy A25 5G 8GB/256GB","category":"Phones","brand":"Samsung","price":"₦420,000","notes":"Indicative estimate; confirm current listing","search":"Samsung Galaxy A25 5G Nigeria"},
{"id":"gr041","name":"Samsung Galaxy A35 5G 8GB/256GB","category":"Phones","brand":"Samsung","price":"₦560,000","notes":"Indicative estimate; confirm current listing","search":"Samsung Galaxy A35 5G Nigeria"},
{"id":"gr042","name":"Samsung Galaxy A55 5G 8GB/256GB","category":"Phones","brand":"Samsung","price":"₦680,000","notes":"Indicative estimate; confirm current listing","search":"Samsung Galaxy A55 5G Nigeria"},
{"id":"gr043","name":"Samsung Galaxy S23 256GB","category":"Phones","brand":"Samsung","price":"₦850,000","notes":"Indicative estimate; verify condition and storage","search":"Samsung Galaxy S23 256GB Nigeria"},
{"id":"gr044","name":"Samsung Galaxy S24 256GB","category":"Phones","brand":"Samsung","price":"₦1,150,000","notes":"Indicative estimate; confirm current listing","search":"Samsung Galaxy S24 256GB Nigeria"},
{"id":"gr045","name":"Samsung Galaxy S24 Ultra 256GB","category":"Phones","brand":"Samsung","price":"₦1,650,000","notes":"Indicative estimate; confirm current listing","search":"Samsung Galaxy S24 Ultra Nigeria"},
{"id":"gr046","name":"Samsung Galaxy S25 Ultra 256GB","category":"Phones","brand":"Samsung","price":"₦2,150,000","notes":"Indicative estimate; confirm current listing","search":"Samsung Galaxy S25 Ultra Nigeria"},
{"id":"gr047","name":"TECNO Spark 30 8GB/128GB","category":"Phones","brand":"TECNO","price":"₦210,000","notes":"Indicative estimate; confirm current listing","search":"TECNO Spark 30 Nigeria"},
{"id":"gr048","name":"TECNO Spark 40 8GB/256GB","category":"Phones","brand":"TECNO","price":"₦260,000","notes":"Indicative estimate; confirm current listing","search":"TECNO Spark 40 Nigeria"},
{"id":"gr049","name":"TECNO Camon 30 8GB/256GB","category":"Phones","brand":"TECNO","price":"₦300,000","notes":"Indicative estimate; confirm current listing","search":"TECNO Camon 30 Nigeria"},
{"id":"gr050","name":"TECNO Camon 40 Pro 8GB/256GB","category":"Phones","brand":"TECNO","price":"₦390,000","notes":"Indicative estimate; confirm current listing","search":"TECNO Camon 40 Pro Nigeria"},
{"id":"gr051","name":"TECNO Pova 6 Pro 12GB/256GB","category":"Phones","brand":"TECNO","price":"₦360,000","notes":"Indicative estimate; confirm current listing","search":"TECNO Pova 6 Pro Nigeria"},
{"id":"gr052","name":"Infinix Smart 9 4GB/128GB","category":"Phones","brand":"Infinix","price":"₦155,000","notes":"Indicative estimate; confirm current listing","search":"Infinix Smart 9 4GB 128GB Nigeria"},
{"id":"gr053","name":"Infinix Hot 50 8GB/128GB","category":"Phones","brand":"Infinix","price":"₦220,000","notes":"Indicative estimate; confirm current listing","search":"Infinix Hot 50 Nigeria"},
{"id":"gr054","name":"Infinix Note 40 8GB/256GB","category":"Phones","brand":"Infinix","price":"₦290,000","notes":"Indicative estimate; confirm current listing","search":"Infinix Note 40 Nigeria"},
{"id":"gr055","name":"Infinix Note 50 Pro 12GB/256GB","category":"Phones","brand":"Infinix","price":"₦390,000","notes":"Indicative estimate; confirm current listing","search":"Infinix Note 50 Pro Nigeria"},
{"id":"gr056","name":"Redmi 15C 4GB/128GB","category":"Phones","brand":"Xiaomi Redmi","price":"₦174,946","notes":"Marketplace listing snapshot; confirm seller and stock","search":"Redmi 15C 4GB 128GB Jumia Nigeria"},
{"id":"gr057","name":"Redmi Note 14 8GB/256GB","category":"Phones","brand":"Xiaomi Redmi","price":"₦300,000","notes":"Indicative estimate; confirm current listing","search":"Redmi Note 14 Nigeria"},
{"id":"gr058","name":"Redmi Note 14 Pro 8GB/256GB","category":"Phones","brand":"Xiaomi Redmi","price":"₦430,000","notes":"Indicative estimate; confirm current listing","search":"Redmi Note 14 Pro Nigeria"},
{"id":"gr059","name":"Google Pixel 7 128GB","category":"Phones","brand":"Google Pixel","price":"₦420,000","notes":"Indicative estimate; verify condition and network support","search":"Google Pixel 7 Nigeria"},
{"id":"gr060","name":"Google Pixel 8 128GB","category":"Phones","brand":"Google Pixel","price":"₦600,000","notes":"Indicative estimate; verify condition and network support","search":"Google Pixel 8 Nigeria"},
{"id":"gr061","name":"itel A50 3GB/64GB","category":"Phones","brand":"itel","price":"₦95,000","notes":"Indicative estimate; confirm current listing","search":"itel A50 Nigeria"},
{"id":"gr062","name":"HP EliteBook 840 G5 Core i5 16GB/256GB","category":"Laptops","brand":"HP","price":"₦490,000","notes":"Marketplace snapshot; likely used/refurbished; verify","search":"HP EliteBook 840 G5 i5 16GB 256GB Jumia Nigeria"},
{"id":"gr063","name":"HP EliteBook 840 G6 Core i5 8GB/256GB","category":"Laptops","brand":"HP","price":"₦420,000","notes":"Marketplace snapshot; condition varies","search":"HP EliteBook 840 G6 i5 8GB 256GB Jumia Nigeria"},
{"id":"gr064","name":"HP EliteBook 840 G7 Core i5 16GB/512GB","category":"Laptops","brand":"HP","price":"₦560,000","notes":"Marketplace snapshot; condition varies","search":"HP EliteBook 840 G7 i5 16GB 512GB Jumia Nigeria"},
{"id":"gr065","name":"HP EliteBook 840 G8 Core i5 8GB/512GB","category":"Laptops","brand":"HP","price":"₦540,000","notes":"Marketplace snapshot; condition varies","search":"HP EliteBook 840 G8 i5 8GB 512GB Jumia Nigeria"},
{"id":"gr066","name":"HP ProBook 450 G8 Core i5 8GB/512GB","category":"Laptops","brand":"HP","price":"₦620,000","notes":"Indicative estimate; confirm configuration and condition","search":"HP ProBook 450 G8 Nigeria"},
{"id":"gr067","name":"HP Pavilion 15 Core i5 8GB/512GB","category":"Laptops","brand":"HP","price":"₦850,000","notes":"Indicative estimate; confirm configuration and condition","search":"HP Pavilion 15 i5 Nigeria"},
{"id":"gr068","name":"HP Victus 15 Core i5 RTX 4050 16GB/512GB","category":"Laptops","brand":"HP","price":"₦1,550,000","notes":"Marketplace snapshot; verify exact GPU and configuration","search":"HP Victus 15 i5 RTX 4050 Jumia Nigeria"},
{"id":"gr069","name":"Dell Latitude 7490 Core i5 16GB/256GB","category":"Laptops","brand":"Dell","price":"₦430,000","notes":"Marketplace snapshot; condition varies","search":"Dell Latitude 7490 i5 16GB 256GB Jumia Nigeria"},
{"id":"gr070","name":"Dell Latitude 7300 Core i5 16GB/256GB","category":"Laptops","brand":"Dell","price":"₦450,000","notes":"Marketplace snapshot; condition varies","search":"Dell Latitude 7300 i5 16GB 256GB Jumia Nigeria"},
{"id":"gr071","name":"Dell Latitude 5420 Core i5 16GB/512GB","category":"Laptops","brand":"Dell","price":"₦680,000","notes":"Indicative estimate; confirm configuration and condition","search":"Dell Latitude 5420 i5 Nigeria"},
{"id":"gr072","name":"Dell XPS 13 Core i7 16GB/512GB","category":"Laptops","brand":"Dell","price":"₦1,200,000","notes":"Indicative estimate; confirm generation and condition","search":"Dell XPS 13 i7 Nigeria"},
{"id":"gr073","name":"Lenovo ThinkPad T480 Core i5 8GB/256GB","category":"Laptops","brand":"Lenovo","price":"₦380,000","notes":"Indicative estimate; condition varies","search":"Lenovo ThinkPad T480 i5 Nigeria"},
{"id":"gr074","name":"Lenovo ThinkPad T14 Gen 2 Core i5 16GB/512GB","category":"Laptops","brand":"Lenovo","price":"₦720,000","notes":"Indicative estimate; confirm generation and condition","search":"Lenovo ThinkPad T14 Gen 2 Nigeria"},
{"id":"gr075","name":"ASUS VivoBook Go 14 N150 8GB/256GB","category":"Laptops","brand":"ASUS","price":"₦477,381","notes":"Marketplace snapshot; verify configuration","search":"ASUS Vivobook Go 14 N150 Jumia Nigeria"},
{"id":"gr076","name":"ASUS TUF Gaming A16 Ryzen 7 RTX 5050","category":"Laptops","brand":"ASUS","price":"₦1,891,600","notes":"Marketplace snapshot; verify exact configuration","search":"ASUS TUF Gaming A16 RTX 5050 Jumia Nigeria"},
{"id":"gr077","name":"Apple MacBook Air M1 8GB/256GB","category":"Laptops","brand":"Apple","price":"₦850,000","notes":"Indicative estimate; verify battery health and condition","search":"MacBook Air M1 8GB 256GB Nigeria"},
{"id":"gr078","name":"Apple MacBook Air M2 8GB/256GB","category":"Laptops","brand":"Apple","price":"₦1,250,000","notes":"Indicative estimate; verify battery health and condition","search":"MacBook Air M2 Nigeria"},
{"id":"gr079","name":"Apple MacBook Pro M3 16GB/512GB","category":"Laptops","brand":"Apple","price":"₦2,800,000","notes":"Indicative estimate; confirm exact model and configuration","search":"MacBook Pro M3 Nigeria"},
{"id":"gr080","name":"Apple iPad 9th Gen 64GB Wi-Fi","category":"Tablets","brand":"Apple","price":"₦350,000","notes":"Indicative estimate; condition varies","search":"iPad 9th generation Nigeria"},
{"id":"gr081","name":"Apple iPad 10th Gen 64GB Wi-Fi","category":"Tablets","brand":"Apple","price":"₦520,000","notes":"Indicative estimate; confirm stock","search":"iPad 10th generation Nigeria"},
{"id":"gr082","name":"Samsung Galaxy Tab A9 64GB","category":"Tablets","brand":"Samsung","price":"₦220,000","notes":"Indicative estimate; confirm stock","search":"Samsung Galaxy Tab A9 Nigeria"},
{"id":"gr083","name":"Redmi Pad SE 128GB","category":"Tablets","brand":"Xiaomi Redmi","price":"₦280,000","notes":"Indicative estimate; confirm stock","search":"Redmi Pad SE Nigeria"},
{"id":"gr084","name":"Apple Watch SE 2nd Gen","category":"Accessories","brand":"Apple","price":"₦420,000","notes":"Indicative estimate; size and condition vary","search":"Apple Watch SE 2 Nigeria"},
{"id":"gr085","name":"Samsung Galaxy Watch 6","category":"Accessories","brand":"Samsung","price":"₦380,000","notes":"Indicative estimate; confirm size and stock","search":"Samsung Galaxy Watch 6 Nigeria"},
{"id":"gr086","name":"AirPods Pro 2nd Gen","category":"Accessories","brand":"Apple","price":"₦260,000","notes":"Indicative estimate; verify authenticity carefully","search":"AirPods Pro 2 Nigeria"},
{"id":"gr087","name":"USB-C 20W fast charger","category":"Accessories","brand":"Accessories","price":"₦12,000","notes":"Price depends on brand and authenticity","search":"USB C 20W charger Nigeria"},
{"id":"gr088","name":"USB-C to Lightning cable","category":"Accessories","brand":"Accessories","price":"₦8,000","notes":"Price depends on brand and authenticity","search":"USB C to Lightning cable Nigeria"},
{"id":"gr089","name":"Power bank 20,000mAh","category":"Accessories","brand":"Accessories","price":"₦25,000","notes":"Price depends on brand and capacity","search":"20000mAh power bank Nigeria"},
{"id":"gr090","name":"Bluetooth speaker","category":"Accessories","brand":"Accessories","price":"₦18,000","notes":"Price depends on brand and model","search":"Bluetooth speaker Nigeria"},
{"id":"gr091","name":"Wireless earbuds","category":"Accessories","brand":"Accessories","price":"₦15,000","notes":"Price depends on brand and model","search":"wireless earbuds Nigeria"},
{"id":"gr092","name":"Phone case (iPhone/Samsung)","category":"Accessories","brand":"Accessories","price":"₦5,000","notes":"Choose exact phone model and style","search":"phone case Nigeria"},
{"id":"gr093","name":"Tempered glass screen protector","category":"Accessories","brand":"Accessories","price":"₦3,000","notes":"Choose exact phone model","search":"tempered glass phone screen protector Nigeria"},
{"id":"gr094","name":"Laptop backpack","category":"Accessories","brand":"Accessories","price":"₦22,000","notes":"Size and design vary","search":"laptop backpack Nigeria"},
{"id":"gr095","name":"USB flash drive 64GB","category":"Accessories","brand":"Accessories","price":"₦8,000","notes":"Brand varies","search":"64GB USB flash drive Nigeria"},
{"id":"gr096","name":"Men's plain premium T-shirt","category":"Clothing","brand":"Fashion","price":"₦8,000","notes":"Sizes S–XXL; colours vary","search":"men plain premium t shirt Nigeria"},
{"id":"gr097","name":"Men's polo shirt","category":"Clothing","brand":"Fashion","price":"₦12,000","notes":"Size and colour vary","search":"men polo shirt Nigeria"},
{"id":"gr098","name":"Men's cargo trousers","category":"Clothing","brand":"Fashion","price":"₦18,000","notes":"Size and colour vary","search":"men cargo trousers Nigeria"},
{"id":"gr099","name":"Men's jeans","category":"Clothing","brand":"Fashion","price":"₦20,000","notes":"Size and fit vary","search":"men jeans Nigeria"},
{"id":"gr100","name":"Men's two-piece casual set","category":"Clothing","brand":"Fashion","price":"₦25,000","notes":"Size and design vary","search":"men two piece casual set Nigeria"},
{"id":"gr101","name":"Women's casual dress","category":"Clothing","brand":"Fashion","price":"₦18,000","notes":"Size and design vary","search":"women casual dress Nigeria"},
{"id":"gr102","name":"Women's jeans","category":"Clothing","brand":"Fashion","price":"₦18,000","notes":"Size and fit vary","search":"women jeans Nigeria"},
{"id":"gr103","name":"Hoodie / sweatshirt","category":"Clothing","brand":"Fashion","price":"₦22,000","notes":"Size and colour vary","search":"hoodie sweatshirt Nigeria"},
{"id":"gr104","name":"Baseball cap","category":"Clothing","brand":"Fashion","price":"₦7,000","notes":"Colour and design vary","search":"baseball cap Nigeria"},
{"id":"gr105","name":"Men's casual sneakers","category":"Shoes","brand":"Footwear","price":"₦10,400","notes":"Marketplace snapshot; style and size vary","search":"men casual sneakers Jumia Nigeria"},
{"id":"gr106","name":"Men's canvas loafers","category":"Shoes","brand":"Footwear","price":"₦7,031","notes":"Marketplace snapshot; style and size vary","search":"men canvas loafers Jumia Nigeria"},
{"id":"gr107","name":"Men's board shoes","category":"Shoes","brand":"Footwear","price":"₦14,709","notes":"Marketplace snapshot; style and size vary","search":"men board shoes Jumia Nigeria"},
{"id":"gr108","name":"Men's boots","category":"Shoes","brand":"Footwear","price":"₦15,844","notes":"Marketplace snapshot; style and size vary","search":"men boots Jumia Nigeria"},
{"id":"gr109","name":"Women's running sneakers","category":"Shoes","brand":"Footwear","price":"₦4,980","notes":"Marketplace snapshot; style and size vary","search":"women running sneakers Jumia Nigeria"},
{"id":"gr110","name":"Women's white sneakers","category":"Shoes","brand":"Footwear","price":"₦12,855","notes":"Marketplace snapshot; style and size vary","search":"women white sneakers Jumia Nigeria"},
{"id":"gr111","name":"Football boots","category":"Shoes","brand":"Footwear","price":"₦12,368","notes":"Marketplace snapshot; brand and size vary","search":"football boots Jumia Nigeria"},
{"id":"gr112","name":"Slides / slippers","category":"Shoes","brand":"Footwear","price":"₦6,000","notes":"Size and design vary","search":"slides slippers Nigeria"},
{"id":"gr113","name":"PlayStation 5 Slim","category":"Gaming","brand":"Sony","price":"₦950,000","notes":"Indicative estimate; edition and bundle vary","search":"PlayStation 5 Slim Nigeria"},
{"id":"gr114","name":"PlayStation 4 Slim","category":"Gaming","brand":"Sony","price":"₦380,000","notes":"Indicative estimate; used/new condition varies","search":"PlayStation 4 Slim Nigeria"},
{"id":"gr115","name":"Xbox Series S","category":"Gaming","brand":"Microsoft","price":"₦650,000","notes":"Indicative estimate; bundle and condition vary","search":"Xbox Series S Nigeria"},
{"id":"gr116","name":"Gaming controller","category":"Gaming","brand":"Gaming","price":"₦45,000","notes":"Console compatibility varies","search":"gaming controller Nigeria"},
{"id":"gr117","name":"27-inch Full HD monitor","category":"Computers & Office","brand":"Electronics","price":"₦180,000","notes":"Brand and specifications vary","search":"27 inch full HD monitor Nigeria"},
{"id":"gr118","name":"Wireless keyboard and mouse combo","category":"Computers & Office","brand":"Accessories","price":"₦25,000","notes":"Brand and model vary","search":"wireless keyboard mouse combo Nigeria"},
{"id":"gr119","name":"Wi-Fi router","category":"Computers & Office","brand":"Networking","price":"₦35,000","notes":"4G/5G and carrier support vary","search":"4G wifi router Nigeria"},
{"id":"gr120","name":"Portable SSD 1TB","category":"Computers & Office","brand":"Storage","price":"₦120,000","notes":"Brand and speed vary","search":"portable SSD 1TB Nigeria"},
{"id":"gr121","name":"Digital camera","category":"Cameras","brand":"Electronics","price":"Price on request","notes":"Model and lens determine price","search":"digital camera Nigeria"},
{"id":"gr122","name":"Smart TV 43-inch","category":"TV & Audio","brand":"Electronics","price":"₦420,000","notes":"Brand and resolution vary","search":"43 inch smart TV Nigeria"},
{"id":"gr123","name":"Bluetooth headphones","category":"Accessories","brand":"Audio","price":"₦28,000","notes":"Brand and model vary","search":"Bluetooth headphones Nigeria"}
];

const WHATSAPP_NUMBER = "2348108521685";
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({
  "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
}[c]));

const wa = p => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" +
  encodeURIComponent(`Hello GRANDSON ROYALE, please confirm availability and final price for: ${p.name}. Catalogue price: ${p.price}. Please send actual photos, condition, specifications, warranty and delivery details.`);

const listing = p => "https://www.jumia.com.ng/catalog/?q=" +
  encodeURIComponent(p.search || p.name);

const icon = c => ({
  "Phones":"📱",
  "Laptops":"💻",
  "Tablets":"▣",
  "Accessories":"🎧",
  "Clothing":"👕",
  "Shoes":"👟",
  "Gaming":"🎮",
  "Computers & Office":"🖥️",
  "Cameras":"📷",
  "TV & Audio":"📺"
}[c] || "✦");

function install() {
  let root = document.getElementById("gr-catalogue");

  if (!root) {
    root = document.createElement("section");
    root.id = "gr-catalogue";
    root.className = "gr-catalogue";

    const host =
      document.getElementById("products") ||
      document.getElementById("shop") ||
      document.querySelector("[data-products]") ||
      document.querySelector("main");

    (host || document.body).appendChild(root);
  }

  if (!document.getElementById("gr-catalogue-style")) {
    const st = document.createElement("style");
    st.id = "gr-catalogue-style";
    st.textContent = `
#gr-catalogue{color:#f8f4e8;background:#050505;padding:clamp(18px,3vw,42px);font-family:inherit}
#gr-catalogue *{box-sizing:border-box}
#gr-catalogue .gr-head,#gr-catalogue .gr-controls,#gr-catalogue .gr-count,#gr-catalogue .gr-grid,#gr-catalogue .gr-empty,#gr-catalogue .gr-disclaimer{max-width:1200px;margin-left:auto;margin-right:auto}
#gr-catalogue .gr-head{margin-bottom:22px}
#gr-catalogue .gr-kicker{color:#d7b45a;text-transform:uppercase;letter-spacing:.2em;font-size:.72rem;font-weight:700}
#gr-catalogue h2{font-size:clamp(1.7rem,4vw,2.5rem);margin:8px 0;color:#f3d37b}
#gr-catalogue .gr-sub{color:#bcb8ae;max-width:760px;line-height:1.6}
#gr-catalogue .gr-controls{display:grid;gap:12px;margin-top:20px;margin-bottom:20px}
#gr-catalogue .gr-search{width:100%;padding:13px 15px;border:1px solid #6b5523;border-radius:10px;background:#101010;color:#fff;font:inherit}
#gr-catalogue .gr-filters{display:flex;gap:8px;overflow-x:auto;padding:2px 0 8px}
#gr-catalogue .gr-filter{white-space:nowrap;border:1px solid #5a4822;border-radius:999px;padding:9px 13px;background:#111;color:#ddd;cursor:pointer;font:inherit;font-size:.86rem}
#gr-catalogue .gr-filter[aria-pressed=true]{background:#d5b45a;color:#080808;border-color:#d5b45a;font-weight:700}
#gr-catalogue .gr-count{margin-bottom:12px;color:#bdb7a7;font-size:.85rem}
#gr-catalogue .gr-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:14px}
#gr-catalogue .gr-card{border:1px solid #302817;border-radius:14px;overflow:hidden;background:linear-gradient(150deg,#17140e,#090909 70%);display:flex;flex-direction:column;min-width:0}
#gr-catalogue .gr-art{height:145px;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#292214,#0c0c0c 70%);font-size:3.3rem;border-bottom:1px solid #342a17}
#gr-catalogue .gr-card-body{padding:14px;display:flex;flex-direction:column;gap:8px;flex:1}
#gr-catalogue .gr-tag{font-size:.69rem;letter-spacing:.1em;text-transform:uppercase;color:#d7b45a}
#gr-catalogue .gr-name{font-size:1rem;line-height:1.4;font-weight:700;color:#fff;margin:0}
#gr-catalogue .gr-brand{font-size:.8rem;color:#c5c0b4}
#gr-catalogue .gr-price{font-size:1.12rem;color:#f2d27b;font-weight:800}
#gr-catalogue .gr-note{font-size:.78rem;line-height:1.45;color:#aaa69c;flex:1}
#gr-catalogue .gr-actions{display:grid;grid-template-columns:1fr;gap:7px;margin-top:4px}
#gr-catalogue .gr-btn{display:block;text-align:center;text-decoration:none;padding:10px 9px;border-radius:8px;font-size:.82rem;font-weight:700}
#gr-catalogue .gr-btn-primary{background:#d7b45a;color:#090909}
#gr-catalogue .gr-btn-secondary{border:1px solid #5e4b24;color:#e8d39b;background:#100e0a}
#gr-catalogue .gr-empty{margin-top:20px;color:#d2c7a8}
#gr-catalogue .gr-disclaimer{margin-top:24px;border-top:1px solid #302817;padding-top:16px;color:#aaa69c;font-size:.8rem;line-height:1.6}
@media(min-width:700px){#gr-catalogue .gr-controls{grid-template-columns:minmax(220px,320px) 1fr;align-items:center}#gr-catalogue .gr-actions{grid-template-columns:1fr 1fr}}
`;
    document.head.appendChild(st);
  }

  const cats = ["All", ...new Set(PRODUCTS.map(p => p.category))];
  let active = "All";
  let query = "";

  root.innerHTML = `
    <div class="gr-head">
      <div class="gr-kicker">GRANDSON ROYALE • THE COLLECTION</div>
      <h2>Shop Phones, Tech & Lifestyle</h2>
      <p class="gr-sub">Explore phones, laptops, fashion, footwear, accessories and more. Ask us for actual item photos, available colours, condition, warranty and delivery before payment.</p>
    </div>
    <div class="gr-controls">
      <input class="gr-search" type="search" aria-label="Search products"
        placeholder="Search iPhone, Samsung, HP, shoes, accessories…" id="gr-search">
      <div class="gr-filters" role="group" aria-label="Product categories" id="gr-filters"></div>
    </div>
    <div class="gr-count" id="gr-count"></div>
    <div class="gr-grid" id="gr-grid"></div>
    <p class="gr-empty" id="gr-empty" hidden>No matching products. Try another search or category.</p>
    <div class="gr-disclaimer">
      <strong>Price & authenticity notice:</strong> Prices are indicative catalogue references and may be estimates. Marketplace prices can change and listings may be used, refurbished, or new. Stock and condition are not guaranteed. Request current photos, IMEI/serial verification where applicable, battery health, exact specifications, warranty and final price before payment. iPhone 18 availability and pricing are not verified here. The icons are category illustrations, not photos of the exact items.
    </div>
  `;

  const fw = root.querySelector("#gr-filters");

  cats.forEach(cat => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "gr-filter";
    b.textContent = cat;
    b.setAttribute("aria-pressed", String(cat === active));

    b.addEventListener("click", () => {
      active = cat;
      [...fw.children].forEach(x =>
        x.setAttribute("aria-pressed", String(x.textContent === cat))
      );
      render();
    });

    fw.appendChild(b);
  });

  root.querySelector("#gr-search").addEventListener("input", e => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  function render() {
    const found = PRODUCTS.filter(p =>
      (active === "All" || p.category === active) &&
      (!query || `${p.name} ${p.brand} ${p.category} ${p.notes}`.toLowerCase().includes(query))
    );

    root.querySelector("#gr-count").textContent =
      `${found.length} products shown • ${PRODUCTS.length} catalogue entries`;

    root.querySelector("#gr-empty").hidden = found.length > 0;

    root.querySelector("#gr-grid").innerHTML = found.map(p => `
      <article class="gr-card">
        <div class="gr-art" aria-hidden="true">${icon(p.category)}</div>
        <div class="gr-card-body">
          <div class="gr-tag">${esc(p.category)}</div>
          <h3 class="gr-name">${esc(p.name)}</h3>
          <div class="gr-brand">${esc(p.brand)}</div>
          <div class="gr-price">${esc(p.price || "Price on request")}</div>
          <div class="gr-note">${esc(p.notes)}</div>
          <div class="gr-actions">
            <a class="gr-btn gr-btn-primary" href="${esc(wa(p))}" target="_blank" rel="noopener noreferrer">Check price / order</a>
            <a class="gr-btn gr-btn-secondary" href="${esc(listing(p))}" target="_blank" rel="noopener noreferrer">View marketplace listings</a>
          </div>
        </div>
      </article>
    `).join("");
  }

  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", install, { once: true });
} else {
  install();
}
})();