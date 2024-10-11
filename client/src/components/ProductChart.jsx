import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

const ProductChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:3001/api/products").then((response) => {
      const products = response.data;
      const prices = products.map((p) => p.price);
      const names = products.map((p) => p.name);

      const chart = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: names,
          datasets: [
            {
              label: "Preços dos Produtos",
              data: prices,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
      });

      return () => chart.destroy();
    });
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default ProductChart;
