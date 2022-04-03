BEGIN;

INSERT INTO products (name, img, category, price, description) VALUES 
  ('omen', 'https://www.thoughtco.com/thmb/NRuMaaVBhsrz3AyDBweiPAZpYfw=/1500x844/smart/filters:no_upscale()/GettyImages-909076272-5c48c8c146e0fb0001891c02.jpg', 'laptop', 1200, 'laptop omen beautiful and nice')
  ,('hp', 'https://in-media.apjonlinecdn.com/catalog/product/c/0/c07145111.png', 'laptop', 1000, 'laptop hp beautiful and nice')
  ,('iphone', 'https://me.kaspersky.com/content/ar-ae/images/repository/isc/2019-images/holding-iphone-3.jpg', 'phone', 800, 'iphone beautiful and nice')
  ,('tv', 'https://images.samsung.com/is/image/samsung/ps-fhd-t5300-ue40t5300auxmi-frontblack-257177861?$720_576_PNG$', 'TV', 500, 'tv beautiful and nice');

COMMIT;