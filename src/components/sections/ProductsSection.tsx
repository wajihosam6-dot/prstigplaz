"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/data";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/utils";
import ProductSVG from "@/components/ui/ProductSVG";

export default function ProductsSection() {
  const featured = PRODUCTS.slice(0, 4);
  const row2 = PRODUCTS.slice(4, 8);

  return (
    <section
      id="products"
      className="relative py-[var(--section-padding)]"
      style={{ background: "var(--prestige-black)" }}
    >
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16"
        >
          <motion.h2
            variants={fadeUpVariants}
            custom={0}
            className="text-display-lg text-prestige-white"
          >
            Featured
            <br />
            <em className="italic text-gold-light">Pieces</em>
          </motion.h2>
          <motion.div variants={fadeUpVariants} custom={0.15}>
            <button className="btn-luxury-ghost">Full Catalogue</button>
          </motion.div>
        </motion.div>

        {/* Row 1 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="gold-line-h mb-16 opacity-15" />

        {/* Row 2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {row2.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof PRODUCTS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      {/* Visual */}
      <div
        className="relative overflow-hidden mb-5"
        style={{
          height: "clamp(240px,26vw,360px)",
          background: "linear-gradient(145deg, var(--prestige-graphite), var(--prestige-dark))",
        }}
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 z-10 label-sm bg-gold text-prestige-black px-3 py-1">
            {product.badge}
          </div>
        )}

        {/* Product illustration */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ transform: hovered ? "scale(1.05) translateY(-4px)" : "scale(1)" }}
        >
          <ProductSVG id={product.id} />
        </div>

        {/* Interactive spotlight glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(201,169,110,0.14) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Hover CTA */}
        <div
          className="absolute bottom-0 left-0 right-0 label-md bg-gold text-prestige-black
                     text-center py-3 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ transform: hovered ? "translateY(0)" : "translateY(100%)" }}
        >
          Add to Wishlist
        </div>
      </div>

      {/* Info */}
      <div className="label-sm text-gold mb-2">{product.category}</div>
      <h3
        className="font-serif text-[1.25rem] font-light text-prestige-white mb-1 leading-tight
                   transition-colors duration-300 group-hover:text-gold-light"
      >
        {product.name}
      </h3>
      <p className="text-[0.72rem] text-prestige-warm/55 mb-3 leading-relaxed">
        {product.material}
      </p>
      <div className="font-serif text-[1.05rem] text-gold-light font-light">
        {product.price}
      </div>
    </motion.div>
  );
}
