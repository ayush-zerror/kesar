import React, { useState } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { categories } from "@/helpers/productData";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  // --- Filter Logic ---
  const filtered = categories
    .map((cat) => {
      const q = query.toLowerCase();

      // match category name
      const categoryMatch = cat.category.toLowerCase().includes(q);

      // match product name
      const matchedProducts = cat.products.filter((p) =>
        p.name.toLowerCase().includes(q)
      );

      // If category matches → return entire category
      if (categoryMatch) {
        return {
          category: cat.category,
          products: cat.products,
        };
      }

      // If no category match but some products match → return filtered ones
      if (matchedProducts.length > 0) {
        return {
          category: cat.category,
          products: matchedProducts,
        };
      }

      return null;
    })
    .filter(Boolean);

  const hasResults = filtered.length > 0;

  return (
    <div
      className={`input-container ${query ? "open" : ""} ${
        query && !hasResults ? "no-data" : ""
      }`}
    >
      <BiSearch />

      {/* Input */}
      <input
        type="text"
        placeholder="Search Products here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Dropdown */}
      {query && (
        <div className="search-container-dropdown" data-lenis-prevent>
          <div className="search-dropdown-wrapper">
            {/* Results */}
            {hasResults ? (
              filtered.map((cat) => (
                <div className="category_box" key={cat.category}>
                  <p>{cat.category.toUpperCase()}</p>
                  <ul>
                    {cat.products.map((product) => (
                      <li key={product.slug}>
                        <Link href={`/products/${product.slug}`}  onClick={() => setQuery("")}>
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="no-data-text">No data found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
