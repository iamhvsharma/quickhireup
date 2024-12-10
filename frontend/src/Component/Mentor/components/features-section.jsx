import React from 'react'
import { CircleUser, Target, Compass } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: CircleUser,
      title: "Discover Yourself",
      description: "Understand your true self and discover what will help you achieve in your profession",
    },
    {
      icon: Target,
      title: "Set Goals",
      description: "Create a complete development plan and follow it step by step, without overwhelming yourself",
    },
    {
      icon: Compass,
      title: "Navigate your path",
      description: "Take confident steps on your path while getting support at the right moments",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-center mb-12">
          Build your career 
          <br />
          with a plan that works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

