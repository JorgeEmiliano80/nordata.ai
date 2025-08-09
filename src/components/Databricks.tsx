import databricksLogo from "@/assets/databricks.svg";

const DatabricksPartnership = () => {
  const tools = [
    "Apache Spark",
    "Delta Lake",
    "MLflow",
    "Databricks SQL",
    "AutoML",
    "Model Serving",
    "Workflows",
    "Monitoring & Observability",
  ];

  return (
    <div className="w-full h-16 sm:h-20 bg-gradient-to-r from-primary to-accent text-white flex items-center overflow-hidden">
      {/* Texto + Logo */}
      <div className="flex items-center gap-4 px-6 border-r border-white/30 shrink-0">
        <span className="text-base sm:text-lg font-medium leading-none">Parceiros oficiais da</span>
        <img
          src={databricksLogo}
          alt="Databricks"
          className="h-16 sm:h-28 w-auto object-contain"
        />
      </div>

      {/* Scroll vertical de ferramentas */}
      <div className="relative flex-1 h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full flex flex-col animate-scroll-up space-y-8 py-6">
          {[...tools, ...tools].map((tool, index) => (
            <span
              key={index}
              className="flex items-center justify-center h-16 sm:h-20 shrink-0 text-white/90 hover:text-white text-lg sm:itext-xl"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatabricksPartnership;
