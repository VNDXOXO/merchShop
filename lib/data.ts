import { createClient } from './utils/supabase/server';
import { cookies } from 'next/headers';

export async function getProducts() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: products, error } = await supabase
    .from('products_with_quantity')
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
    price: p.base_price,
    description: p.description,
    image: p.product_image,
    tag: p.tag,
    quantity:p.total_quantity,
    details: [] // Fallback since details aren't in the DB currently
  }));
}

export async function getProductById(id: number) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: product, error } = await supabase
    .from('products')
    .select(`*,product_variants (*)`)
    .eq('id', id)
    .single();

  if (error || !product) {
    console.error('Error fetching product:', error);
    return null;
  }

  console.log('--- DEBUG: Raw Products from Supabase ---');
  console.log(JSON.stringify(product, null, 2));
  console.log('-----------------------------------------');

  return {
    id: product.id,
    name: product.product_name,
    price: product.base_price,
    description: product.description,
    image: product.product_image,
    tag: product.tag,
    variants: product.product_variants.map((variant: any) => ({
      id: variant.id,
      color: variant.color,
      size: variant.size,
      quantity: variant.quantity,
      price: variant.price
    })),
    details: []
  };
}
