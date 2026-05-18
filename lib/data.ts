import { createClient } from './utils/supabase/server';
import { cookies } from 'next/headers';

export async function getProducts() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: products, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  console.log('--- DEBUG: Raw Products from Supabase ---');
  console.log(JSON.stringify(products, null, 2));
  console.log('-----------------------------------------');

  return products.map((p: any) => ({
    id: p.id,
    name: p.product_name,
    price: p.price,
    description: p.description,
    image: p.product_image,
    tag: p.tag,
    details: [] // Fallback since details aren't in the DB currently
  }));
}

export async function getProductById(id: number) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !product) {
    console.error('Error fetching product:', error);
    return null;
  }

  return {
    id: product.id,
    name: product.product_name,
    price: product.price,
    description: product.description,
    image: product.product_image,
    tag: product.tag,
    details: []
  };
}
