interface CalendarIconProps {
  day?: string | number
  size?: "sm" | "lg"
}

export function CalendarIcon({ day = "11", size = "lg" }: CalendarIconProps) {
  const dimensions = size === "lg" ? "w-32 h-32 md:w-40 md:h-40" : "w-12 h-12 md:w-16 md:h-16"
  const fontSize = size === "lg" ? "text-6xl md:text-7xl" : "text-2xl md:text-3xl"

  return (
    <div className={`relative ${dimensions}`}>
      {/* Calendar top part */}
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-calendar-pink rounded-t-lg flex">
        <div className="flex-1"></div>
        <div className="w-1/6 h-full bg-calendar-yellow"></div>
        <div className="w-1/6 h-full bg-calendar-yellow"></div>
        <div className="flex-1"></div>
      </div>

      {/* Calendar body */}
      <div className="absolute top-1/4 left-0 right-0 bottom-0 bg-white border-2 border-black rounded-b-lg flex items-center justify-center">
        <span className={`font-bold ${fontSize}`}>{day}</span>
      </div>

      {/* Calendar hangers */}
      <div className="absolute top-0 left-1/4 w-1 h-3 bg-black rounded-full"></div>
      <div className="absolute top-0 right-1/4 w-1 h-3 bg-black rounded-full"></div>
    </div>
  )
}

