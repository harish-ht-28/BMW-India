import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { bmwModels, categories, type Category, type BMWModel } from "@/data/bmwModels";
import StarRating from "./StarRating";
import CarDetailDrawer from "./CarDetailDrawer";

const PAGE_SIZE_OPTIONS = [15, 20, 30, 50];

const CarCatalogue = () => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<Category>("All");
  const [fuelFilter, setFuelFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [selectedCar, setSelectedCar] = useState<BMWModel | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const fuelTypes = ["All", "Petrol", "Diesel", "Electric", "Plug-in Hybrid"];

  const filteredModels = useMemo(() => {
    return bmwModels.filter((model) => {
      const matchesSearch =
        model.name.toLowerCase().includes(search.toLowerCase()) ||
        model.series.toLowerCase().includes(search.toLowerCase()) ||
        model.engine.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All" || model.category === categoryFilter;
      const matchesFuel = fuelFilter === "All" || model.fuelType === fuelFilter;
      return matchesSearch && matchesCategory && matchesFuel;
    });
  }, [search, categoryFilter, fuelFilter]);

  const totalPages = Math.ceil(filteredModels.length / pageSize);
  const paginatedModels = filteredModels.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleRowClick = (car: BMWModel) => {
    setSelectedCar(car);
    setDrawerOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  // Reset page when filters change
  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: Category) => {
    setCategoryFilter(cat);
    setCurrentPage(1);
  };

  const handleFuelChange = (fuel: string) => {
    setFuelFilter(fuel);
    setCurrentPage(1);
  };

  return (
    <section id="catalogue" className="py-24 bg-bmw-dark">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Full Catalogue
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            All BMW Models
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Browse our complete lineup. Click any model for detailed specifications.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by model, series, or engine..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-lg pl-11 pr-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all ${
                  categoryFilter === cat
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Fuel Filter */}
          <div className="flex items-center gap-3 flex-wrap">
            <SlidersHorizontal size={14} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-medium">Fuel:</span>
            {fuelTypes.map((fuel) => (
              <button
                key={fuel}
                onClick={() => handleFuelChange(fuel)}
                className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-all ${
                  fuelFilter === fuel
                    ? "bg-primary/20 text-primary border border-primary/40"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {fuel}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-card border border-border rounded-lg overflow-hidden shadow-card"
        >
          {paginatedModels.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Model
                    </th>
                    <th className="text-left px-4 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Category
                    </th>
                    <th className="text-left px-4 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="text-left px-4 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Horsepower
                    </th>
                    <th className="text-left px-4 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Acceleration
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedModels.map((model, index) => (
                    <tr
                      key={model.id}
                      onClick={() => handleRowClick(model)}
                      className="border-b border-border last:border-0 hover:bg-secondary/50 cursor-pointer transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="max-w-[200px]">
                          <p className="text-foreground font-semibold text-sm truncate group-hover:text-primary transition-colors">
                            {model.name}
                          </p>
                          <p className="text-muted-foreground text-xs truncate">{model.engine}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-sm bg-secondary text-muted-foreground">
                          {model.category}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <StarRating rating={model.rating} />
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-foreground text-sm font-medium">{model.horsepower} hp</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-foreground text-sm">{model.acceleration}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-foreground font-semibold text-sm">{model.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-6">
              <AlertCircle size={48} className="text-muted-foreground/30 mb-4" />
              <h3 className="text-foreground text-lg font-semibold mb-2">No models found</h3>
              <p className="text-muted-foreground text-sm text-center max-w-sm">
                Try adjusting your search or filter criteria to find the BMW model you're looking for.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredModels.length > 0 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-secondary/30">
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">
                  Showing {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, filteredModels.length)} of {filteredModels.length}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Per page:</span>
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="bg-card border border-border rounded px-2 py-1 text-xs text-foreground focus:outline-none focus:border-primary"
                  >
                    {PAGE_SIZE_OPTIONS.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 rounded text-xs font-medium transition-all ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <CarDetailDrawer
        car={selectedCar}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </section>
  );
};

export default CarCatalogue;
