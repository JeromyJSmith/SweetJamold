'use client';

import * as React from "react";
import { useState } from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Heart, Video, Users, ArrowRight } from 'lucide-react';

const BenefitConcertSite: FC = () => {
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      {/* Banner Image */}
      <div className="w-full mb-6 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src="/images/SweetJam-Poster.png"
          alt="Sweet Jam - A Benefit for Asheville"
          width={1200}
          height={300}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Conditional Content Rendering */}
      {currentPage === 'about' && <AboutContent />}
      {currentPage === 'proposal' && <ProposalContent />}
      {currentPage === 'sponsorship' && <SponsorshipContent />}
      
      {/* Contact Information */}
      <div className="text-center mt-8 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-purple-800 mb-2">Contact Us</h3>
        <a 
          href="mailto:JamcamAnnemarie@gmail.com" 
          className="font-bold text-blue-600 hover:text-blue-800 block"
        >
          Email: JamcamAnnemarie@gmail.com
        </a>
        <p className="font-bold">Phone: 303.330.8814</p>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: React.Dispatch<React.SetStateAction<string>> }) => (
  <div className="flex justify-center gap-4 mb-6">
    <Button 
      variant={currentPage === 'about' ? 'default' : 'outline'}
      className={`font-semibold ${
        currentPage === 'about' 
          ? 'bg-purple-800 hover:bg-purple-700 text-white' 
          : 'border-purple-800 text-purple-800 hover:bg-purple-100'
      }`}
      onClick={() => setCurrentPage('about')}
    >
      About Sweet Jam
    </Button>
    <Button 
      variant={currentPage === 'proposal' ? 'default' : 'outline'}
      className={`font-semibold ${
        currentPage === 'proposal' 
          ? 'bg-green-800 hover:bg-green-700 text-white' 
          : 'border-green-800 text-green-800 hover:bg-green-100'
      }`}
      onClick={() => setCurrentPage('proposal')}
    >
      Space Station Proposal
    </Button>
    <Button 
      variant={currentPage === 'sponsorship' ? 'default' : 'outline'}
      className={`font-semibold ${
        currentPage === 'sponsorship' 
          ? 'bg-blue-800 hover:bg-blue-700 text-white' 
          : 'border-blue-800 text-blue-800 hover:bg-blue-100'
      }`}
      onClick={() => setCurrentPage('sponsorship')}
    >
      Sponsorship Tiers
    </Button>
  </div>
);

// Full About Content
const AboutContent: FC = () => (
  <Card>
    <CardHeader className="bg-gradient-to-r from-purple-800 to-blue-800 text-white mb-6">
      <h1 className="text-3xl font-bold">Sweet Jam: A Benefit Concert</h1>
      <h2 className="text-xl">Supporting Asheville's Recovery</h2>
    </CardHeader>
    <CardContent className="p-6 space-y-8">
      <p className="text-lg leading-relaxed">
        Join us for a special evening at the Boulder Theater as we unite to support Asheville, 
        North Carolina, in the wake of Hurricane Helena. This benefit concert, organized by 
        JamCam Productions in association with Sweet Relief, WaterStep, and the Boulder Film 
        Commission, will raise funds to support Asheville's residents in their recovery journey.
      </p>

      <div className="bg-purple-50 p-6 rounded-lg border-2 border-gray-300 mb-8">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Event Overview</h3>
        <p>
          Hurricane Helena left Asheville facing critical challenges, with limited access to water, 
          disrupted transportation, and extensive damage to vital community infrastructure. This 
          concert aims to bring much-needed relief and hope to Asheville through the healing power 
          of music.
        </p>
      </div>

      <section className="border-2 border-gray-300 rounded-lg p-4 mb-8">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Our Partners</h3>
        {/* Partner details */}
      </section>

      <section className="bg-blue-50 p-6 rounded-lg border-2 border-gray-300 mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Concert Highlights</h3>
        {/* Highlights details */}
      </section>
    </CardContent>
  </Card>
);

// Full Proposal Content
const ProposalContent: FC = () => (
  <Card>
    <CardHeader className="bg-gradient-to-r from-green-800 to-blue-800 text-white">
      <h1 className="text-3xl font-bold">Sponsorship Proposal</h1>
      <h2 className="text-xl">Space Station Dispensary</h2>
    </CardHeader>
    <CardContent className="p-6 space-y-6">
      <section>
        <h3 className="text-xl font-bold text-green-800 mb-4">Why Space Station Dispensary?</h3>
        <p className="text-gray-600">
          Space Station Dispensary has a proud commitment to community. By joining Sweet Jam: A Benefit Concert for Asheville, you help rebuild critical community spaces and foster resilience.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Benefits */}
      </div>

      <section className="bg-green-50 p-6 rounded-lg border-2 border-gray-300">
        {/* Event overview details */}
      </section>
    </CardContent>
  </Card>
);

// Full Sponsorship Content
const SponsorshipContent: FC = () => (
  <Card>
    <CardHeader className="bg-gradient-to-r from-orange-700 to-yellow-600 text-white mb-6">
      <h1 className="text-3xl font-bold">Sponsorship Opportunities</h1>
      <h2 className="text-xl">Make a Lasting Impact</h2>
    </CardHeader>
    <CardContent className="p-6 space-y-6">
      {[
        {
          tier: "Maestro",
          price: 20000,
          seats: "8 VIP seats",
          location: "Private Box",
          benefits: [
            "Exclusive naming rights for VIP balcony",
            "Premium brand placement",
            "Private artist meet-and-greet",
            "Custom experience creation"
          ]
        },
        {
          tier: "Virtuoso",
          price: 15000,
          seats: "6 VIP seats",
          location: "Premium Balcony",
          benefits: [
            "Featured brand placement",
            "VIP reception hosting",
            "Exclusive backstage access",
            "Recognition in broadcast"
          ]
        }
        // Add more tiers if needed
      ].map((tier, index) => (
        <div key={index} className="border rounded-lg overflow-hidden mb-4">
          <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{tier.tier}</h3>
              <div className="text-2xl font-bold">${tier.price.toLocaleString()}</div>
            </div>
          </div>
          <div className="p-4">
            <p className="font-semibold">{tier.seats}</p>
            <p className="text-gray-600">{tier.location}</p>
            <ul className="space-y-2 mt-4">
              {tier.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-800" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default BenefitConcertSite;