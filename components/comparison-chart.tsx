"use client"

import { useRef, useEffect, useState } from "react"
import { Radar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js"
import { useMobile } from "@/hooks/use-mobile"

// Registrar los componentes necesarios para el gráfico de radar
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export function ComparisonChart() {
  const chartRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const [chartHeight, setChartHeight] = useState(500)

  useEffect(() => {
    const updateChartHeight = () => {
      if (chartRef.current) {
        const width = chartRef.current.offsetWidth
        setChartHeight(isMobile ? width * 1.2 : 500)
      }
    }

    updateChartHeight()
    window.addEventListener("resize", updateChartHeight)
    return () => window.removeEventListener("resize", updateChartHeight)
  }, [isMobile])

  // Datos para el gráfico de radar
  const chartData: ChartData<"radar"> = {
    labels: ["Calidad de vehículos", "Precio", "Garantía", "Financiación", "Atención al cliente", "Postventa"],
    datasets: [
      {
        label: "APR Cars",
        data: [95, 85, 90, 95, 90, 85],
        backgroundColor: "rgba(220, 38, 38, 0.2)",
        borderColor: "rgba(220, 38, 38, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(220, 38, 38, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(220, 38, 38, 1)",
      },
      {
        label: "Competencia",
        data: [75, 70, 65, 70, 60, 65],
        backgroundColor: "rgba(100, 116, 139, 0.2)",
        borderColor: "rgba(100, 116, 139, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(100, 116, 139, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(100, 116, 139, 1)",
      },
    ],
  }

  // Opciones para el gráfico de radar
  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: "transparent",
          font: {
            size: isMobile ? 10 : 14,
          },
          display: !isMobile,
        },
        pointLabels: {
          font: {
            size: isMobile ? 10 : 14,
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            size: isMobile ? 12 : 16,
          },
          padding: isMobile ? 16 : 24,
          boxWidth: isMobile ? 30 : 40,
        },
      },
      tooltip: {
        callbacks: {
          title: (items: any) => {
            return items[0].label
          },
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}/100`
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm" ref={chartRef}>
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-center">APR Cars vs. Competencia</h3>
      <div style={{ height: `${chartHeight}px` }} className="mb-4 md:mb-6">
        <Radar data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}
