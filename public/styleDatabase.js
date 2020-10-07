const data = [
  {
    style: "Odessa Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Odessa_Navy_002-edit.jpg?v=1591724067",
    color: "blue",
  },
  {
    style: "Juniper Top",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2018/08/24/5b7fcc17bb7615bb18783f39/m_5b7fcca547736858b4565bfe.jpg",
    color: "white",
  },
  {
    style: "Cornflower Cardigan",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/06/25/5d12230aa20dfc74d67ea013/m_5d12243b19c1577ff8d1b1f2.jpg",
    color: "brown",
  },
  {
    style: "Mulberry Sweater",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/02/11/5c623501800deecc40deca8d/s_5c6235069fe486601b90aa26.jpeg",
    color: "cream",
  },
  {
    style: "Marlow Sweater",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Marlow_Oat_027.jpg?v=1600894134",
    color: "cream",
  },
  {
    style: "Romy Tee",
    photo:
      "https://i.pinimg.com/originals/e7/8e/7a/e78e7af7cf1868069c0c2b32c1315a38.jpg",
    color: "yellow",
  },
  {
    style: "Orchard Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/08/28/5f4942ba275e555ac30faa0a/m_5f4942cf2a1eff9d9413b627.jpg",
    color: "white",
  },
  {
    style: "Tarragon Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Terragon_Orchard-Botanical_010.jpg?v=1585068303",
    color: "yellow",
  },
  {
    style: "Minnow Pants",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/01/14/5e1e18b0fe19c7bb81bbdf9c/m_5e1e18c1969d1fd9e49f5563.jpg",
    color: "brown",
  },
  {
    style: "Marais Top",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Marais_Country-Rose_083.jpg?v=1580424551",
    color: "brown",
  },
  {
    style: "Cezanne Top",
    photo:
      "https://cache.net-a-porter.com/images/products/1230433/1230433_fr_2000_q80.jpg",
    color: "multi",
  },
  {
    style: "Melody Pant",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/New-Melody-Pant_Yellow_001.jpg?v=1573692238",
    color: "brown",
  },
  {
    style: "Martinique Nightgown",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/08/31/5d6b0274d948a178d91ca5d6/m_5d6b02b2abe1ce6b8b150961.jpg",
    color: "white",
  },
  {
    style: "Coast Sandals",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/SPV9036_1024x1024.jpg?v=1583347854",
    color: "black",
  },
  {
    style: "Slate Nightgown",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Slate-Powder_063.jpg?v=1600540797",
    color: "white",
  },
  {
    style: "Sol Dress",
    photo: "https://s2.r29static.com/bin/entry/45d/x,85/1944611/image.webp",
    color: "blue",
  },
  {
    style: "Laurel Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Laurel-Dress_Cherry_044_3581aae1-6079-454d-8ddb-b21d711f1e1e.jpg?v=1580087639",
    color: "red",
  },
  {
    style: "O'Keefe Top",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/07/01/5d1ad4b608d2c23d9f08f21c/m_5d205f0bbbf076b0b9630d92.jpg",
    color: "green",
  },
  {
    style: "Bel Top",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Bell-Top_Lily-Of-The-Valley_043_1024x1024.jpg?v=1580153457",
    color: "yellow",
  },
  {
    style: "Bird Top",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Bird_Ciel_058.jpg?v=1585068468",
    color: "blue",
  },
  {
    style: "Antoinette Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/07/22/5f1886af1629589427585287/m_5f1886b42a1eff51218af20a.jpeg",
    color: "pink",
  },
  {
    style: "Thoreau Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Thoreau_Navy_007.jpg?v=1598037009",
    color: "blue",
  },
  {
    style: "Azalea Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/07/15/5d2d19c9969d1fdd9b1cd209/m_5d2d19ee969d1f33761cd387.jpg",
    color: "red",
  },
  {
    style: "Grasse Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/09/13/5f5e766818013660b1cbfa2f/m_5f5f8a0aa4de41face530714.jpg",
    color: "cream",
  },
  {
    style: "Pomme Sweater",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/SPV_0956-look-06.jpg?v=1590695197",
    color: "cream",
  },
  {
    style: "Selene Tee",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Doen-Spring3-00976.jpg?v=1585869230",
    color: "yellow",
  },
  {
    style: "Maritime Jean",
    photo:
      "https://fashionista.com/.image/t_share/MTU3NTYyNjE2ODYzMDA4NjUx/doen-maritime-jean-1.jpg",
    color: "blue",
  },
  {
    style: "Carnation Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/07/15/5f0f0b5befd0e4cfeda611e3/m_5f0f0b71941f17d81ef14343.jpg",
    color: "white",
  },
  {
    style: "Clementine Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/P5272354.jpg?v=1598029125",
    color: "red",
  },
  {
    style: "Roan Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/03/30/5e81f43309d760fdf499939d/m_5e81f44a09d760ca5a9993f3.jpg",
    color: "green",
  },
  {
    style: "Minetta Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Minetta_Black_005.jpg?v=1583431064",
    color: "black",
  },
  {
    style: "Garnet Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/10/20/5dac8479689ebc4a2396b242/m_5dac84b6fe19c7e65838b460.jpg",
    color: "black",
  },
  {
    style: "Fiore Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/08/27/5f47bfbf12d880df863c8dd9/m_5f47c02ee107bb2057e9bd03.jpg",
    color: "pink",
  },
  {
    style: "Joan Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Joan-Dress_006.jpg?v=1594168067",
    color: "brown",
  },
  {
    style: "Dauphine Top",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Dauphine_Green-Garden-Bloom_105.jpg?v=1580236553",
    color: "green",
  },
  {
    style: "Yana Top",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Yana_Yellow-Cottage-Garden_075.jpg?v=1583441105",
    color: "yellow",
  },
  {
    style: "Acton Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/200904_DOEN_-Shot18_57576.jpg?v=1600880114",
    color: "yellow",
  },
  {
    style: "Dree Dress",
    photo:
      "https://i.pinimg.com/originals/73/fe/fd/73fefd27d04d72613b3d135b74f42494.png",
    color: "multi",
  },
  {
    style: "Arabella Top",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Arabella_White_013.jpg?v=1594218973",
    color: "white",
  },
  {
    style: "Rimbaud Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Rimbaud_Mustard_003.jpg?v=1574101942",
    color: "brown",
  },
  {
    style: "Didion Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/05/26/5ceb00372f4831d3378d2305/m_5ceb005f8d653dcf8c47e71f.jpg",
    color: "white",
  },
  {
    style: "Augusta Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2018/12/01/5c02ca432beb79f596e96bf0/m_5c02ca622beb79e8f4e96cb2.jpg",
    color: "multi",
  },
  {
    style: "Verona Cardigan",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Verona_Oat_009_1024x1024.jpg?v=1600905577",
    color: "cream",
  },
  {
    style: "Rosetta Dress",
    photo:
      "https://i.pinimg.com/originals/74/d8/bd/74d8bda54df017b542931b8e6bb021b0.jpg",
    color: "red",
  },
  {
    style: "Nima Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/09/14/5f5fe3cdae766fde7ad85c3e/m_5f5fe3f4180136769a51672a.jpg",
    color: "white",
  },
  {
    style: "Ruby Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/06/09/5cfd4bd8b3e91797af7f9112/m_5cfd4c94b3e91768d67f9694.jpg",
    color: "green",
  },
  {
    style: "Persimmon Sweater",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/06/19/5d0a811a9ed36df7a29801ba/m_5d0a81301153ba5d1de1d0c9.jpg",
    color: "cream",
  },
  {
    style: "Assis Sweater",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/07/22/5d360c1e2c6fc6ac468f663d/m_5d360c217fc9746327e8ae59.jpeg",
    color: "cream",
  },
  {
    style: "Rhone Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/V56A6382.jpg?v=1598036150",
    color: "red",
  },
  {
    style: "Ceres Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Ceres_Papillon-Floral_032.jpg?v=1591048836",
    color: "yellow",
  },
  {
    style: "Calla Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/09/13/5f5e994d7ec30ca8b120c8a5/m_5f5e995f9e15592d6d1cdd25.jpg",
    color: "white",
  },
  {
    style: "Narcissa Top",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Narcissa_Orchard-Botanical_058.jpg?v=1585068045",
    color: "yellow",
  },
  {
    style: "Frances Top",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Frances_Black_064.jpg?v=1583431116",
    color: "black",
  },
  {
    style: "Parker Jacket",
    photo:
      "https://images.squarespace-cdn.com/content/v1/56b4477e86db4303b326c573/1589842187134-OT2YKCJAZZLDS6SKR1PD/ke17ZwdGBToddI8pDm48kJBCk3_A-jGdx1vqwknaPW57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYZfK65xWvQ39QC0kygEcPEvBZa-hBbH-ppFVX01Fv7-Z4SODUbdTU85jG6Jwp5K1Q/Doen+Parker+Jacket.jpg?format=original",
    color: "blue",
  },
  {
    style: "Adobe Dress",
    photo:
      "https://i.pinimg.com/originals/47/24/2f/47242f3db56ad6a32d038450819de8cc.jpg",
    color: "white",
  },
  {
    style: "Dune Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Dune-Dress_Navy_010.jpg?v=1586214482",
    color: "blue",
  },
  {
    style: "Buttercup Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/09/28/5d8fe889c953d82411daad4a/m_5d8feb0ed400088c4d254f30.jpg",
    color: "red",
  },
  {
    style: "Prairie Top",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/03/09/5c83ff6f9539f7365118e24d/m_5c84001ef63eea83b40dcd90.jpg",
    color: "green",
  },
  {
    style: "Adra Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/09/14/5f60382d0bee62d73a47120a/m_5f60382f81a36cf0a7ee5d1d.jpeg",
    color: "yellow",
  },
  {
    style: "Rue Dress",
    photo:
      "https://static.pxlecdn.com/photos/336471917/medium/a3fb573d46efff2ebd46.jpg",
    color: "black",
  },
  {
    style: "Market Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2018/11/17/5bf054a334a4efe46dd6a0cf/m_5bf05614819e90accdcb1844.jpg",
    color: "white",
  },
  {
    style: "Eve Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/00030031_5554079e-7661-4a99-83ac-b6e5c93e8c54.jpg?v=1599105581",
    color: "brown",
  },
  {
    style: "Eve Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/00030031_5554079e-7661-4a99-83ac-b6e5c93e8c54.jpg?v=1599105581",
    color: "brown",
  },
  {
    style: "Raven Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/08/02/5f2726bf43895fc322a71531/m_5f2726cf60fdede8d17f6159.jpg",
    color: "multi",
  },
  {
    style: "Jasmine Dress",
    photo:
      "https://d2h1pu99sxkfvn.cloudfront.net/b0/1950296/498410182_tC5RasEDg4/P7.jpg",
    color: "red",
  },
  {
    style: "Hardy Top",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/11/28/5ddf9a9790feb6099c274c40/m_5ddf9b10248f7a4a97e80303.jpg",
    color: "black",
  },
  {
    style: "Hawthorne Dress",
    photo:
      "https://i.pinimg.com/originals/fd/0b/fb/fd0bfb0a38cee0bba3e3c3649b8eadf0.jpg",
    color: "black",
  },
  {
    style: "Assam Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/10/30/5db9be13d40008d6d3a18728/m_5db9be24afade8c61a9e1646.jpg",
    color: "red",
  },
  {
    style: "Lenor Top",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Doen-Spring3-Lenor-Navy-00109.jpg?v=1591945289",
    color: "blue",
  },
  {
    style: "Olive Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/01/03/5e0fb89e86a604efd5152107/m_5e0fb8a521cd0a738baf94ec.jpeg",
    color: "green",
  },
  {
    style: "Mary Jane Slipper",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/DOEN-SUM20-2-Shoes-0024.jpg?v=1599103384",
    color: "black",
  },
  {
    style: "Saffron Dress",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/09/13/5f5e4d2443895f33e5ee57a4/m_5f5e4d373bad6de566f63369.jpg",
    color: "cream",
  },
  {
    style: "Mandarin Dress",
    photo:
      "https://cdn.shopify.com/s/files/1/0950/9820/products/Mandarin_Navy_029-edit_93bb757a-34cc-4a98-86bf-5f78dd320f18.jpg?v=1593568259",
    color: "blue",
  },
  {
    style: "Talia Sweater",
    photo:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/08/08/5d4ce2678d653d8c659979ce/m_5d4ce2d808d2c20d49a729cc.jpg",
    color: "cream",
  },
];

export default data;
