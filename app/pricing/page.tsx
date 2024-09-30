'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Switch, Card, CardBody, CardHeader, Button } from "@nextui-org/react"

const tiers = [
  {
    name: 'Free',
    price: { monthly: 0, annual: 0 },
    description: 'Get started with our free components',
    features: [
      'A growing library of awesome components',
      'React / Next.js / Tailwind CSS code',
      'Serves a wide variety of audience',
      'MIT Licence. Personal or commercial projects'
    ]
  },
  {
    name: 'Pro Templates',
    price: { monthly: 20, annual: 200 },
    description: 'Unlock professional templates',
    features: [
      'All Free tier features',
      'Access to pro templates',
      'Priority support',
      'Template customization'
    ]
  },
  {
    name: 'Custom Design',
    price: { monthly: 50, annual: 500 },
    description: 'Custom design of complete page components',
    features: [
      'All Pro Template features',
      'Custom page component design',
      'Unlimited revisions',
      'Dedicated designer'
    ]
  },
  {
    name: 'Enterprise',
    price: { monthly: 100, annual: 1000 },
    description: 'Full-scale design and development solutions',
    features: [
      'All Custom Design features',
      'Full website design and development',
      '24/7 support',
      'Custom integrations'
    ]
  }
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="min-h-screen text-foreground py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Pricing Plans</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">Choose the perfect plan for your needs</p>
        
        <div className="flex justify-center items-center mb-12">
          <span className="mr-2 text-muted-foreground">Monthly</span>
          <Switch isSelected={isAnnual} onValueChange={setIsAnnual} />
          <span className="ml-2 text-muted-foreground">Annual</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <Card key={index} className={`flex flex-col ${index === 1 ? 'border-2 border-primary' : ''}`}>
              <CardHeader className="flex flex-col items-center pb-0">
                <h2 className="text-2xl font-semibold text-center">{tier.name}</h2>
                <p className="text-center text-muted-foreground mt-2">{tier.description}</p>
              </CardHeader>
              <CardBody className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-4xl font-bold text-center mb-4">
                    ${isAnnual ? tier.price.annual : tier.price.monthly}
                    <span className="text-sm font-normal text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  color={index === 0 ? "default" : "primary"}
                  variant={index === 0 ? "bordered" : "solid"}
                  className="mt-6 w-full"
                >
                  {index === 0 ? 'Get Started' : 'Choose Plan'}
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Secure payment options</p>
          <div className="flex justify-center space-x-4">
            <Button color="default" variant="bordered" size="sm">
              Credit Card
            </Button>
            <Button color="default" variant="bordered" size="sm">
              Crypto
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}