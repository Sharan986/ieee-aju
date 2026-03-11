import { FaCalendarCheck } from "react-icons/fa";

const keyDates = [
  { label: "Paper Submission Deadline", date: "October 15, 2026", highlight: true },
  { label: "Acceptance Notification", date: "November 20, 2026" },
  { label: "Camera-Ready Submission", date: "December 10, 2026" },
  { label: "Registration Deadline", date: "January 10, 2027" },
  { label: "Conference Dates", date: "February 2–3, 2027", highlight: true },
];

export default function KeyDatesCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-primary px-6 py-4">
        <h3 className="text-white font-bold text-lg flex items-center gap-2">
          <FaCalendarCheck className="text-accent" />
          Key Dates
        </h3>
      </div>
      <div className="divide-y divide-gray-100">
        {keyDates.map((item) => (
          <div key={item.label} className="px-6 py-3.5">
            <p className="text-sm font-medium text-foreground">{item.label}</p>
            <p
              className={`text-sm mt-0.5 font-semibold ${
                item.highlight ? "text-accent-dark" : "text-primary"
              }`}
            >
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
