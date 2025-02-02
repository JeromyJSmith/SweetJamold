import * as React from "react";
import { useState } from 'react';
import type { FC } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Heart, Video, Users, ArrowRight } from 'lucide-react';

const BenefitConcertSite: FC = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const Navigation = () => (
    <div className="flex justify-center gap-4 mb-6">
      <Button 
        variant={currentPage === 'about' ? 'default' : 'outline'}
        className="font-semibold"
        onClick={() => setCurrentPage('about')}
      >
        About Sweet Jam
      </Button>
      <Button 
        variant={currentPage === 'proposal' ? 'default' : 'outline'}
        className="font-semibold"
        onClick={() => setCurrentPage('proposal')}
      >
        Space Station Proposal
      </Button>
      <Button 
        variant={currentPage === 'sponsorship' ? 'default' : 'outline'}
        className="font-semibold"
        onClick={() => setCurrentPage('sponsorship')}
      >
        Sponsorship Tiers
      </Button>
    </div>
  );

  const AboutContent = () => (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-800 to-blue-800 text-white">
        <h1 className="text-3xl font-bold">Sweet Jam: A Benefit Concert</h1>
        <h2 className="text-xl">Supporting Asheville's Recovery</h2>
      </CardHeader>
      <CardContent className="p-6 space-y-8">
        <section className="prose max-w-none">
          <p className="text-lg leading-relaxed">
            Join us for a special evening at the Boulder Theater as we unite to support Asheville, 
            North Carolina, in the wake of Hurricane Helena. This benefit concert, organized by 
            JamCam Productions in association with Sweet Relief, WaterStep, and the Boulder Film 
            Commission, will raise funds to support Asheville's residents in their recovery journey.
          </p>
        </section>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Event Overview</h3>
          <p className="mb-4">
            Hurricane Helena left Asheville facing critical challenges, with limited access to water, 
            disrupted transportation, and extensive damage to vital community infrastructure. This 
            concert aims to bring much-needed relief and hope to Asheville through the healing power 
            of music.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-start gap-2">
              <Music className="w-5 h-5 text-purple-800 flex-shrink-0 mt-1" />
              <div>
                <strong>Date</strong>
                <p>TBA early 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Users className="w-5 h-5 text-purple-800 flex-shrink-0 mt-1" />
              <div>
                <strong>Location</strong>
                <p>Boulder Theater, CO</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Video className="w-5 h-5 text-purple-800 flex-shrink-0 mt-1" />
              <div>
                <strong>Format</strong>
                <p>Live + Global Webcast</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h3 className="text-xl font-bold text-purple-800 mb-4">Our Partners</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-start gap-3">
                <Video className="w-6 h-6 text-purple-800 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">JamCam Productions</h4>
                  <p className="text-gray-600">
                    Bringing over 30 years of music industry experience, capturing exclusive artist 
                    interviews and live performances across genres. With a longstanding history at 
                    the Boulder Theater since 1992, JamCam proudly brings its expertise to this cause.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-purple-800 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Sweet Relief</h4>
                  <p className="text-gray-600">
                    A charitable organization dedicated to supporting individuals in the music industry 
                    who are often hardest hit by crises, providing financial assistance to those 
                    affected in North Carolina.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-purple-800 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">WaterStep</h4>
                  <p className="text-gray-600">
                    Providing critical water purification solutions and supporting disaster response 
                    management through preparedness, immediate response, and long-term recovery efforts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-start gap-3">
                <Video className="w-6 h-6 text-purple-800 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Boulder Film Commission</h4>
                  <p className="text-gray-600">
                    Supporting and celebrating the local creative community, promoting film projects 
                    and industry networking to amplify awareness and encourage contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Concert Highlights</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Music className="w-5 h-5 text-blue-800 flex-shrink-0 mt-1" />
              <p>Live Performances by renowned musicians from the jam band world, featuring an all-star 
              "power jam" finale celebrating resilience.</p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-800 flex-shrink-0 mt-1" />
              <p>Backstage Interviews with artists sharing how music bridges communities and fosters healing.</p>
            </div>
            <div className="flex items-start gap-3">
              <Video className="w-5 h-5 text-blue-800 flex-shrink-0 mt-1" />
              <p>Live Webcast reaching a global audience to maximize impact and donations.</p>
            </div>
          </div>
        </section>

        <section className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Why Music?</h3>
          <p className="text-gray-600 mb-4">
            In natural disasters, musicians are often deeply affected as their livelihoods depend on 
            instruments, venues, and performance spaces that may be lost. This benefit concert aims to 
            provide both immediate and long-term support for Asheville's music community, including 
            artists who have lost the tools of their trade.
          </p>
          <p className="text-gray-600">
            Our goal is to restore Asheville's vibrant music scene and reinforce the role of music 
            as a source of healing and connection. Join us in celebrating the strength of music to 
            heal and inspire resilience.
          </p>
        </section>

        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Contact Information</h3>
          <div className="space-y-2">
            <p className="font-bold">Email: JamcamAnnemarie@gmail.com</p>
            <p className="font-bold">Phone: 303.330.8814</p>
            <p className="font-bold">Website: sweetjambenefit.org</p>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Button 
              className="bg-purple-800"
              onClick={() => setCurrentPage('sponsorship')}
            >
              View Sponsorship Tiers
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ProposalContent = () => (
    <Card>
      <CardHeader className="bg-gradient-to-r from-green-800 to-blue-800 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Sponsorship Proposal</h1>
            <h2 className="text-xl">Space Station Dispensary</h2>
          </div>
          <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
            <Users className="w-12 h-12 text-green-800" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <section>
          <h3 className="text-xl font-bold text-green-800 mb-4">Why Space Station Dispensary?</h3>
          <p className="text-gray-600">
            Your commitment to community engagement and excellence in service aligns perfectly 
            with our mission to support Asheville's recovery. As a respected Longmont business, 
            your participation would demonstrate leadership in community support and disaster relief.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">Partnership Benefits</h4>
            <ul className="space-y-2">
              <li>Premium brand visibility</li>
              <li>VIP event access</li>
              <li>Community goodwill</li>
              <li>Marketing opportunities</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">Impact Opportunities</h4>
            <ul className="space-y-2">
              <li>Support water access initiatives</li>
              <li>Help rebuild music venues</li>
              <li>Aid local artists</li>
              <li>Foster community resilience</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const SponsorshipContent = () => (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-800 to-blue-800 text-white">
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
          },
          {
            tier: "Prodigy",
            price: 10000,
            seats: "4 VIP seats",
            location: "Premium Balcony",
            benefits: [
              "Priority balcony seating",
              "Prominent brand visibility",
              "VIP area access",
              "Event program feature"
            ]
          }
        ].map((tier, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{tier.tier}</h3>
                <div className="text-2xl font-bold">${tier.price.toLocaleString()}</div>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <p className="font-semibold">{tier.seats}</p>
                <p className="text-gray-600">{tier.location}</p>
              </div>
              <ul className="space-y-2">
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <Navigation />
      {currentPage === 'about' && <AboutContent />}
      {currentPage === 'proposal' && <ProposalContent />}
      {currentPage === 'sponsorship' && <SponsorshipContent />}
      
      <div className="text-center mt-8 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-purple-800 mb-2">Contact Us</h3>
        <p className="font-bold">Email: JamcamAnnemarie@gmail.com</p>
        <p className="font-bold">Phone: 303.330.8814</p>
      </div>
    </div>
  );
};

export default BenefitConcertSite;
