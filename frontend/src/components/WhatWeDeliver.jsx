import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Legend
} from 'recharts';

const WhatWeDeliver = () => {

  const visitorsData = [
    { name: "Mon", visitors: 400 },
    { name: "Tue", visitors: 900 },
    { name: "Wed", visitors: 1200 },
    { name: "Thu", visitors: 2000 },
    { name: "Fri", visitors: 3200 },
    { name: "Sat", visitors: 2800 },
    { name: "Sun", visitors: 3500 },
  ];

  const trafficData = [
    { name: "Home", traffic: 2400 },
    { name: "Shop", traffic: 1800 },
    { name: "Blog", traffic: 1200 },
    { name: "About", traffic: 900 },
  ];

  const deviceData = [
    { name: "Mobile", value: 60, fill: "#6366F1" },
    { name: "Desktop", value: 30, fill: "#10B981" },
    { name: "Tablet", value: 10, fill: "#F59E0B" },
  ];

  const COLORS = ["#6366F1", "#10B981", "#F59E0B"];

  return (
    <div className='bg-[#003F3A] py-20 px-4 sm:px-6'>

      <div className='text-center mb-14'>
        <h1 className='text-white text-4xl font-bold mb-4'>
          What We Deliver
        </h1>
        <p className='text-gray-300 max-w-xl mx-auto'>
          Powerful analytics tools to help you understand, optimize, and grow your digital presence.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>

        <div className="h-[300px]">
          <div className="bg-white rounded-2xl p-5 shadow-lg h-full">

            <h2 className="font-semibold text-lg mb-1">Visitors Trend</h2>
            <p className="text-sm text-gray-500 mb-3">Daily website visitors</p>

            <ResponsiveContainer width='100%' height='80%'>
              <LineChart data={visitorsData}>
               
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='visitors'
                  stroke='#6366F1'
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>
        </div>

        <div className="h-[300px]">
          <div className="bg-white rounded-2xl p-5 shadow-lg h-full">

            <h2 className="font-semibold text-lg mb-1">Page Traffic</h2>
            <p className="text-sm text-gray-500 mb-3">Traffic by page</p>

            <ResponsiveContainer width='100%' height='80%'>
              <BarChart data={trafficData}>
             
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey='traffic'
                  fill='#10B981'
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>
        </div>

        <div className="h-[300px]">
          <div className="bg-white rounded-2xl p-5 shadow-lg h-full">

            <h2 className="font-semibold text-lg mb-1">Device Distribution</h2>
            <p className="text-sm text-gray-500 mb-3">User device distribution</p>

            <ResponsiveContainer width='100%' height='80%'>
              <PieChart>

                <Tooltip />
                <Legend iconType="circle" />

                <Pie
                  data={deviceData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                  cornerRadius={8}
                />

                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-lg font-semibold fill-gray-700"
                >
                  100%
                </text>

              </PieChart>
            </ResponsiveContainer>

          </div>
        </div>

      </div>
    </div>
  )
}

export default WhatWeDeliver;