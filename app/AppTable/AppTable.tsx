"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductTable } from "../Products/ProductTable";

import { columns } from "../Products/columns";
import ProductDialog from "./ProductDialog/ProductDialog";
import { useProductStore } from "../useProductStore";
import { useEffect } from "react";

export default function AppTable() {
  const { allProducts, loadProducts } = useProductStore();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Card className="mt-10 flex flex-col shadow-none poppins border-none">
      <CardHeader className="flex justify-between p-2">
        <div className="flex justify-between items-center">
          <div className="">
            <CardTitle className="font-semibold text-[23px]">
              Products
            </CardTitle>
            <p className="text-sm text-slate-600">
              {allProducts.length} products
            </p>
          </div>
          <ProductDialog />
        </div>
      </CardHeader>

      <CardContent className="px-2">
        {/* Add padding here to match CardHeader */}
        <ProductTable data={allProducts} columns={columns} />
      </CardContent>
    </Card>
  );
}
