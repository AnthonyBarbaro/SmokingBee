// components/InStoreFeatures.tsx
import { FC } from 'react'
import {
  Squares2X2Icon,
  CurrencyDollarIcon,
  UserGroupIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Huge In-Store Selection',
    description:
      'Explore a wide range of premium vapes, glassware, dab rigs & more—all under one roof.',
    icon: Squares2X2Icon,
  },
  {
    name: 'Competitive Prices',
    description:
      'Great deals on top brands—get more bang for your buck every visit.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Expert Staff',
    description:
      'Friendly, knowledgeable team ready to help you find exactly what you need.',
    icon: UserGroupIcon,
  },
  {
    name: 'Convenient Parking',
    description:
      'Ample free parking right outside—come in and browse at your leisure.',
    icon: MapPinIcon,
  },
]

const InStoreFeatures: FC = () => (
  <section
    role="region"
    aria-labelledby="instore-heading"
    className="bg-white py-16"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h2
        id="instore-heading"
        className="text-3xl font-extrabold text-center text-gold mb-12"
      >
        Shop In-Store at The Smoking Bee
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => {
          const slug = f.name.toLowerCase().replace(/\s+/g, '-')
          const href = `/shop/${slug}`
          const Icon = f.icon
          return (
            <a
              key={f.name}
              href={href}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Icon
                aria-hidden="true"
                className="h-12 w-12 text-gold stroke-current mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {f.name}
              </h3>
              <p className="mt-2 text-gray-600">{f.description}</p>
            </a>
          )
        })}
      </div>
    </div>
  </section>
)

export default InStoreFeatures
