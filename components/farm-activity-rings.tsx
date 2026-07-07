import { ArrowRight, Gauge, Leaf, Waves, Zap } from "lucide-react";
import { PrimaryButton } from "@/components/site-chrome";

const ringMetrics = [
  {
    key: "oxygen",
    label: "Oxy",
    value: 82,
    display: "82/100",
    unit: "ổn định",
    color: "#00A7B5",
    track: "#D7F3F6",
    icon: Waves,
  },
  {
    key: "energy",
    label: "Điện",
    value: 68,
    display: "32%",
    unit: "mục tiêu tiết kiệm",
    color: "#84CC16",
    track: "#E7F7CC",
    icon: Zap,
  },
  {
    key: "risk",
    label: "Rủi ro",
    value: 76,
    display: "24/7",
    unit: "giám sát vận hành",
    color: "#F59E0B",
    track: "#FDECC8",
    icon: Gauge,
  },
];

function ActivityRing() {
  const size = 252;
  const center = size / 2;
  const rings = [
    { radius: 104, width: 18, metric: ringMetrics[0] },
    { radius: 78, width: 18, metric: ringMetrics[1] },
    { radius: 52, width: 18, metric: ringMetrics[2] },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px]">
      <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full -rotate-90 drop-shadow-[0_22px_35px_rgba(15,23,42,0.14)]" role="img" aria-label="Chỉ số vận hành ao Dolic">
        {rings.map(({ radius, width, metric }) => {
          const circumference = 2 * Math.PI * radius;
          const progress = (metric.value / 100) * circumference;

          return (
            <g key={metric.key}>
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={metric.track}
                strokeWidth={width}
              />
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={metric.color}
                strokeWidth={width}
                strokeDasharray={`${progress} ${circumference - progress}`}
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-slate-200 bg-white text-center shadow-[0_18px_35px_-28px_rgba(15,23,42,0.35)]">
          <Leaf className="h-6 w-6 text-emerald-600" />
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">Farm</p>
          <p className="text-lg font-bold text-[#0A2E5C]">Health</p>
        </div>
      </div>
    </div>
  );
}

export function FarmActivityRings() {
  return (
    <section className="bg-white px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f4fbfc_100%)] p-5 shadow-[0_28px_80px_-56px_rgba(15,23,42,0.42)] sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">Dolic farm activity</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-normal text-slate-950 sm:text-3xl md:text-4xl">
            Nhìn hiệu quả vận hành như một vòng sức khỏe của ao
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Dolic biến tư vấn thiết bị thành các chỉ số dễ theo dõi: oxy ổn định, điện tối ưu và rủi ro vận hành thấp hơn. Mỗi vòng tương ứng với một mục tiêu kỹ thuật khi triển khai sục khí, bơm và đo nước cho trang trại.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="/giai-phap">
              Xem giải pháp
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <PrimaryButton href="/lien-he" variant="outline">
              Nhận giải pháp ao
            </PrimaryButton>
          </div>
        </div>

        <div className="grid gap-6 rounded-lg border border-cyan-100 bg-white p-4 shadow-sm sm:p-6 md:grid-cols-[300px_1fr] md:items-center">
          <ActivityRing />
          <div className="space-y-4">
            {ringMetrics.map(({ key, label, display, unit, color, icon: Icon }) => (
              <div key={key} className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white shadow-sm" style={{ color }}>
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">{label}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{unit}</p>
                </div>
                <p className="text-2xl font-bold tabular-nums" style={{ color }}>
                  {display}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
