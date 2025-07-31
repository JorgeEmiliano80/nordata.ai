-- Actualizar las rutas de las imágenes destacadas de los posts del blog para usar las imágenes disponibles
UPDATE blog_posts 
SET featured_image = '/src/assets/blog-ai-future-business.jpg'
WHERE category = 'Inteligência Artificial';

UPDATE blog_posts 
SET featured_image = '/src/assets/blog-data-analytics.jpg'
WHERE category = 'Análise de Dados';

UPDATE blog_posts 
SET featured_image = '/src/assets/blog-ml-production.jpg'
WHERE category = 'Machine Learning';

UPDATE blog_posts 
SET featured_image = '/src/assets/blog-digital-transformation.jpg'
WHERE category = 'Transformação Digital';

UPDATE blog_posts 
SET featured_image = '/src/assets/blog-nocode-ai.jpg'
WHERE category = 'No-Code AI';