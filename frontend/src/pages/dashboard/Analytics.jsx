import { useEffect } from "react";
import { useState } from "react"
import toast from "react-hot-toast";
import { useParams } from 'react-router-dom';
import API from "../../utils/API";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Analytics = () => {
  const { siteId } = useParams();
  const [analyticsCards, setAnalyticsCards] = useState([]);
  const [visitsOverTime, setVisitsOverTime] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await API.get(`/analytics/${siteId}`);
        setAnalyticsCards([
          {
            title: "Total Page Views",
            value: response.data.totalVisits,
          },
          {
            title: "Unique Sessions",
            value: response.data.uniqueVisitors,
          },
          {
            title: "Top Page",
            value: response.data.topPage,
          },
          {
            title: "Top Referrer",
            value: response.data.topReferrer,
          }
        ])
        setVisitsOverTime(response.data?.visitsOverTime)
        toast.success(response?.data?.message);
      } catch (error) {
        toast.error(error.response?.data?.message)
      }
    }
    if (siteId) {
      fetchAnalytics();
    }
  }, [siteId])

  return (
    <div className="bg-[#003F3A] h-screen w-full overflow-y-scroll">
      <h2 className="text-center text-5xl font-light p-4 text-[#08cdbd]">Analytics Matter</h2>
      <div className="flex flex-wrap w-full p-4 gap-4">
        {analyticsCards.map((analytics, index) => (
          <div key={index} className="flex-1 min-w-[230px] bg-[#042f2b] rounded-md shadow-sm hover:shadow-lg transition-all duration-300 p-5">
            <h2 className="text-gray-400 pb-2">{analytics?.title}</h2>
            <h3 className="text-[#08cdbd] text-xl font-semibold">{analytics?.value}</h3>
          </div>
        ))}
      </div>

      <div className="bg-[#042f2b] mt-6 p-6 rounded-xl shadow-lg m-4">
        <h3 className="text-[#08cdbd] text-2xl font-semibold mb-4">
          Visits Over Time
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={visitsOverTime}>

            <CartesianGrid
              stroke="#6b7280"
              strokeDasharray="5 5"
              opacity={0.3}
            />

            <XAxis
              dataKey="_id"
              tick={{ fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#022c29",
                border: "1px solid #08cdbd",
                borderRadius: "8px",
                color: "#fff",
              }}
              labelStyle={{ color: "#08cdbd" }}
            />

            <Line
              type="monotone"
              dataKey="visits"
              stroke="#08cdbd"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Analytics
