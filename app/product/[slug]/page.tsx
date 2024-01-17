import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
    _id, images, price, name, description, 'slug': slug.current, 'category': category->name, price_id
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data: fullProduct = await getData(params.slug);

  if (!data) return;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.category}
              </span>
              <h2 className="font-semibold text-2xl text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="mb-4 flex items-center gap-3 md:mb-6">
              <Button className="rounded-full flex items-center gap-x-2">
                <Star size={14} />
                <span>4.5</span>
              </Button>

              <span className="text-gray-500 text-sm">Reviews(148)</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="line-through font-semibold text-gray-500 text-sm">
                  ${data.price * 1.5}
                </span>
                <span className="text-xl font-bold text-gray-800">
                  ${data.price}
                </span>
              </div>
              <span className="text-gray-500 text-sm">
                VAT and shipping inclusive!
              </span>
            </div>

            <div className="mb-4 flex items-center gap-2 text-gray-500 text-sm">
              <Truck />
              <span>2-5 Days Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
            </div>

            <p className="tracking-wide text-base text-gray-500 mt-4">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
